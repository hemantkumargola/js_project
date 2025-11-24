const conaner = document.querySelectorAll("span")



conaner.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle("active");


    })
})