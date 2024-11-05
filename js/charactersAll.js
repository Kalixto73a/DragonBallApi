const REQUESTCHARACTERS = "https://dragonball-api.com/api/characters"
async function characters() {
    const data  = await fetchCharactersAPI()
    const totalItems = data.meta.totalItems
    const newData = await fetchCharactersAPI(`?limit=${totalItems}`)
    //displayCharacters(newData.items)
}
async function fetchCharactersAPI(limit = "") {
  const res = await fetch(`${REQUESTCHARACTERS}${limit}`)
  const data = await res.json()
  return data
}
async function displayCharacters(characters) {
  const list = document.getElementById("appCharacters")
  characters.forEach((character) => {
    const listItem = document.createElement("li")

    const listName = document.createElement("div")
    listName.setAttribute("textContent", character.name)

    const listImage = document.createElement("img")
    listImage.setAttribute("src", character.image)

    const listKi = document.createElement("div")
    listKi.setAttribute("textContent", character.Ki)

    const listMaxKi = document.createElement("div")
    listMaxKi.setAttribute("textContent", character.maxKi)

    const listRace = document.createElement("div")
    listRace.setAttribute("textContent", character.race)

    const listGender = document.createElement("div")
    listGender.setAttribute("textContent", character.gender)

    const listDescription = document.createElement("div")
    listDescription.setAttribute("textContent", character.description)

    const listAffiliation = document.createElement("div")
    listAffiliation.setAttribute("textContent", character.affiliation)

    const listDeletedAt = document.createElement("div")
    listDeletedAt.setAttribute("textContent", character.DeletedAt)

    listItem.appendChild(listName)
    listItem.appendChild(listKi)
    listItem.appendChild(listMaxKi)
    listItem.appendChild(listRace)
    listItem.appendChild(listGender)
    listItem.appendChild(listDescription)
    listItem.appendChild(listImage)
    listItem.appendChild(listAffiliation)
    listItem.appendChild(listDeletedAt)
    list.appendChild(listItem)
  })
}
characters()
