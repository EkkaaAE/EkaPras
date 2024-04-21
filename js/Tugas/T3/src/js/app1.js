const root = document.getElementById("root")
const inputName = document.getElementById("name")
const inputUmur = document.getElementById("age")
const inputEmail = document.getElementById("email")
const button = document.getElementById("button")
const output = document.getElementById('inputData')
const remove = document.getElementById("noRecord")


const data = []

const generateElement = () => {
    output.innerHTML = data.map((item, index) => {
        if (item !== null) {
            return (`<tr>
                <td>${index}</td>
                <td>${index}</td>
                <td>${index}</td>
                <td class="text-center border border-black"><button class="edit-btn px-5 py-2 text-white bg-blue-500 rounded-xl" onclick="editee(${index})"">Edit</button></td>
                <td class="text-center border border-black"><button class="delete-btn px-5 py-2 text-white bg-blue-500 rounded-xl" onclick="deletee(${index})">Delete</button></td>
            </tr>`)
        }
    })
}


button.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputName.value !== "" && inputUmur.value !== "" && inputEmail.value !== "") {
        data.push(inputName.value)
        data.push(inputUmur.value)
        data.push(inputEmail.value)
        
    } else {
        alert('ISI WOII')
    }
    
    
    remove.remove()
    generateElement()
    inputName.focus()
    inputUmur.focus()
    inputEmail.focus()
    inputName.value = ""
    inputUmur.value = ""
    inputEmail.value = ""
    // console.log(data)
})