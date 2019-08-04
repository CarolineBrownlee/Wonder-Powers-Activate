// The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList 
// of DOM elements when those events are broadcast by the browser.


// Add the correct string as the first argument to addEventListener()


document.querySelector("#activate-flight").addEventListener("click", event => {
    flightHandlerFunction(event)
})

// // Write a function named flightHandlerFunction that will remove the disabled class on 
// the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...

const flightHandlerFunction = () => {
    document.querySelector("#flight").classList.remove("disabled")
    document.querySelector("#flight").classList.add("enabled")
}

// Once you have that working, write two more JavaScript functions, 
// and two more querySelector().addEventListener() statements for 
// handling the click event on the other two buttons. 
// Those event handlers should perform the same step of removing disabled, 
// and adding enabled on the corresponding <section> elements


document.querySelector("#activate-mindreading").addEventListener("click", event => {
    activateMindReadingFunction(event)
})

const activateMindReadingFunction = () => {
    document.querySelector("#mindreading").classList.remove("disabled")
    document.querySelector("#mindreading").classList.add("enabled")
}

document.querySelector("#activate-xray").addEventListener("click", event => {
    activateXrayFunction(event)
})

const activateXrayFunction = () => {
    document.querySelector("#xray").classList.remove("disabled")
    document.querySelector("#xray").classList.add("enabled")
}

// Once that is complete, add two more buttons

// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating 
// all powers when the corresponding buttons are clicked. 
// You will need to use the document.querySelectorAll() method for these.

document.querySelector("#activate-all").addEventListener("click", event => {
    activateAll(event)
})

const activateAll = () => {
    const power = document.querySelectorAll(".power")
    power.forEach(element => {
        element.classList.remove("disabled")
        element.classList.add("enabled")
        
    });
}

document.querySelector("#deactivate-all").addEventListener("click", event => {
    deactivateAll(event)
})

const deactivateAll = () => {
    const powerOFF = document.querySelectorAll(".power")
        powerOFF.forEach(element => {
            element.classList.remove("enabled")
            element.classList.add("disabled")
        });
}
