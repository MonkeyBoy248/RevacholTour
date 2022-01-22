const nav_menu = document.querySelector('.navigation-items');
const footer_topics = document.querySelector('.footer__inner__topics');
const buy_btn = document.querySelector('.find-more-button');
const tickets = document.querySelector('.tickets');
const mobile_nav = document.querySelector('.navigation-items-mobile');
console.log(nav_menu);

const SmoothScroll = (target) =>{
    console.log(target.getAttribute('href'));
    document.getElementById(`${target.getAttribute('href').slice(1)}`).scrollIntoView({behavior:"smooth", block: 'start'});
};

nav_menu.addEventListener('click', (e) =>{
    let target = e.target;
    e.preventDefault();
    SmoothScroll(target);
});

footer_topics.addEventListener('click', (e) =>{
   let target = e.target;
   e.preventDefault();
   SmoothScroll(target);
});

buy_btn.addEventListener('click', () =>{
    tickets.scrollIntoView({behavior:"smooth", block: "start"});
})
mobile_nav.addEventListener('click', (e) =>{
    let target = e.target;
    e.preventDefault();
    SmoothScroll(target);
})
