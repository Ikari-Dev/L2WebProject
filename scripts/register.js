document.querySelector("form.formregister").addEventListener("submit", e => {


    const result = document.getElementById('result')
    result.style.color = "#f00"
    const birthdate = document.getElementById('birthdate')
    const username = document.getElementById('username')
    const userpwd = document.getElementById('userpwd')
    const useremail = document.getElementById('useremail')

    const pwdRGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/
    const emailRGEX = /([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/

    

    if(username.value.length < 6){      
        result.innerHTML = "Nom d'utilisateur trop court"

        e.preventDefault()
    }
    if(pwdRGEX.test(userpwd.value) == false){
        result.innerHTML = "Le mot de passe doit contenir au moins un chiffre, une majuscule, une minuscule et au moins 8 caractères"

        e.preventDefault()
    }
    if(emailRGEX.test(useremail.value) == false){
        result.innerHTML ="Cette email est invalide"

        e.preventDefault()
    }
    /*if(birthdate.value){

        e.preventDefault()
    }*/

})