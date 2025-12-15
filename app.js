/**
 * Precogs AI Documentation Hub - JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSearch();
    initSidebar();
    initTaskManager();
    initCodeCopy();
});

/**
 * Navigation - Handle section switching
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.doc-section');
    const currentSectionEl = document.getElementById('currentSection');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            const sectionId = link.getAttribute('data-section');

            // If link points to an external HTML file, allow normal navigation
            if (href && (href.endsWith('.html') || href.startsWith('http'))) {
                // Don't prevent default - let the browser navigate
                return;
            }

            e.preventDefault();

            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show correct section
            sections.forEach(s => s.classList.remove('active'));
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Update breadcrumb
            if (currentSectionEl) {
                currentSectionEl.textContent = link.textContent.replace(/^[^\s]+\s/, '');
            }

            // Close sidebar on mobile
            const sidebar = document.getElementById('sidebar');
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('open');
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

/**
 * Search functionality
 */
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        navLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            const parent = link.closest('li');

            if (query === '' || text.includes(query)) {
                parent.style.display = '';
            } else {
                parent.style.display = 'none';
            }
        });
    });
}

/**
 * Sidebar toggle for mobile
 */
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const sidebarClose = document.getElementById('sidebarClose');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }

    if (sidebarClose) {
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
}

/**
 * Task Manager - Interactive task list with local storage
 */
function initTaskManager() {
    // Load tasks from localStorage or use defaults
    let tasks = loadTasks();

    // Render tasks
    renderTasks(tasks);

    // Set up filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            filterTasks(filter);
        });
    });
}

function loadTasks() {
    const stored = localStorage.getItem('precogs_tasks');
    if (stored) {
        return JSON.parse(stored);
    }

    // Default tasks
    return [
        // JLR Priority Tasks
        {
            id: 1,
            title: 'Send summary & literature to David Coleman (JLR Procurement)',
            category: 'jlr',
            priority: 'high',
            completed: false,
            dueDate: '2024-12-16',
            notes: 'Per David: "early next week send a bit of a summary and the literature again to the group"'
        },
        {
            id: 2,
            title: 'Tara Integration - Research & Planning',
            category: 'jlr',
            priority: 'high',
            completed: false,
            dueDate: null,
            notes: 'From JLR meeting'
        },
        {
            id: 3,
            title: 'PII Configuration - JLR Requirements',
            category: 'jlr',
            priority: 'high',
            completed: false,
            dueDate: null,
            notes: 'From JLR meeting'
        },
        {
            id: 4,
            title: 'Contextualization Implementation',
            category: 'jlr',
            priority: 'medium',
            completed: false,
            dueDate: null,
            notes: 'From JLR meeting'
        },
        {
            id: 5,
            title: 'Armis Integration Research',
            category: 'jlr',
            priority: 'medium',
            completed: false,
            dueDate: null,
            notes: 'From JLR meeting'
        },
        {
            id: 6,
            title: 'Tenable Integration Research',
            category: 'jlr',
            priority: 'medium',
            completed: false,
            dueDate: null,
            notes: 'From JLR meeting'
        },

        // Marketplace Tasks
        {
            id: 7,
            title: 'Publish GitHub Action to Marketplace',
            category: 'marketplace',
            priority: 'high',
            completed: false,
            dueDate: null,
            notes: 'Fastest path to market - start here'
        },
        {
            id: 8,
            title: 'Register AWS Seller Account',
            category: 'marketplace',
            priority: 'high',
            completed: false,
            dueDate: null,
            notes: 'Long lead time (1-2 weeks) - start immediately'
        },
        {
            id: 9,
            title: 'Complete AWS Tax & Banking verification',
            category: 'marketplace',
            priority: 'medium',
            completed: false,
            dueDate: null,
            notes: 'Required for AWS Marketplace'
        },
        {
            id: 10,
            title: 'Implement Azure AD SSO integration',
            category: 'marketplace',
            priority: 'high',
            completed: false,
            dueDate: null,
            notes: 'Technical blocker for Azure Marketplace'
        },
        {
            id: 11,
            title: 'Register Microsoft Partner Center account',
            category: 'marketplace',
            priority: 'medium',
            completed: false,
            dueDate: null,
            notes: 'Required for Azure Marketplace'
        },
        {
            id: 12,
            title: 'Create GitLab CI/CD Catalog component',
            category: 'marketplace',
            priority: 'medium',
            completed: false,
            dueDate: null,
            notes: 'For GitLab integration'
        },

        // GTM Tasks  
        {
            id: 13,
            title: 'Define pricing tiers (Free/Pro/Enterprise)',
            category: 'gtm',
            priority: 'high',
            completed: false,
            dueDate: null,
            notes: 'Critical for marketplace listings'
        },
        {
            id: 14,
            title: 'Create 3 case studies',
            category: 'gtm',
            priority: 'medium',
            completed: false,
            dueDate: null,
            notes: 'For Phase 1 GTM'
        },
        {
            id: 15,
            title: 'Build vulnerability database (public)',
            category: 'gtm',
            priority: 'low',
            completed: false,
            dueDate: null,
            notes: 'Content marketing / thought leadership'
        },
        {
            id: 16,
            title: 'Prepare SQL Injection Blog Post',
            category: 'jlr',
            priority: 'medium',
            completed: true,
            dueDate: null,
            notes: 'Published: The Complete 2025 Prevention Guide'
        },
        {
            id: 17,
            title: 'Integrate Vanta for Compliance',
            category: 'jlr',
            priority: 'high',
            completed: false,
            dueDate: null,
            notes: 'Automate SOC2/ISO27001 evidence collection'
        }
    ];
}

