function toggleUserMenu() {
    const menu = document.getElementById('userMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function toggleCategoryMenu() {
    const menu = document.getElementById('categoryMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    const userMenu = document.getElementById('userMenu');
    const categoryMenu = document.getElementById('categoryMenu');
    if (!event.target.closest('.toggle-btn')) {
        userMenu.style.display = 'none';
    }
    if (!event.target.closest('.Category_dropdown')) {
        categoryMenu.style.display = 'none';
    }
});
