function check_user(){
    let usersDictionary = {
    
        "john123@gmail.com": { Password: "dfsf123434" },
        "peeta454@gmail.com": { Password: "34534fsd534" },
        "enola_holmes@gmail.com": { Password: "84850kfdh" },
        "katniss_everdeen@gmail.com": { Password: "primrose4535" }
    };
    var email_address = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email_address!=""){
        
        if (email_address in usersDictionary){
            if(password!=""){
                
                if(usersDictionary[email_address].Password==password){
                    window.location.replace("../home/Home_logged.html");
                } else{
                    alert("Wrong password!");
                }
            }
            else{
                    alert("Please enter your password");
            }
        }else{
            alert("Wrong email! If you don't have an account, click on Register below to create one");
            }
    }else{
        alert("Please enter your email");
        }

}