const root = document.getElementById("root")
const inputName = document.getElementById("name")
const inputUmur = document.getElementById("age")
const inputEmail = document.getElementById("email")
const button = document.getElementById("button")
const output = document.getElementById('inputData')
const remove = document.getElementById("noRecord")

button.addEventListener("click", (e) => {
  e.preventDefault()

  remove.remove()

  if (inputName.value !== "" && inputUmur.value !== "" && inputEmail.value !== "") {
    const dataBaru = document.createElement("tr")
    dataBaru.innerHTML = `
          <td class="text-center border border-black">${inputName.value}</td>
          <td class="text-center border border-black">${inputUmur.value}</td>
          <td class="text-center border border-black">${inputEmail.value}</td>
          <td class="text-center border border-black"><button class="edit-btn px-5 py-2 text-white bg-blue-500 rounded-xl" onclick="edit(this)">Edit</button></td>
          <td class="text-center border border-black"><button class="delete-btn px-5 py-2 text-white bg-blue-500 rounded-xl" onclick="hapus(this)">Delete</button></td>
      `
      
      output.appendChild(dataBaru);

      inputName.value = ""
      inputUmur.value = ""
      inputEmail.value = ""

  } else {
      alert('ISI WOII')
  }
})

const hapus = (btn) => {
  if(confirm('YAKIN')) {
    const row = btn.parentElement.parentElement
    row.parentElement.removeChild(row)
  }
}

const edit = (btn) => {
  const row = btn.parentElement.parentElement
  const cells = row.getElementsByTagName('td')

  inputName.value = cells[0].textContent
  inputUmur.value = cells[1].textContent
  inputEmail.value = cells[2].textContent

  row.remove()
}
