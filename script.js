console.log('Hey, your JS is connected')
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
function markInvalid(field) {
    let parent = field.closest('.input-field')
    parent.classList.remove('input-valid')
    parent.classList.add('input-invalid')
};
// Checking to see if the field is valid (only if empty)
function check(field) {
    if (!field.value) {
        markInvalid(field)
    } else {
        markValid(field)
    }
};

function validate(selector) {

}

query('#parking-form').addEventListener('submit', function(event) {
    event.preventDefault()
    let inputs = querys("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].id === "car-year" || inputs[i].id === "car-make" || inputs[i].id === "car-model") {
            check(inputs[i])
        } else {
            check(inputs[i])
        }
    }
});