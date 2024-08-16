const addPet = (event) => {
  event.preventDefault(); // previne que a tela recarregue.

  const petPhoto = document.getElementById("pet-photo").value;
  const petName = document.getElementById("pet-name").value;
  const petAge = parseInt(document.getElementById("pet-age").value);
  const petColor = document.getElementById("pet-color").value;
  const petDescription = document.getElementById("pet-description").value;
  const petSpecies = document.getElementById("pet-species").value;

  console.log(petSpecies);
  console.log(petPhoto);
  console.log(petName);
  console.log(petAge);
  console.log(petColor);
  console.log(petDescription);

  if (petPhoto && petName && petAge) {
    const pet = {
      id: crypto.randomUUID(),
      petPhoto: petPhoto,
      petName: petName,
      petAge: petAge,
      petColor: petColor,
      petDescription: petDescription,
      petSpecies: petSpecies,
    };

    // Pega os itens pet no local storage, transforma de String para array e insere na localStorageList
    // Fazemos isso para recuperar o que já tem no localStorage, para não ficarmos zerando a lista
    const localStorageList = JSON.parse(localStorage.getItem("pets")) || [];

    // Envia um objeto do tipo pet que é o que estamos informando no momnento na tela, será enviado para o localStorageList
    localStorageList.push(pet);

    // Salvar no localStorage
    // JSON.stringify serve para transformar o objeto em String pois o local Storage só trabalha com String - NECESSÁRIO
    localStorage.setItem("pets", JSON.stringify(localStorageList));

    console.log(`lista em memória`, localStorageList);

    // Reseta os campos do formulário
    document.getElementById('pet-create').reset();
  }

  if (!petPhoto) {
    document.getElementById("pet-photo-error").innerText =
      "Uma foto do Pet é obrigatória!";
  } else {
    document.getElementById("pet-species-error").innerText = "";
  }

  if (!petName) {
    document.getElementById("pet-name-error").innerText =
      "Nome do Pet é obrigatório!";
  } else {
    document.getElementById("pet-species-error").innerText = "";
  }

  if (!petAge) {
    document.getElementById("pet-age-error").innerText =
      "A idade do Pet é obrigatória!";
  } else {
    document.getElementById("pet-species-error").innerText = "";
  }

  if (!petDescription) {
    document.getElementById("pet-description-error").innerText =
      "A descrição do Pet é obrigatória!";
  } else {
    document.getElementById("pet-species-error").innerText = "";
  }

  if (petSpecies === "none") {
    document.getElementById("pet-species-error").innerText =
      "Selecione uma espécie!";
  } else {
    document.getElementById("pet-species-error").innerText = "";
  }
};

document.getElementById("pet-create").addEventListener("submit", addPet);
