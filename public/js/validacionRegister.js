//los inputs del formulario
let nameUser = document.querySelector('#nombre')
let lastname = document.querySelector('#apellido')
let telephone = document.querySelector('#telefono')
let email = document.querySelector('#email')
let password = document.querySelector('#contrasenia')
let passwordConfirmed = document.querySelector('#contrasenia2')
let formRegister = document.querySelector('.continuar')

//los div de los errores
let nameError = document.querySelector('#nameError')
let lastNameError  = document.querySelector('#lastnameError')
let telephoneError  = document.querySelector('#telError')
let emailError  = document.querySelector('#emailError')
let passwordError  = document.querySelector('#contraseniaError')
let passwordConfirmedError  = document.querySelector('#contraseniaConfirmedError')
let errorsRegister = document.querySelector('#formError')

//Objeto literal contenedor de errores
let errors = {}

//Estilo de errores por defecto 😀
let bordeColor = '-4px 4px 2px #ed9d9d'
let transicion = "0.5s ease all"
let colorLetraError = "black"

//Asignando oyentes a los elementos 😘
nameUser.addEventListener("blur", nombreValidator)
lastname.addEventListener("blur", apellidoValidator)
telephone.addEventListener("blur", telefonoValidator)
email.addEventListener("blur", emailValidator)
password.addEventListener("blur", passwordValidator)
passwordConfirmed.addEventListener("blur", passwordConfirmedValidator)

//Asignando oyente al formulario general
formularioLogin.addEventListener("submit", function(event)
{
    let listaErrores = document.querySelector('#erroresListaGeneral')
    if(Object.keys(errors).length >=1)
    {
        event.preventDefault()
        formularioError.innerHTML = "Fijate los errores de los campos"
            formularioError.classList.add('cambiando');
    }
    else{
        if(email.value.length==0 || pass.value.length==0)
        {
            event.preventDefault()
            console.log("Ade")
            formularioError.innerHTML = "Ningún campo debe quedar vacio"
            formularioError.classList.add('cambiando');
        }
        else{
            if(pass.value.length == 0)
            {
                event.preventDefault()
                formularioError.innerHTML = "Ingrese la contraseña"
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

function nombreValidator()
{
    if(nameUser.value.length == 0)
    {
        let error = "El nombre no puede quedar vacio"
        errors.name = error
        nameError.innerHTML = error
        validatorGeneric(nameUser, nameError)
    }
    else
    {
        if(nameUser.value.length < 3)
        {
            let error = "El nombre debe ser mayor a 3 caracteres"
            errors.name = error
            nameError.innerHTML = error
            validatorGeneric(nameUser, nameError)
        }
        else
        {
            delete errors.name;
            removiendoCambiosGeneric(nameUser, nameError)
        }
    }
}

function apellidoValidator()
{
    if(lastname.value.length == 0)
    {
        let error = "El apellido no puede quedar vacio"
        errors.lastname = error
        lastNameError.innerHTML = error
        validatorGeneric(lastname, lastNameError)
    }
    else
    {
        if(lastname.value.length < 3)
        {
            let error = "El apellido debe ser mayor a 3 caracteres"
            errors.lastname = error
            lastNameError.innerHTML = error
            validatorGeneric(lastname, lastNameError)
        }
        else
        {
            delete errors.lastname;
            removiendoCambiosGeneric(lastname, lastNameError)
        }
    }
}

function telefonoValidator()
{
    if(telephone.value.length == 0)
    {
        let error = "El telefono no puede quedar vacio"
        errors.tel = error
        telephoneError.innerHTML = error
        validatorGeneric(telephone, telephoneError)
    }
    else
    {
        if(telephone.value.length != 10)
        {
            let error = "Ingrese un telefono valido"
            errors.tel = error
            telephoneError.innerHTML = error
            validatorGeneric(telephone, telephoneError)
        }
        else
        {
            delete errors.tel;
            removiendoCambiosGeneric(telephone, telephoneError)
        }
    }
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
            let error = "El e-mail ingresado esta mal,corregilo por favor."
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

function passwordValidator()
{
    if(password.value.length == 0)
    {
        let error = "La contraseña no puede quedar vacia"
        errors.pass = error
        passwordError.innerHTML = error
        validatorGeneric(password, passwordError)
    }
    else
    {
        if(password.value.length <6 )
        {
            let error = "La contraseña no puede tener menos de 8 caracteres"
            errors.pass = error
            passwordError.innerHTML = error
            validatorGeneric(password, passwordError)
        }
        else
        {
            delete errors.pass;
            removiendoCambiosGeneric(password, passwordError)
        }
    }
}

function passwordConfirmedValidator()
{
    if(password.value != passwordConfirmed.value)
    {
        let error = "La contraseñas no coinciden"
        errors.passConfirmed = error
        passwordConfirmedError.innerHTML = error
        validatorGeneric(password, passwordError)
        validatorGeneric(passwordConfirmed, passwordConfirmedError)
    }
    else
    {
        delete errors.passConfirmed;
        removiendoCambiosGeneric(password, passwordError)
        removiendoCambiosGeneric(passwordConfirmed, passwordConfirmedError)
    }
}