//Capturando elementos 🤣
let email = document.querySelector('#email')
let pass = document.querySelector('#contrasenia')
let repass = document.querySelector('#contrasenia2')
let formularioEdit = document.querySelector('#formularioEdit')
let erroresGeneralFormulario = document.querySelector('#erroresGeneral')
let listaErrores = document.querySelector('#erroresListaGeneral')

//Capturando elementos ERRORES 😜
let emailError = document.querySelector('#emailError')
let passError = document.querySelector('#passError')
let repassError = document.querySelector('#repassError')
let formularioError = document.querySelector("#formError")

//Objeto literal contenedor de errores
let errors = {}

//Estilo de errores por defecto 😀
let bordeColor = '-4px 4px 2px #ed9d9d'
let transicion = "0.5s ease all"
let colorLetraError = "black"

//Asignando oyentes a los elementos 😘
email.addEventListener("blur", emailValidator)
pass.addEventListener("blur", passwordGlobalValidator)
repass.addEventListener("blur", repasswordGlobalValidator)

//Asignando oyente al formulario general
formularioEdit.addEventListener("submit", function(event)
{
    let listaErrores = document.querySelector('#erroresListaGeneral')
    if(Object.keys(errors).length >=1)
    {
        event.preventDefault()
        //erroresGeneralFormulario.classList.add("errores-general")
        //Ahora empieza la magia
        //listaErrores.innerHTML = ""
        //listaErrores.innerHTML += (errors.email) ? "<li>" + errors.email + "</li>" : ""
        //listaErrores.innerHTML += (errors.pass) ? "<li>" + errors.pass + "</li>" : ""
        formularioError.innerHTML = "Fijate los errores de los campos"
            formularioError.classList.add('cambiando');
    }
    else{
        if(email.value.length==0 || pass.value.length==0 || repass.value.length==0)
        {
            event.preventDefault()
            console.log("Ade")
            formularioError.innerHTML = "Ningún campo debe quedar vacio"
            formularioError.classList.add('cambiando');
        }
        else{
            if(pass.value != repass.value)
            {
                event.preventDefault()
                formularioError.innerHTML = "Las contraseñas deben ser las mismas"
                formularioError.classList.add('cambiando')
            }
            else{
                formularioError.innerHTML = ""
                formularioError.classList.remove('cambiando');
                formulario.submit()
            }
        }
    }
})

//Para quitar el error general
let body = document.querySelector("body")
body.addEventListener("click", function()
{
    erroresGeneralFormulario.classList.remove("errores-general")
    erroresGeneralFormulario.classList.add("errores-general-off")
})

//Funciones de validacion papaaa 🐔

function validatorGeneric(input, divError)
{
        input.style.boxShadow = bordeColor
        input.style.transition += transicion
        input.style.color += colorLetraError
        divError.classList.add('cambiando');
}

function removiendoCambiosGeneric(input, divError)
{
    divError.innerHTML = ""
    input.style.boxShadow = ""
    input.style.transition = ""
    input.style.color = ""
    divError.classList.remove('cambiando');
}

function emailValidator() {
    if(email.value.length == 0)
    {
        let error = "El e-mail no puede quedar vacio"
        errors.email = error
        emailError.innerHTML = error
        validatorGeneric(email, emailError)
    }
    else
    {
        if(!validator.isEmail(email.value))
        {
            let error = "El e-mail ingresado esta mal papu"
            errors.email = error
            emailError.innerHTML = error
            validatorGeneric(email, emailError)
        }
        else{
            delete errors.email;
            removiendoCambiosGeneric(email, emailError)
        }
    }
}

function passwordGlobalValidator()
{
    passwordValidator(pass, passError)
}

function repasswordGlobalValidator()
{
    passwordValidator(repass, repassError)
}

function passwordValidator(passGeneric, divError)
{
    if(passGeneric.value.length == 0)
    {
        let error = "La contraseña no puede quedar vacia"
        errors.pass = error
        divError.innerHTML = error
        validatorGeneric(passGeneric, divError)
    }
    else
    {
        if(passGeneric.value.length < 6)
        {
            let error = "La contraseña no puede tener menos de 6 caracteres"
            errors.pass = error
            divError.innerHTML = error
            validatorGeneric(passGeneric, divError)
        }
        else
        {
            delete errors.pass;
            removiendoCambiosGeneric(passGeneric, divError)
        }
    }
}