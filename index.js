// login with google-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
var flag = 1

function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}

function onFailure(error) {
    console.log(error);
}

function renderButton() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}

// -------------------------------------------------------------------------------------------------

// show and hide password and confirm password


var password = document.getElementById('password')
var confpass = document.getElementById('conf-password')

function showpassword() {
    if (password.type == "text" || confpass.type == 'text') {
        password.type = "password"
        confpass.type = "password"

    } else {
        password.type = 'text'
        confpass.type = "text"

    }
}

//---------------------------------------------------------------------------------------------------

//capslock event

window.addEventListener("keyup", event => {
    var x = event.getModifierState('CapsLock')
    if (x == true) {
        document.getElementById("capslock").innerHTML = "Capslock is on"
    } else {
        document.getElementById("capslock").innerHTML = ""

    }

})


//-----------------------------------------------------------------------------------------------------

// confirm password verification
var password = document.getElementById('password')



function valid(elem) {


    if (elem.length > 0) {
        if (elem != password.value) {
            document.getElementsByClassName("valid")[0].innerHTML = "Please enter valid password"
            flag = 0

        } else {
            document.getElementsByClassName("valid")[0].innerHTML = ""
            flag = 1

        }

    } else {
        document.getElementsByClassName("valid")[0].innerHTML = "Please enter confirm password"
        flag = 0


    }


}

//-----------------------------------------------------------------------------------------------------

// white and black space
// for email
var patten = /\s/g;

function mail(value) {
    var x = patten.test(value)
    if (x == true) {
        document.getElementsByClassName('whitespace')[0].innerHTML = "Space is not allowed"
        flag = 0

    } else {
        document.getElementsByClassName('whitespace')[0].innerHTML = ""
        flag = 1


    }

}

// for password

// function password(data) {
//     var y = patten.test(data)
//     if (y == true) {
//         document.getElementsByClassName("whitespace")[1].innerHTML = "Space is not allowed"

//     } else {
//         document.getElementsByClassName("whitespace")[1].innerHTML = ""

//     }
// }

//---------------------------------------------------------------------------------------------------

// password validation


function validpass(elem) {
    var patten = /\s/g;
    var passcheck = document.getElementsByClassName('password_check')
    var c = document.getElementById('strength')
    var y = patten.test(elem)
    var z = document.getElementById('conf-password')
    const uppercase = new RegExp('(?=.*[A-Z])')
    const lowercase = new RegExp('(?=.*[a-z])')
    const numerical = new RegExp('(?=.*[0-9])')
    const specialchar = new RegExp('(?=.*[!@#\$%\^&\*])')
    const eightchar = new RegExp('(?=.{8,})')



    if (eightchar.test(elem)) {
        passcheck[0].style.color = "red"
        flag = 1

    } else {
        passcheck[0].style.color = "grey"
        flag = 0


    }
    if (lowercase.test(elem)) {
        passcheck[1].style.color = "red"
        flag = 1

    } else {
        passcheck[1].style.color = "grey"
        flag = 0


    }
    if (uppercase.test(elem)) {
        passcheck[2].style.color = "red"
        flag = 1

    } else {
        passcheck[2].style.color = "grey"
        flag = 0

    }
    if (numerical.test(elem)) {
        passcheck[3].style.color = "red"
        flag = 1

    } else {
        passcheck[3].style.color = "grey"
        flag = 0


    }
    if (specialchar.test(elem)) {
        passcheck[4].style.color = "red"
        flag = 1

    } else {
        passcheck[4].style.color = "grey"
        flag = 0


    }

    if (y == true) {
        document.getElementsByClassName("whitespace")[1].innerHTML = "Space is not allowed"
        flag = 0

    } else {
        document.getElementsByClassName("whitespace")[1].innerHTML = ""
        flag = 1


    }

    if (c.style.display = 'none' ||
        z.style.display == 'none') {
        c.style.display = 'block'
        z.style.display = 'block'
    } else {
        c.style.display = 'none'
        z.style.display = 'none'
    }



}


//------------------------------------------------------------------------------------------------

// valid form submit

function validation() {
    if (flag == true) {

        return true
    } else {
        return false
    }
}