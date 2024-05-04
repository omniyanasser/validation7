function valid (){
    var name= document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var password= document.getElementById('pass').value;
    var confirm= document.getElementById('confirm').value;

    var demo = document.getElementById('error');

    if (name=="" && email=="" && password=="" && confirm==""){
        demo.innerHTML="Please Enter data";
        demo.setAttribute("class", "message");
        return false;
    }

    else if (name.length<5 || name.length>15 ){
        demo.innerHTML="Please Enter 5-15 characters for Username";
        demo.setAttribute("class", "message");
        return false;
    }

    else if (email.indexOf("@",3)==-1 || email.indexOf(".")==-1){
        demo.innerHTML = "Please enter a valid email address";
        demo.setAttribute("class", "message");
        return false;
    }

    else if (password.length < 8){
        demo.innerHTML = "please enter atleast 8characters for Password";
        demo.setAttribute("class", "message");
        return false;
    }

    else if (password != confirm){
        demo.innerHTML = "please match password";
        demo.setAttribute("class", "message");
        return false;
    }

else{
    return true;
}

}

function watch1(){
    var passInput = document.getElementById('pass');
    if (passInput.type === 'password'){
        passInput.type = 'text';
    }
    else {
        passInput.type = 'password';
    }
}

function watch2(){
    var confirmInput = document.getElementById('confirm');
    if (confirmInput.type === 'password'){
        confirmInput.type = 'text';
    }
    else {
        confirmInput.type = 'password';
    }
}