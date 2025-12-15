// Vercel Serverless Function to fetch Twitter/X follower counts AND recent tweets
// Deploy to Vercel and set TWITTER_BEARER_TOKEN in environment variables

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

    if (!TWITTER_BEARER_TOKEN) {
        return res.status(500).json({ error: 'Twitter Bearer Token not configured' });
    }

    // Competitors to track (Twitter usernames without @)
    const competitors = [
        { name: 'Precogs AI', username: 'PrecogsAI', postsPerWeek: { x: 7, linkedin: 3 } },
        { name: 'Snyk', username: 'snyksec', postsPerWeek: { x: 21, linkedin: 5 } },
        { name: 'CodeRabbit', username: 'caborabbit', postsPerWeek: { x: 14, linkedin: 3 } },
        { name: 'Aikido', username: 'AikidoSec', postsPerWeek: { x: 10, linkedin: 4 } },
        { name: 'Checkmarx', username: 'Checkmarx', postsPerWeek: { x: 15, linkedin: 5 } },
        { name: 'Veracode', username: 'Veracode', postsPerWeek: { x: 12, linkedin: 4 } },
        { name: 'Semgrep', username: 'semgrep', postsPerWeek: { x: 8, linkedin: 2 } },
        { name: 'SonarQube', username: 'SonarQube', postsPerWeek: { x: 10, linkedin: 3 } }
    ];

    try {
        const usernames = competitors.map(c => c.username).join(',');

        // Twitter API v2: Get users by usernames with public metrics
        const usersResponse = await fetch(
            `https://api.twitter.com/2/users/by?usernames=${usernames}&user.fields=public_metrics,description,profile_image_url`,
            {
                headers: {
                    'Authorization': `Bearer ${TWITTER_BEARER_TOKEN}`
                }
            }
        );

        if (!usersResponse.ok) {
            const errorText = await usersResponse.text();
            console.error('Twitter API Error:', errorText);
            return res.status(usersResponse.status).json({
                error: 'Twitter API error',
                details: errorText
            });
        }

        const usersData = await usersResponse.json();

        // Map user IDs for fetching tweets
        const userIdMap = {};
        usersData.data?.forEach(user => {
            userIdMap[user.username.toLowerCase()] = user.id;
        });

        // Fetch recent tweets for each user (last 5 tweets)
        const recentTweets = {};

        for (const competitor of competitors) {
            const userId = userIdMap[competitor.username.toLowerCase()];
            if (userId) {
                try {
                    const tweetsResponse = await fetch(
                        `https://api.twitter.com/2/users/${userId}/tweets?max_results=5&tweet.fields=created_at,public_metrics,text`,
                        {
                            headers: {
                                'Authorization': `Bearer ${TWITTER_BEARER_TOKEN}`
                            }
                        }
                    );

                    if (tweetsResponse.ok) {
                        const tweetsData = await tweetsResponse.json();
                        recentTweets[competitor.username.toLowerCase()] = tweetsData.data || [];
                    }
                } catch (e) {
                    console.log(`Failed to fetch tweets for ${competitor.username}:`, e.message);
                    recentTweets[competitor.username.toLowerCase()] = [];
                }
            }
        }

        // Map the response to our format
        const results = competitors.map(competitor => {
            const user = usersData.data?.find(u =>
                u.username.toLowerCase() === competitor.username.toLowerCase()
            );
            const tweets = recentTweets[competitor.username.toLowerCase()] || [];

            return {
                name: competitor.name,
                handle: `@${competitor.username}`,
                userId: userIdMap[competitor.username.toLowerCase()],
                followers: user?.public_metrics?.followers_count || 0,
                following: user?.public_metrics?.following_count || 0,
                totalTweets: user?.public_metrics?.tweet_count || 0,
                description: user?.description || '',
                profileImage: user?.profile_image_url || '',
                postsPerWeek: competitor.postsPerWeek,
                recentTweets: tweets.map(t => ({
                    id: t.id,
                    text: t.text,
                    createdAt: t.created_at,
                    likes: t.public_metrics?.like_count || 0,
                    retweets: t.public_metrics?.retweet_count || 0,
                    replies: t.public_metrics?.reply_count || 0,
                    url: `https://twitter.com/${competitor.username}/status/${t.id}`
                })),
                lastUpdated: new Date().toISOString()
            };
        });

        // Calculate posting frequency stats
        const postingStats = {
            avgPostsPerWeekX: Math.round(competitors.reduce((sum, c) => sum + c.postsPerWeek.x, 0) / competitors.length),
            avgPostsPerWeekLinkedIn: Math.round(competitors.reduce((sum, c) => sum + c.postsPerWeek.linkedin, 0) / competitors.length),
            topPoster: competitors.reduce((max, c) => c.postsPerWeek.x > max.postsPerWeek.x ? c : max, competitors[0]).name,
            recommendation: "Post 2-3x daily on X, 3-5x weekly on LinkedIn"
        };

        // Return with cache headers (cache for 30 minutes)
        res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate');
        return res.status(200).json({
            success: true,
            data: results,
            postingStats,
            fetchedAt: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error fetching Twitter data:', error);
        return res.status(500).json({
            error: 'Failed to fetch Twitter data',
            message: error.message
        });
    }
}