function saveTasks(tasks) {
    localStorage.setItem('precogs_tasks', JSON.stringify(tasks));
}

function renderTasks(tasks) {
    const containers = {
        jlr: document.getElementById('jlr-tasks'),
        marketplace: document.getElementById('marketplace-tasks'),
        gtm: document.getElementById('gtm-tasks')
    };

    // Clear existing
    Object.values(containers).forEach(c => {
        if (c) c.innerHTML = '';
    });

    // Group by category
    tasks.forEach(task => {
        const container = containers[task.category];
        if (!container) return;

        const taskEl = createTaskElement(task);
        container.appendChild(taskEl);
    });

    // Update counts
    updateTaskCounts(tasks);
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.setAttribute('data-id', task.id);
    li.setAttribute('data-category', task.category);
    li.setAttribute('data-priority', task.priority);

    const dueDateStr = task.dueDate ? formatDate(task.dueDate) : '';

    li.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
        <div class="task-content">
            <div class="task-title">${task.title}</div>
            <div class="task-meta">
                <span class="task-tag priority-${task.priority}">${task.priority.toUpperCase()}</span>
                ${dueDateStr ? `<span class="task-tag category">Due: ${dueDateStr}</span>` : ''}
            </div>
            ${task.notes ? `<div class="task-notes" style="font-size: 12px; color: var(--text-muted); margin-top: 8px;">${task.notes}</div>` : ''}
        </div>
    `;

    // Handle checkbox toggle
    const checkbox = li.querySelector('.task-checkbox');
    checkbox.addEventListener('change', () => {
        toggleTask(task.id);
    });

    return li;
}

function toggleTask(taskId) {
    let tasks = loadTasks();
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasks(tasks);
        renderTasks(tasks);
    }
}

function filterTasks(filter) {
    const taskItems = document.querySelectorAll('.task-item');

    taskItems.forEach(item => {
        const priority = item.getAttribute('data-priority');
        const completed = item.classList.contains('completed');

        let show = true;

        if (filter === 'active') {
            show = !completed;
        } else if (filter === 'completed') {
            show = completed;
        } else if (filter === 'high') {
            show = priority === 'high';
        }

        item.style.display = show ? '' : 'none';
    });
}

function updateTaskCounts(tasks) {
    const counts = {
        jlr: { total: 0, completed: 0 },
        marketplace: { total: 0, completed: 0 },
        gtm: { total: 0, completed: 0 }
    };

    tasks.forEach(task => {
        if (counts[task.category]) {
            counts[task.category].total++;
            if (task.completed) counts[task.category].completed++;
        }
    });

    Object.keys(counts).forEach(cat => {
        const countEl = document.getElementById(`${cat}-count`);
        if (countEl) {
            countEl.textContent = `${counts[cat].completed}/${counts[cat].total}`;
        }
    });
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Add new task
 */
function addTask(title, category, priority, notes, dueDate) {
    let tasks = loadTasks();
    const newId = Math.max(...tasks.map(t => t.id), 0) + 1;

    const newTask = {
        id: newId,
        title: title,
        category: category,
        priority: priority || 'medium',
        completed: false,
        dueDate: dueDate || null,
        notes: notes || ''
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTasks(tasks);

    return newTask;
}

/**
 * Delete task
 */
function deleteTask(taskId) {
    let tasks = loadTasks();
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasks(tasks);
    renderTasks(tasks);
}

/**
 * Show add task modal
 */
function showAddTaskModal(category = 'jlr') {
    // Remove existing modal if any
    const existingModal = document.getElementById('add-task-modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.id = 'add-task-modal';
    modal.className = 'task-modal-overlay';
    modal.innerHTML = `
        <div class="task-modal">
            <div class="task-modal-header">
                <h3>➕ Add New Task</h3>
                <button class="modal-close-btn" onclick="closeAddTaskModal()">×</button>
            </div>
            <form id="add-task-form" class="task-form">
                <div class="form-group">
                    <label for="task-title">Task Title *</label>
                    <input type="text" id="task-title" placeholder="What needs to be done?" required>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="task-category">Category</label>
                        <select id="task-category">
                            <option value="jlr" ${category === 'jlr' ? 'selected' : ''}>🚗 JLR Account</option>
                            <option value="marketplace" ${category === 'marketplace' ? 'selected' : ''}>🏪 Marketplace</option>
                            <option value="gtm" ${category === 'gtm' ? 'selected' : ''}>📈 GTM Strategy</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="task-priority">Priority</label>
                        <select id="task-priority">
                            <option value="high">🔴 High</option>
                            <option value="medium" selected>🟡 Medium</option>
                            <option value="low">🟢 Low</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="task-due">Due Date (optional)</label>
                    <input type="date" id="task-due">
                </div>
                
                <div class="form-group">
                    <label for="task-notes">Notes (optional)</label>
                    <textarea id="task-notes" placeholder="Add any additional details..."></textarea>
                </div>
                
                <div class="form-actions">
                    <button type="button" class="btn btn-outline" onclick="closeAddTaskModal()">Cancel</button>
                    <button type="submit" class="btn btn-primary">Add Task</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    // Focus on title input
    setTimeout(() => document.getElementById('task-title').focus(), 100);

    // Handle form submit
    document.getElementById('add-task-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('task-title').value.trim();
        const cat = document.getElementById('task-category').value;
        const priority = document.getElementById('task-priority').value;
        const dueDate = document.getElementById('task-due').value || null;
        const notes = document.getElementById('task-notes').value.trim();

        if (title) {
            addTask(title, cat, priority, notes, dueDate);
            closeAddTaskModal();
        }
    });

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeAddTaskModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeAddTaskModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

