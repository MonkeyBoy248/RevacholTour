const cards_container = document.querySelector('.cards');
const cards = [...cards_container.children];
const card = document.querySelector('.card');

const next_card = document.querySelector('.btn-next-card');
const prev_card = document.querySelector('.btn-prev-card');

const card_size = card.clientWidth;
let count = 0;

function MoveToNextCard() {
    count++;
    cards_container.style.transition = '0.5s ease-in-out';
    cards_container.style.transform = 'translateX(' + ((-card_size - 40) * count) + 'px)';
}

function MoveToPrevCard() {
    count--;
    cards_container.style.transition = '0.5s ease-in-out';
    cards_container.style.transform = 'translateX(' + ((-card_size - 40) * count) + 'px)';
}
function CheckCardBorders(target_card, cards) {
    if(cards_container.clientWidth <= 600){
        if(target_card == cards[cards.length - 1]){
            next_card.classList.add('hide');
            prev_card.classList.remove('hide');
        }else if(target_card == cards[0]){
            prev_card.classList.add('hide');
            next_card.classList.remove('hide');
        }else{
            next_card.classList.remove('hide');
            prev_card.classList.remove('hide');
        }
    }else{
        if(target_card == cards[cards.length - 3]){
            next_card.classList.add('hide');
            prev_card.classList.remove('hide');
        }else if(target_card == cards[0]){
            prev_card.classList.add('hide');
            next_card.classList.remove('hide');
        }else{
            next_card.classList.remove('hide');
            prev_card.classList.remove('hide');
        }
    }
}

next_card.addEventListener('click',  () => {
    let current_card = cards_container.querySelector('.active');
    let next_card = cards[getIndex(current_card, cards) + 1];
    MoveToNextCard();
    ToggleActive(current_card, next_card);
    CheckCardBorders(next_card, cards);
    
})

prev_card.addEventListener('click', () => {
    let current_card = cards_container.querySelector('.active');
    let prev_card = cards[getIndex(current_card, cards) - 1];
    MoveToPrevCard();
    ToggleActive(current_card, prev_card);
    CheckCardBorders(prev_card, cards);
})




