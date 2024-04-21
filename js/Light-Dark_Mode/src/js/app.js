const mode = document.getElementById("mode")
const lightMode = document.getElementById("light")
const darkMode = document.getElementById("dark")

lightMode.addEventListener('click', e => {
    mode.classList.remove('lightMode')
    mode.classList.add('darkMode')
    mode.classList.add('toBlack')
})

darkMode.addEventListener('click', e => {
    mode.classList.remove('darkMode')
    mode.classList.add('lightMode')
})