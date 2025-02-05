const expand = document.querySelectorAll(".nav")
expand.forEach(item => {
    item.addEventListener("click", function () {
        this.classList.toggle("open")
    })
})