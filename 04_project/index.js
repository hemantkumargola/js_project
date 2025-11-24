const inputs = document.getElementById('input');
const outputs = document.getElementById('output');

inputs.addEventListener('input', function() {

    console.log(inputs.value);
    let password = inputs.value;

    if (password.length < 8) {
        outputs.innerText = 'Password is too short';
        outputs.style.color = 'red';
        return;
    }

    if (!/[a-z]/.test(password)) {
        outputs.innerText = 'Password is missing a lowercase letter';
        outputs.style.color = 'red';
        return;
    }

    if (!/[A-Z]/.test(password)) {
        outputs.innerText = 'Password is missing an uppercase letter';
        outputs.style.color = 'red';
        return;
    }

    if (!/[0-9]/.test(password)) {
        outputs.innerText = 'Password is missing a number';
        outputs.style.color = 'red';
        return;
    }

    // ✅ Correct special character regex
    if (!/[!@#$%^&*()_\-+={}[\]:;"'<>,.?/\\|~`]/.test(password)) {
        outputs.innerText = 'Password is missing a special character';
        outputs.style.color = 'red';
        return;
    }

    outputs.innerText = 'Password is valid';
    outputs.style.color = 'green';
});