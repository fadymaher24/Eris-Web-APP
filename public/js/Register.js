function checkdata(){
    let usersDictionary = {
    
        "john123@gmail.com": { Password: "dfsf123434" },
        "peeta454@gmail.com": { Password: "34534fsd534" },
        "enola_holmes@gmail.com": { Password: "84850kfdh" },
        "katniss_everdeen@gmail.com": { Password: "primrose4535" }
    };
    var username = document.getElementById("username").value;
    var email_address = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone_number = document.getElementById("phone").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var conditions = document.getElementById("terms");
    if(username==""){
        alert("Please enter a username");
    }
    else if(email_address==""){
        alert("Please enter your email");
    }
    else if(email_address in usersDictionary){
        alert("This email already exists! If you want to sign in, click on the Log in button below");
    }
    
    else if(password==""){
        alert("Please enter a password");
    }else if (phone_number!="" && isNaN(phone_number)){
        alert("Invalid input! Please enter a phone number");
        return false;
    }
    else if(male.checked== false && female.checked==false){
        alert("Please choose a gender");
        return false;
    }
    else if(conditions.checked==false){
        alert("You have to agree to our terms & conditions first. Please check the box below");
    }
    
    return true;
}

