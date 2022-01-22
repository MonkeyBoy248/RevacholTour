const slides_container = document.querySelector('.pict-container');
const slides = [...slides_container.children];
const dots_container = document.querySelector('.dots');
const dots = [...dots_container.children];
const text_container = document.querySelector('.text-container');
const descriptions = [...document.querySelectorAll('.text')];

const next_btn = document.querySelector('.btn-next');
const prev_btn = document.querySelector('.btn-prev');

const size = slides_container.clientWidth;
const description_size = text_container.clientWidth;
let counter = 0;

function MoveToNext() {
    slides_container.style.transition = '0.5s ease-in-out';
    counter++;
    slides_container.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function MoveToPrev() {
    slides_container.style.transition = '0.5s ease-in-out';
    counter--;
    slides_container.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function CheckBorders(target_slide, slides ) {
    if(target_slide == slides[slides.length - 1]){
        next_btn.classList.add('hide');
        prev_btn.classList.remove('hide');
    }else if(target_slide == slides[0]){
        prev_btn.classList.add('hide');
        next_btn.classList.remove('hide');
    }else{
        next_btn.classList.remove('hide');
        prev_btn.classList.remove('hide');
    }
}

function ToggleActive(current, target) {
    current.classList.remove('active');
    target.classList.add('active');
}

function SwapText(current, target){
    target = current.nextElementSibling;
    text_container.style.transition = '0.5s ease-in-out';
    text_container.style.transform = 'translateX(' + (-description_size * counter) + 'px)';
};

next_btn.addEventListener('click',  () => {
    let current_slide = document.querySelector('.active');
    console.log(slides_container);
    let current_text = text_container.querySelector('.active');
    let next_text = current_text.nextElementSibling;
    let next_slide = current_slide.nextElementSibling;
    MoveToNext();
    ToggleActive(current_slide, next_slide);
    Move_to_dot(current_slide, next_slide);
    SwapText(current_text, next_text);
    CheckBorders(next_slide, slides);
    
})

function Move_to_dot(current, target) {
    current = dots_container.querySelector('.active');
    target_slide = getIndex(target, slides);
    let target_dot = dots[target_slide];
    ToggleActive(current, target_dot);
    
}
prev_btn.addEventListener('click', () => {
    let current_slide = document.querySelector('.active');
    let prev_slide = current_slide.previousElementSibling;
    let current_text = text_container.querySelector('.active');
    let prev_text = current_text.previousElementSibling;
    MoveToPrev();
    ToggleActive(current_slide, prev_slide);
    Move_to_dot(current_slide, prev_slide);
    SwapText(current_text, prev_text)
    CheckBorders(prev_slide, slides);
})

function getIndex(item, items) {
    for(let i = 0; i < items.length; i++){
        if(item == items[i]) return i;
    }
}

dots_container.addEventListener('click', (e) =>{
    if(e.target.className == 'dot'){
        let current_slide = document.querySelector('.active');
        let current_dot = dots_container.querySelector('.active');
        let target_dot = e.target;
        let dot_index = getIndex(target_dot, dots);
        let target_slide = slides[dot_index];
        slides_container.style.transition = '0.5s ease-in-out';
        counter = dot_index;
        slides_container.style.transform = 'translateX(' + (-size * counter) + 'px)';
        text_container.style.transition = '0.5s ease-in-out';
        text_container.style.transform = 'translateX(' + (-description_size * counter) + 'px)';
        ToggleActive(current_slide, target_slide);
        ToggleActive(current_dot, target_dot);
        CheckBorders(target_slide, slides);
    }

})

document.addEventListener('keydown', (event) =>{
    
    if(event.key == 'ArrowRight'){
        let current_slide = document.querySelector('.active');
        let next_slide = current_slide.nextElementSibling;
       
        if(counter < slides.length-1){
        MoveToNext();
        ToggleActive(current_slide, next_slide);
        Move_to_dot(current_slide, next_slide);
        CheckBorders(next_slide, slides);
        }
    }else if(event.key == 'ArrowLeft'){
        let current_slide = document.querySelector('.active');
        let prev_slide = current_slide.previousElementSibling;
        if(counter != 0){
        MoveToPrev();
        ToggleActive(current_slide, prev_slide);
        Move_to_dot(current_slide, prev_slide);
        CheckBorders(prev_slide, slides);
        }

}
});



