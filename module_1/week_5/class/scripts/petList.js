const loadData = () => {
  const localStorageList = JSON.parse(localStorage.getItem("pets"))
  document.getElementById('lista').innerText=localStorageList
}

document.addEventListener('DOMContentLoaded', loadData)