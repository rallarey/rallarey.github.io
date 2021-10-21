window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateFname() && validateLname() && validateEmail() && validatePhone() && validateMessage()) {
            emailjs.sendForm("service_elc84qu", "template_b8bxmfi", document.getElementById("contact-form"))
                .then(function() {
                    console.log("SUCCESS");
                }, function(error){
                    console.log("FAILED");
                });
            document.getElementById("contact-form").reset();
            window.alert("Email sent!");
        }
        else if (!validateFname()) {
            alert("Please fill in all required fields.")
        }
        else if (!validateLname()) {
            alert("Please fill in all required fields.")
        }
        else if (!validateEmail()) {
            alert("Please enter a valid email address.")
        }
        else if (!validatePhone()) {
            alert("Please enter a valid phone number.")
        }
        else if (!validateMessage()) {
            alert("Please fill in all required fields.")
        } else {
            alert("fail");
        }
    });
}

function validateFname() {
    if (document.getElementById("user_fname").value == "") {
        return false;
    } else {
        return true;
    }
}
    
function validateLname() {
    if (document.getElementById("user_lname").value == "") {
        return false;
    } else {
        return true;
    }
}
    
function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("user_email").value)) {
        return true;
    } else {
        return false; 
    }

}
    
function validatePhone() {
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("user_phone").value)) {
        return true;
    } else {
        return false;
    }
}
    
function validateMessage() {
    if (document.getElementById("user_message").value == "") {
        return false;
    } else {
        return true;  
    }
}
