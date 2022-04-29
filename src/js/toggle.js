function toggle(register) {
    const element = document.getElementById(register);
    if(element.style.display == "block") {
        element.style.display = "none";
    }
    else {
        element.style.display = "block";
    }
} 