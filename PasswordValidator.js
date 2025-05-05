
// Without Regex:

let password = "123abCD@#"

function validator(pass) {
    const charArray = Array.from(pass);

    if (!charArray.some(char => char >= '0' && char <= '9')) {
        return false; 
    }
    else if (!charArray.some(e => e === e.toUpperCase() && e !== e.toLowerCase())) {
        return false;
    }
    else if (!charArray.some(e => !(e >= '0' && e <= '9') && !(e >= 'A' && e <= 'Z') && !(e >= 'a' && e <= 'z'))) {
        return false;
    }
    else if (pass.length < 8){
        return false;
    }
    else {
        return true;
    }
}

if(validator(password)) {
    console.log('Yes, the password passed all the tests!');
}
else {
    console.log('Get Better!');
}

// -------------------------------------------------------------------

// With *regex* (better)

let password1 = "123abCD@#";

function validator(pass) {
    
    if (!/\d/.test(pass)) {
        return false; 
    }
    else if (!/[A-Z]/.test(pass)) {
        return false; 
    }
    else if (!/[^A-Za-z0-9]/.test(pass)) {
        return false;
    }
    else if (pass.length < 8) {
        return false; 
    }
    return true; 
}

if (validator(password1)) {
    console.log('Yes, the password passed all the tests!');
} else {
    console.log('Get Better!');
}

