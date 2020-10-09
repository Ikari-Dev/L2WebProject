document.querySelector("form.formlogin").addEventListener("submit", e => {

    var req = new XMLHttpRequest()
    req.open('POST','../htbin/login.py')
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded")

    var messagecomp = "Le nom d'utilisateur et le mot de pass sont invalides."

    var username = document.getElementById('username')
    var userpwd = document.getElementById('userpwd')

    req.addEventListener("readystatechange", function(){

        if(req.readyState == 4){

            if(req.status == 200 || req.status == 0){

                
                if(req.responseText.length == 56){
                
                    document.getElementById('content').style.color = '#f00'

                }

                document.getElementById('content').innerHTML = req.responseText

            } else {

                e.preventDefault()

            }
        }
    })

    req.send('username=' + username.value + '&userpwd=' + userpwd.value)
    e.preventDefault()
    
})