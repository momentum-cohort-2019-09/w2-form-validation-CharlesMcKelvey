function markValid(field) {
    field.parentNode.classList.remove('input-invalid')
    field.parentNode.classList.add('input-valid')
}

function markInvalid(field) {
    field.parentNode.classList.remove('input-valid')
    field.parentNode.classList.add('input-invalid')
}