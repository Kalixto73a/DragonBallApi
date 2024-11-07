const REQUESTCHARACTERS = "https://dragonball-api.com/api/characters"
async function characters() {
  const data = await fetchCharactersAPI()
  const totalItems = data.meta.totalItems
  const newData = await fetchCharactersAPI(`?limit=${totalItems}`)
  displayCharacters(newData.items)
}
async function fetchCharactersAPI(limit = "") {
  try {
    const res = await fetch(`${REQUESTCHARACTERS}${limit}`)
    if (!res.ok) {
      throw new Error(`Error en la peticion: ${res.status}`)
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error("Hubo un error al obtener los personajes de la API")
  }
}
async function displayCharacters(characters) {
  const list = document.getElementById("appCharacters")
  characters.forEach((character) => {
    const listItem = document.createElement("div")
    listItem.classList.add(
      "bg-[#3c3e44]",
      "shadow-lg",
      "rounded-lg",
      "overflow-hidden"
    )

    const listName = document.createElement("div")
    listName.textContent = character.name
    listName.classList.add("text-3xl", "text-white", "ml-2", "mr-2")

    const listImage = document.createElement("img")
    listImage.setAttribute("src", character.image)
    listImage.classList.add(
      "h-svh",
      "items-center",
      "rounded-md",
      "w-full",
      "bg-white"
    )

    const listKi = document.createElement("div")
    listKi.textContent = `Ki: ${character.ki}`
    listKi.classList.add("text-xl", "text-yellow-400", "ml-2", "mr-2")

    const listMaxKi = document.createElement("div")
    listMaxKi.textContent = `MaxKi: ${character.maxKi}`
    listMaxKi.classList.add("text-xl", "text-yellow-400", "ml-2", "mr-2")

    const listRace = document.createElement("div")
    listRace.textContent = character.race
    listRace.classList.add("text-xl", "text-yellow-400", "ml-2", "mr-2")

    const listGender = document.createElement("div")
    listGender.textContent = character.gender
    listGender.classList.add("text-xl", "text-yellow-400", "ml-2", "mr-2")

    const listAffiliation = document.createElement("div")
    listAffiliation.textContent = character.affiliation
    listAffiliation.classList.add(
      "text-xl",
      "text-yellow-400",
      "ml-2",
      "mr-2",
      "mb-2"
    )

    const listDeletedAt = document.createElement("div")
    listDeletedAt.textContent = character.DeletedAt

    listItem.appendChild(listImage)
    listItem.appendChild(listName)
    listItem.appendChild(listGender)
    listItem.appendChild(listRace)
    listItem.appendChild(listKi)
    listItem.appendChild(listMaxKi)
    listItem.appendChild(listAffiliation)
    listItem.appendChild(listDeletedAt)
    list.appendChild(listItem)
  })
}
characters()
