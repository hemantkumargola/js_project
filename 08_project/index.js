const text = document.querySelector('#textarea')
const btn = document.querySelector('#btn')

const output = document.querySelector('.output')
console.log(text, btn, output);


btn.addEventListener('click', () => {

    if (text.value === "") {
        output.innerHTML = "please enter some text"
    } else {
        const val = text.value;
        let count = 0;
        for (let i = 0; i < val.length; i++) {
            if (val[i] === 'a' || val[i] === 'e' || val[i] === 'i' || val[i] === 'o' || val[i] === 'u')
                count++;
        }

        output.innerHTML = `The Total number vowel are ${count}`
    }
});