function closeAddTaskModal() {
    const modal = document.getElementById('add-task-modal');
    if (modal) modal.remove();
}

/**
 * Reset tasks to defaults (for testing)
 */
function resetTasks() {
    localStorage.removeItem('precogs_tasks');
    location.reload();
}

/**
 * Code block copy functionality
 */
function initCodeCopy() {
    const copyBtns = document.querySelectorAll('.copy-btn');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const codeBlock = btn.closest('.code-block');
            const code = codeBlock.querySelector('code').textContent;

            navigator.clipboard.writeText(code).then(() => {
                const originalText = btn.textContent;
                btn.textContent = 'Copied!';
                btn.style.color = 'var(--success)';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.color = '';
                }, 2000);
            });
        });
    });
}

// Make functions globally available
window.showAddTaskModal = showAddTaskModal;
window.closeAddTaskModal = closeAddTaskModal;
window.deleteTask = deleteTask;
window.resetTasks = resetTasks;

/**
 * Social Media Strategy Sub-Tabs
 */
function switchSubTab(event, tabId) {
    // 1. Remove active class from all buttons
    const buttons = document.querySelectorAll('.sub-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 2. Add active class to clicked button
    event.currentTarget.classList.add('active');

    // 3. Hide all tab content
    const contents = document.querySelectorAll('.sub-tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // 4. Show target tab content
    const target = document.getElementById(tabId);
    if (target) {
        target.classList.add('active');
    }
}

// Ensure function is global
window.switchSubTab = switchSubTab;
