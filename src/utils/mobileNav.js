const mobileNav = () => {
    const open = document.querySelector('#bars-button');
    const nav = document.querySelector("#mobile-nav");
    const close = document.querySelector("#close-button");

    const handleOpenBtn = () => {
        nav.style.display = 'flex';
        nav.style.opacity = '1';
    }
    const handleCloseBtn = () => {
        nav.style.display = 'none';
        nav.style.opacity = '0';
    }

    open.addEventListener('click', handleOpenBtn);
    close.addEventListener('click', handleCloseBtn);  
}

export default mobileNav;