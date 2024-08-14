const addPet = event => {
  event.preventDefault() // previne que a tela recarregue.

  const petPhoto = document.getElementById('pet-photo').value
  const petName = document.getElementById('pet-name').value
  const petAge = parseInt(document.getElementById('pet-age').value)
  const petColor = document.getElementById('pet-color').value
  const petDescription = document.getElementById('pet-description').value
  const petSpecies = document.getElementById('pet-species').value

  console.log(petSpecies)
  console.log(petPhoto)
  console.log(petName)
  console.log(petAge)
  console.log(petColor)
  console.log(petDescription)

  if (petName === '') {
    document.getElementById('pet-name-error').innerText = 'Nome do Pet é obrigatório!'
  }
}

document.getElementById('pet-create').addEventListener('submit', addPet)