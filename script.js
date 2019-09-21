console.log('Hey, your JS is connected')
const now = new Date()

function query (selector) {
    return document.querySelector(selector);
};

function querys (selector) {
    return document.querySelectorAll(selector)
};
// Quick Queriers Above
// Making the field valid if it is
function markValid(field) {
    let parent = field.closest('.input-field')
    parent.classList.remove('input-invalid')
    parent.classList.add('input-valid')
};
// Making the field invalid if it is
function markInvalid(field, errorMessage) {
    let parent = field.closest('.input-field')
    parent.classList.remove('input-valid')
    parent.classList.add('input-invalid')
    // Creating the error element
    let childError = document.createElement('p')
    // Adding class' from Shoelace
    childError.classList.add("text-danger", "input-hint")
    childError.innerHTML = errorMessage
    // Puts that kiddo below the parent
    parent.appendChild(childError)
};

function sumOfDays(field) {
    let today = new Date()
    let amount = Number(field.value)
    let sum = 0
    for (let i = 1; i <= Number(amount); i++) {
        if (today.getDay() === 6 || today.getDay() === 0) {
            sum += 7
        } else {
            sum += 5
        }
        today.setDate(today.getDate() + 1)
    }
    return sum 
}

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
};

function isDateTodayorLater(date) {
    let now = new Date();
    let userDate = new Date(date);
    // if (userDate > now) {
    // }
    console.log(now);
    return userDate <= now;
};

// Checking to see if the field is valid (only if empty)
function check(field, errorMessage) {
    if (field.id === "car-year") {
        if (typeof field.value === Number && (field.value > 1900 && field.value < now.getFullYear())) {
            markValid(field)
        } else {
            markInvalid(field, errorMessage)
        }
    } else if (field.id === "start-date") {
        // if () {
        //     markValid(field)
        // } else {
        //     markInvalid(field, errorMessage)
        // }
    } else if (field.id === "days") {
        if (field.value === Number && (field.value > 1 && field.value < 30)) {
            markValid(field)
        } else {
            markInvalid(field, errorMessage)
        }
    } else if (field.id === "credit-card") {
        if (validateCardNumber(field.value)) {
            markValid(field)
        } else {
            markInvalid(field, errorMessage)
        }
    } else if (field.id === "cvv") {
        if (field.value.length === 3) {
            markValid(field)
        } else {
            markInvalid(field, errorMessage)
        }
    } else if (!field.value.trim()) {
        markInvalid(field, errorMessage)
    } else {
        markValid(field)
    }
};

function checkYear(field, errorMsg) {
    if (field.id === "car-year" && typeof (field.value) === Number && (field.value > 1900 && field.value < now.getFullYear())) {
        markValid(field)
    } else {
        markInvalid(field, errorMsg)
    }
}

// function checkDate(field, errorMsg) {
//     if (field.id === "start-date" && field.value )
// }

// function validateName(field, errorMsg) {
//     if (!field.value) {
//         markInvalid(field, errorMsg)
//     } else {
//         markValid(field)
//     }
// }

// function validateCarYear(field, errorMsg) {
//     if (field.value !== Number) {
//         markInvalid(field, "Car year must be a number")
//     } else if (field.value < 1900) {
//         markInvalid(field, "Car year must be after the year 1900")
//     } else if (field.value > now.getFullYear()) {
//         markInvalid(field, "Car year can't be in the future.")
//     } else if (!field.value) {
//         markInvalid(field, errorMsg)
//     } else {
//         markValid(field)
//     }
// }


function errorClearer() {
    // Remove childErrors
    let errorChildren = querys('.text-danger')
    for (let i = 0; i < errorChildren.length; i++) {
        errorChildren[i].remove()
    }
}

query('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()
    // Add error messsage clearing function here. 
    errorClearer()

    let inputs = querys("input");
    for (let i = 0; i < inputs.length; i++) {
        let errorMessage = inputs[i].id + " is requried"
        // if (inputs[i].id === "name") {
        //     validateName(inputs[i], errorMessage)
        // } else if (inputs[i].id === "car-year") {
        //     validateCarYear(inputs[i], errorMessage)
        // } else if (inputs[i].id === "start-date") {
        //     validateStartDate(inputs[i], errorMessage)
        // }
        // Trying a new way above 
        if (inputs[i].id === "car-year" || inputs[i].id === "car-make" || inputs[i].id === "car-model") {
            check(inputs[i], errorMessage)
        } else {
            check(inputs[i], errorMessage)
        }
    }
    let total = document.querySelector('#total')
    sumOfDays(total)
});