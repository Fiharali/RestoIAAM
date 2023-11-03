const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



var nameLogin = document.getElementsByClassName('name-erreur');
var passwordLogin = document.getElementsByClassName('password-erreur');

function ValidateUsername(){
  var user = document.getElementById('contact-username').value;
  if(!user.match('admin')){
    nameLogin.innerHTML = 'enter Valid Username';
     return false;
  }
  nameLogin.innerHTML = '<i class="bx bxs-check-circle"></i>' ;
  return true;
}

function ValidatePass(){
  var user = document.getElementById('contact-username').value;
  if(!user.match('123')){
    nameLogin.innerHTML = 'enter Valid Password';
     return false;
  }
  nameLogin.innerHTML = '<i class="bx bxs-check-circle"></i>' ;
  return true;
}


var userSign = document.getElementsByClassName('user-erreur');
var emailSign = document.getElementsByClassName('email-erreur');
var passwordSign = document.getElementsByClassName('passWord-erreur');


function ValidateName(){
  var name = document.getElementById('contact-name');

  if(name.value.length == 0){
    userSign.innerHTML = 'Name is required';
     return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    userSign.innerHTML = 'write full name';
    return false;
  }
  userSign.innerHTML = '<i class="bx bxs-check-circle"></i>' ;
  return true;
}


function ValidateEmail(){
  var email = document.getElementById('contact-email').value;
  if(email.length == 0){
    emailSign.innerHTML = 'Email is required';
    return false;
  }
  
  // if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailSign.innerHTML = 'Invalid Email';
    return false;
  }
  emailSign.innerHTML ='<i class="bx bxs-check-circle"></i>';
  return true;
}

function ValidatePassword(){
  var pass = document.getElementById('contact-password').value;


      if (!pass.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        passwordSign.innerHTML ='<i class="bx bxs-check-circle"></i>';; // Password is valid
        return false;
      } else {
        passwordSign.innerHTML ='Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.';
        return true;
      }
}