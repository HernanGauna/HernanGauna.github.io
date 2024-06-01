


const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#formulario');
const errorEmail = document.querySelector('.error-email');

const errorPassword = document.querySelector('.error-password');
const error = document.querySelector('.error-global');

const usuario  = {
    email : 'cocina_juan@gmail.com',
    pass : '123456789H'
}
console.log(usuario)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(email.value.length)
    if( email.value.length == 0 || password.value.length == 0) {
       error.classList.remove('hidden');

        setTimeout(()=>{
            error.classList.add('hidden');
        },2000)

        return;
    }
     if( email.value != usuario.email ){
       errorEmail.classList.remove('hidden');
       setTimeout(()=>{
        errorEmail.classList.add('hidden');
    },1000)
    return;
    }
    if( password.value != usuario.pass ){
        errorPassword.classList.remove('hidden');
        setTimeout(()=>{
            errorPassword.classList.add('hidden');
        },1000)

        return;
    }
    
    window.location.href ='/index.html'
})



function login() {

}