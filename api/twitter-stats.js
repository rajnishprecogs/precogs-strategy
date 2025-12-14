// Vercel Serverless Function to fetch Twitter/X follower counts
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
        { name: 'Precogs AI', username: 'PrecogsAI' },
        { name: 'Snyk', username: 'saborky' },
        { name: 'CodeRabbit', username: 'caborabbit' },
        { name: 'Aikido', username: 'AikidoSec' },
        { name: 'Checkmarx', username: 'Checkmarx' },
        { name: 'Veracode', username: 'Veracode' },
        { name: 'Semgrep', username: 'semaborge' },
        { name: 'SonarQube', username: 'SonarQube' }
    ];

    try {
        const usernames = competitors.map(c => c.username).join(',');

        // Twitter API v2: Get users by usernames
        const response = await fetch(
            `https://api.twitter.com/2/users/by?usernames=${usernames}&user.fields=public_metrics,description,profile_image_url`,
            {
                headers: {
                    'Authorization': `Bearer ${TWITTER_BEARER_TOKEN}`
                }
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Twitter API Error:', errorText);
            return res.status(response.status).json({
                error: 'Twitter API error',
                details: errorText
            });
        }

        const data = await response.json();

        // Map the response to our format
        const results = competitors.map(competitor => {
            const user = data.data?.find(u =>
                u.username.toLowerCase() === competitor.username.toLowerCase()
            );

            return {
                name: competitor.name,
                handle: `@${competitor.username}`,
                followers: user?.public_metrics?.followers_count || 0,
                following: user?.public_metrics?.following_count || 0,
                tweets: user?.public_metrics?.tweet_count || 0,
                description: user?.description || '',
                profileImage: user?.profile_image_url || '',
                lastUpdated: new Date().toISOString()
            };
        });

        // Return with cache headers (cache for 1 hour)
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        return res.status(200).json({
            success: true,
            data: results,
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
