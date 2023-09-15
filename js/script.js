const input = document.getElementById('mySearch');
const error = document.getElementById('error');

input.addEventListener('input', function() {
    const value = this.value;
    const forbiddenCharacters = /[!@#$%^&*()]/;

    if (forbiddenCharacters.test(value)) {
        error.textContent = 'Special characters are not allowed: ! @ # $ % ^ & * ()';
        this.value = value.replace(forbiddenCharacters, '');          
    } else {
        error.textContent = '';
    }
});

let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger__menu');

burger.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('burger__menu_active');
})