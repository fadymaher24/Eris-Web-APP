function checkdata(){
   
    var phone_number = document.getElementById("phone").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    
    if (phone_number!="" && isNaN(phone_number)){
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