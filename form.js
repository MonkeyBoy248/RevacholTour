const send_button = document.getElementById('send');
const form = document.querySelector('.tickets__request');
const form_container = document.querySelector('.form__container');
const pop_up = document.querySelector('.pop-up-window');
const close_btn = document.querySelector('.close-btn');
const title = document.querySelector('.tickets__title');
const submit = document.getElementById('send');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(NameCheck() && SurnameCheck() && EmailCheck()){
        InsertFieldValue();
        pop_up.style.transform = `translateY(0)`;
        pop_up.style.display = 'flex';
        form_container.style.opacity = '0';
        title.style.opacity = '0';
        let name_field = document.getElementById('name');
        let surname_field = document.getElementById('surname');
        let email_field = document.getElementById('email');
        name_field.value = '';
        surname_field.value = '';
        email_field.value = '';
    }
})
close_btn.addEventListener('click', () =>{
    pop_up.style.transform = `translateY(${-1100}px)`;
    pop_up.style.transition = '0.5s';
    pop_up.style.transitionDelay = '0.2s';
    setTimeout(() =>{
        pop_up.style.display = 'none';
        form_container.style.opacity = '1';
        title.style.opacity = '1';
    }, 700);
})

function NameCheck(){
    let name_field = document.getElementById('name');
        if(((/[0-9]+/).test(name_field.value)) || (name_field.value == "")){
            name_field.setCustomValidity("Неверный формат имени.");
            return false;
        }
        name_field.setCustomValidity("");
        return true;
};

function SurnameCheck(){
    let surname_field = document.getElementById('surname');
        if(((/[0-9]+/).test(surname_field.value)) || (surname_field.value == "")){
            surname_field.setCustomValidity("Неверный формат фамилии.");
            return false;
        }
        surname_field.setCustomValidity('');
        return true;        
};

function EmailCheck(){
    let email_field = document.getElementById('email');
    if((!(/[\wA-Z-\s]+@[a-zA-Z]+\.[a-zA-Z]/).test(email_field.value)) || (email_field.value == '')){
        email_field.setCustomValidity("Следуйте правильному формату.");
        return false;
    }
    email_field.setCustomValidity('');
    return true;
};

function InsertFieldValue(){
    let target = document.querySelector('.pop-up-window h2');
    target.innerHTML += `${document.getElementById('surname').value} ${document.getElementById('name').value}!`
}
