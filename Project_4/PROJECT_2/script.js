function validateForm(){

    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var Email = document.getElementById("email");
    var Phone = document.getElementById("phone");

    var regx = /^\+([1-9]{2})-([0-9]{10})$/;
    var regx2 = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/

    
    if(firstName.value.trim() == ""){
        alert("Empty field is not allowed");
        document.getElementById("lbl1").innerHTML = "* required";
        document.getElementById("lbl1").style.visibility = "visible";
        document.getElementById("lbl1").style.color = "red";
        return false;
    }
    else if(lastName.value.trim() == ""){
        document.getElementById("lbl2").innerHTML = "* required";
        document.getElementById("lbl2").style.visibility = "visible";
        document.getElementById("lbl2").style.color = "red";
        return false; 
    }
    else if(Email.value.trim()==""){
        document.getElementById("lbl3").innerHTML = "* required";
        document.getElementById("lbl3").style.visibility = "visible";
        document.getElementById("lbl3").style.color = "red";
        return false;
    }
    else if(Phone.value.trim()==""){
        
        document.getElementById("lbl4").innerHTML = "* required";
        document.getElementById("lbl4").style.visibility = "visible";
        document.getElementById("lbl4").style.color = "red";
        return false;
    }
    else if(Email.value != ""){
        if(regx2.test(Email)){
            document.getElementById("lbl3").innerHTML = "Valid";
            document.getElementById("lbl3").style.visibility = "visible";
            document.getElementById("lbl3").style.color = "green";
        }
        else{
            document.getElementById("lbl3").innerHTML = "Invalid";
            document.getElementById("lbl3").style.visibility = "visible";
            document.getElementById("lbl3").style.color = "red";
        }
    }
   
    else if(Phone.value != ""){
        if(regx.test(Phone)){
            document.getElementById("lbl4").innerHTML = "Valid";
            document.getElementById("lbl4").style.visibility = "visible";
            document.getElementById("lbl4").style.color = "green";
    
            }
        else{
            document.getElementById("lbl4").innerHTML = "Invalid";
            document.getElementById("lbl4").style.visibility = "visible";
            document.getElementById("lbl4").style.color = "red";
        }
    }

    else{
        true;
    }
    
    
}
