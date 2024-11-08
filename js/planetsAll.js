const REQUESTPLANETS = "https://dragonball-api.com/api/planets"
async function planets() {
  const data = await fetchPlanetsAPI()
  const totalItems = data.meta.totalItems
  const newData = await fetchPlanetsAPI(`?limit=${totalItems}`)
  displayPlanets(newData.items)
}
async function fetchPlanetsAPI(limit = "") {
  try {
    const res = await fetch(`${REQUESTPLANETS}${limit}`)
    if (!res.ok) {
      throw new Error(`Error en la peticion ${res.status}`)
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error("Hubo un error al obtener los personajes de la API")
  }
}

async function displayPlanets(planets) {
  const list = document.getElementById("appPlanets")
  planets.forEach((planets) => {
    const listItem = document.createElement("div")
    listItem.classList.add(
      "bg-[#3c3e44]",
      "shadow-lg",
      "rounded-lg",
      "overflow-hidden"
    )

    const listName = document.createElement("div")
    listName.innerHTML = planets.name
    listName.classList.add("text-3xl", "text-white", "ml-2", "mr-2")

    const listIsDestroyed = document.createElement("div")
    listIsDestroyed.textContent = planets.isDestroyed
      ? "Destruido"
      : "No esta destruido"
    listIsDestroyed.classList.add(
      "text-xl",
      "text-yellow-400",
      "mb-4",
      "ml-2",
      "mr-2"
    )

    const listImage = document.createElement("img")
    listImage.setAttribute("src", planets.image)
    listImage.classList.add(
      "h-96",
      "items-center",
      "rounded-md",
      "w-full",
      "bg-white"
    )

    const listDescription = document.createElement("div")
    listDescription.textContent = planets.description
    listDescription.classList.add(
      "text-xl",
      "text-yellow-400",
      "mb-4",
      "ml-2",
      "mr-2"
    )

    const listDeletedAt = document.createElement("div")
    listDeletedAt.textContent = planets.deletedAt

    listItem.appendChild(listImage)
    listItem.appendChild(listName)
    listItem.appendChild(listIsDestroyed)
    listItem.appendChild(listDescription)
    listItem.appendChild(listDeletedAt)
    list.appendChild(listItem)
  })
}
planets()
