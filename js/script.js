function openMobileMenu(menu) {
    menu.classList.toggle('open');
}

function validateLoginForm() {
    let email = document.forms["loginForm"]["email"].value;
    let emailRGEX = /^\S+@\S+\.\S+$/;
    let emailAndRGEX = emailRGEX.test(email);
    
    if(email == '')
    {
      document.getElementById('emailError').innerHTML = 'Sheno email!'
      return false;
    }

    if(emailAndRGEX == false)
    {
      document.getElementById('emailError').innerHTML = 'Sheno email ne menyr te duhur!'
      return false;
    }
  }

  function validateRegisterForm() {
    let email = document.forms["registerForm"]["email"].value;
    let emailConfirm = document.forms["registerForm"]["confirmEmail"].value;
    let password = document.forms["registerForm"]["psw"].value;
    let passwordConfirm = document.forms["registerForm"]["confirmPsw"].value;
    let emailRGEX = /^\S+@\S+\.\S+$/;
    let emailAndRGEX = emailRGEX.test(email);
    let passwordRGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;
    let passwordAndRGEX = passwordRGEX.test(password);

    if(email == '')
    {
      document.getElementById('emailError').innerHTML = 'Sheno email!'
      return false;
    }

    if(emailAndRGEX == false)
    {
      document.getElementById('emailError').innerHTML = 'Sheno email ne menyr te duhur!'
      return false;
    }

    if(email != emailConfirm)
    {
      document.getElementById('emailConfirmError').innerHTML = 'Email nuk perputhet!'
      return false;
    }

    if(passwordAndRGEX == false)
    {
      document.getElementById('pswError').innerHTML = 'Passwordi duhet te kete nje shkronje te madhe dhe me nje karaker special!'
      return false;
    }

    if(password != passwordConfirm)
    {
      document.getElementById('pswConfirmError').innerHTML = 'Passwordi nuk perputhet!'
      return false;
    }
  }

  