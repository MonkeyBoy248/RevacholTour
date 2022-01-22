const header = document.querySelector('.header'),
        nav_items_container = document.querySelector('.navigation-items'),
        nav_item_hide = document.querySelector('.nav-item_main'),
        intro = document.querySelector('.intro'),
        logo = document.querySelector('.header__logo'),
        mobile_header = document.querySelector('.mobile-header'),
        close_button = document.querySelector('.mobile-header__close'),
        burger = document.querySelector('.burger-button');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > intro.clientHeight){
        nav_item_hide.classList.toggle('hide');
    }
    if(window.pageYOffset > header.clientHeight){
        header.style.position = 'fixed';
        header.classList.add('fixed');
        for(let i of nav_items_container.children){
            i.style.color = '#000';
            burger.style.setProperty('--span-color', '#000');
            logo.style.border = 'none';
        }
        nav_items_container.style.setProperty('--animation-color', '#000');

    }else if(window.pageYOffset == 0){
        header.classList.remove('fixed');
        for(let i of nav_items_container.children){
            i.style.color = '#ffff';   
            burger.style.setProperty('--span-color', '#ffff');
            logo.style.border = "2px #ffff solid"
        }
        nav_items_container.style.setProperty('--animation-color', '#fff')
    }
});

burger.addEventListener('click', () =>{
    mobile_header.style.display = 'flex';
    header.style.display = 'none';
})
close_button.addEventListener('click', () =>{
    mobile_header.style.display = 'none';
    header.style.display = 'flex';
})
