const openButton = document.getElementById('open-sidebar-button');
const navbar = document.getElementById('navbar');
const media = window.matchMedia("(max-width: 700px)");

media.addEventListener('change', updateNavbar);

function updateNavbar(e) {
    const isMobile = e.matches;
    console.log("Mobile View:", isMobile);
    if (isMobile) {
        navbar.setAttribute('inert', '');
    } else {
        navbar.removeAttribute('inert');
    }
}

// Toggle Sidebar Function
function toggleSidebar() {
    const isOpen = navbar.classList.contains('show');
    if (isOpen) {
        navbar.classList.remove('show');
        openButton.setAttribute('aria-expanded', 'false');
        navbar.setAttribute('inert', '');
    } else {
        navbar.classList.add('show');
        openButton.setAttribute('aria-expanded', 'true');
        navbar.removeAttribute('inert');
    }
}

// Attach the function to the button
openButton.addEventListener('click', toggleSidebar);

// Initialize the navbar state
updateNavbar(media);
