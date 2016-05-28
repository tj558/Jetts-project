$(document).ready(function(){


    $('#registerButtonModal').on('submit', function(e){
        e.preventDefault();
        
        var f=document.getElementById('idf');
        var l=document.getElementById('idl');
        var u=document.getElementById('idu');
        var e=document.getElementById('ide');
        var p1=document.getElementById('idp1');
        var p2=document.getElementById('idp2');

        var errorBorder=document.getElementById('errorBorder');
        var errorBox=document.getElementById('errorBox');
        
        
function validateText(last){
    var re = /^[a-zA-Z ]{3,20}$/;
    return re.test(last);
}

function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function alphanumeric(pass){
    //var re = /^[a-zA-Z ]{3,20}$/;//make alphanumeric   var re = /^\w+$/
    var re = /^\w+$/
    return re.test(pass);
}

function validatePasswordsMatch(pass1,pass2){
    if(pass1===pass2){
        return true;
    } else {
        return false;
    }
}


var fvalid=validateText(f.value);
var lvalid=validateText(l.value);
var evalid=validateEmail(e.value);
var p1valid=alphanumeric(p1.value);
var p1p2Match=validatePasswordsMatch(p1.value,p2.value);

function validateForm(){
    var errors=false;
    
    if(!fvalid){
        //errorMessage+="<br>"+"first-name is invalid";
        //$addon.addClass('danger')
        document.getElementById("firstNameIconID").style.color="red";
        //document.getElementById("idf").addClass="danger";
        f.setAttribute('value',"First name is invalid");
        errors=true;
    }
    if(!lvalid){
        //errorMessage+="<br>"+"last-name is invalid";
        document.getElementById("lastNameIconID").style.color="red";
        l.setAttribute('value', "Last name is invalid");
        errors=true;
    }
    if(!evalid){
        document.getElementById("emailIconID").style.color="red";
        e.setAttribute('placeholder', "Email is invalid");

        //errorMessage+="<br>"+"email is invalid";
        errors=true;
    }
    if(!p1valid){
        document.getElementById("passwordIconID").style.color="red";
        p1.setAttribute('placeholder', "Password is invalid");
        //errorMessage+="<br>"+"password is invalid";
        errors=true;
    }
    if(!p1p2Match){
        document.getElementById("password2IconID").style.color="red";
        p2.setAttribute('value',"Passwords do not match");
        errorMessage+="<br>"+"passwords do not match";
        errors=true;
    }
    
    return errors;
}



        var ERRORS=validateForm();
        
        if(ERRORS==false){
            document.forms.chicken.submit();
            var welcomeMessage="Welcome to the Jetts family "+f.value+" "+l.value +"!";
            alert(welcomeMessage);
        } else {
            document.getElementById("errorBox").innerHTML=errorMessage;
        }
        
        
        });
        
    
    });