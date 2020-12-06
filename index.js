
/*---Phone Input Mask---*/

Array.prototype.forEach.call(document.body.querySelectorAll("*[data-mask]"), applyDataMask);

function applyDataMask(field) {
    var mask = field.dataset.mask.split('');
    
    // For now, this just strips everything that's not a number
    function stripMask(maskedData) {
        function isDigit(char) {
            return /\d/.test(char);
        }
        return maskedData.split('').filter(isDigit);
    }
    
    // Replace `_` characters with characters from `data`
    function applyMask(data) {
        return mask.map(function(char) {
            if (char != '_') return char;
            if (data.length == 0) return char;
            return data.shift();
        }).join('')
    }
    
    function reapplyMask(data) {
        return applyMask(stripMask(data));
    }
    
    function changed() {   
        var oldStart = field.selectionStart;
        var oldEnd = field.selectionEnd;
        
        field.value = reapplyMask(field.value);
        
        field.selectionStart = oldStart;
        field.selectionEnd = oldEnd;
    }
    
    field.addEventListener('click', changed)
    field.addEventListener('keyup', changed)
}

/*---End Phone Input Mask---*/


/*---Login/Logout---*/

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const navLogin = document.getElementById("nav-login");
const navLogout = document.getElementById("nav-logout");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.user.value;
    const password = loginForm.password.value;

    if (username === "test" && password === "test123") {
        window.location.href="testForm.html"
    } 
    else if (username === "testviewer" && password === "test123") {
        window.location.href="testData.html"
    } 
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
if(navLogout){
    navLogout.addEventListener("click", () => {
        window.location.href="index.html"
    })
}
/*---End Login---*/