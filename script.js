function changeColor() {
    const currentMode = document.querySelector("#button div").className;
    
    changeBackgroundColors(currentMode);
    changeTextColors(currentMode);
    changeBorderColors(currentMode);
    changeButton(currentMode);
}

function changeBackgroundColors(mode) {
    if (mode == "light") {
        document.querySelector("html").style.backgroundColor = "black";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("nav").style.backgroundColor = "black";
        
        document.querySelectorAll(".minor").forEach(element => {
            element.style.backgroundColor = "darkgray";
        });
    } else {
        document.querySelector("html").style.backgroundColor = "#daebf2";
        document.querySelector("body").style.backgroundColor = "#daebf2";
        document.querySelector("nav").style.backgroundColor = "#daebf2";
        
        document.querySelectorAll(".minor").forEach(element => {
            element.style.backgroundColor = "#b0deed";
        });
    }
}

function changeTextColors(mode) {
    if (mode == "light") {
        document.querySelector("html").style.color = "white";
        
        document.querySelectorAll("a").forEach(element => {
            element.style.color = "white";
        });
    } else {
        document.querySelector("html").style.color = "black";
        
        document.querySelectorAll("a").forEach(element => {
            element.style.color = "black";
        });
    }
}

function changeBorderColors(mode) {
    if (mode == "light") {
        document.querySelector("#about-content").style.border = "3px solid white";
        document.querySelector("#about-content").style.borderBottom = "0";
        document.querySelector("#projects-content").style.border = "3px solid white";
        document.querySelector("#projects-content").style.borderTop = "0";
        document.querySelector("#projects-content").style.borderBottom = "0";
        document.querySelector("#contact-content").style.borderLeft = "3px solid white";
        document.querySelector("#skills-content").style.borderRight = "3px solid white";

        document.querySelectorAll("#contact-content, #skills-content").forEach(element => {
            element.style.borderBottom = "3px solid white";
        });
    } else {
        document.querySelector("#about-content").style.border = "3px solid black";
        document.querySelector("#about-content").style.borderBottom = "0";
        document.querySelector("#projects-content").style.border = "3px solid black";
        document.querySelector("#projects-content").style.borderTop = "0";
        document.querySelector("#projects-content").style.borderBottom = "0";
        document.querySelector("#contact-content").style.borderLeft = "3px solid black";
        document.querySelector("#skills-content").style.borderRight = "3px solid black";

        document.querySelectorAll("#contact-content, #skills-content").forEach(element => {
            element.style.borderBottom = "3px solid black";
        });
    }
}

function changeButton(mode) {
    if (mode == "light") {
        document.querySelector("#button div").style.backgroundColor = "darkgray";
        document.querySelector("#button div").style.borderColor = "white";
        document.querySelector("#button div").className = "dark";
        document.querySelector("#button div").innerHTML = "Light Mode";
    } else {
        document.querySelector("#button div").style.backgroundColor = "#b0deed";
        document.querySelector("#button div").style.borderColor = "#0b0052";
        document.querySelector("#button div").className = "light";
        document.querySelector("#button div").innerHTML = "Dark Mode";
    }
}