const button = document.getElementById("form");
const usereName = document.getElementById("user name");
const email = document.getElementById("email"); 
const password = document.getElementById("password");   
const password2 = document.getElementById("password2"); 

button.addEventListener('click' , (e)=>{
    e.preventDefault();

    checkInpots();
});

function checkInpots(){
    const usereNameValue = usereName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usereNameValue === '') {
        setError(usereName , 'input connot be blank');
    }else{
        setSeccess(usereName)
    }

    if (emailValue === '') {
        setError(email , 'Email connot be blank');
    }else if(!isEmail(emailValue)){
        setError(email , 'Email is not valid');
    }else{
        setSeccess(email)
    }

    if (passwordValue === '') {
        setError(password , 'password connot be blank');
    }else{
        setSeccess(password)
    }
    
    if (password2Value === '') {
        setError(password2 , 'password check connot be blank');
    }else if(passwordValue !== password2Value){
        setError(password2 , 'password does not match');
    }
    else{
        setSeccess(password2)
    }
}

function setError(input,massage) {
    const formCtrl = input.parentElement;
    formCtrl.className = "form-ctrl error"
    const small = formCtrl.querySelector('small');
    small.innerText = massage
}

function setSeccess(input) {
    const formCtrl = input.parentElement;
    formCtrl.className = "form-ctrl seccess"
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}