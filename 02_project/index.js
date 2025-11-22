let input = document.getElementById('input-id')
let btn = document.getElementById('qr-btn')
let img = document.getElementById('qr-img')


btn.addEventListener('click', () => {
    const inputvalue = input.value;

    if (!inputvalue) {
        alert('please enter a valid url')
        return
    } else {

        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
        img.alt = `Qr ci=ode for ${inputvalue}`
    }

})