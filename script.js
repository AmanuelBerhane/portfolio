function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }
}

function createProjectModal(title, description, technologies, imageUrl) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';

    const modalContent = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-tags">
                ${technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="modal-body">
                <img src="${imageUrl}" alt="${title}">
                <div class="modal-description">
                    <p>${description}</p>
                    <div class="modal-buttons">
                        <button class="modal-btn">See live</button>
                        <button class="modal-btn">See source</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.innerHTML = modalContent;

    // Add close functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    return modal;
}

// Mobile menu functionality
function toggleMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.mobile-close-btn');
    const nav = document.querySelector('.header-nav');
    const menuLinks = nav.querySelectorAll('a');

    function openMenu() {
        nav.classList.add('active');
        closeBtn.classList.add('active');
        menuBtn.style.display = 'none';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        nav.classList.remove('active');
        closeBtn.classList.remove('active');
        menuBtn.style.display = 'block';
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Add click event to the multi-post story button
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu
    toggleMobileMenu();

    const multiPostBtn = document.querySelector('.recent-works-featured .recent-works-btn');
    if (multiPostBtn) {
        multiPostBtn.addEventListener('click', () => {
            const modal = createProjectModal(
                'Keeping track of hundreds of components website',
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
                ['HTML', 'Bootstrap', 'Ruby on rails'],
                'assets/Img Placeholder.png'
            );
            document.body.appendChild(modal);
        });
    }
});
