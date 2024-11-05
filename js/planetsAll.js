const REQUESTPLANETS = "https://dragonball-api.com/api/planets"
async function planets() {
    const data = await fetchPlanetsAPI()
    const totalItems = data.meta.totalItems
    const newData = await fetchPlanetsAPI(`?limit=${totalItems}`)
    displayPlanets(newData.items)
}
async function fetchPlanetsAPI(limit = "") {
  const res = await fetch(`${REQUESTPLANETS}${limit}`)
  const data = await res.json()
  return data
}
async function displayPlanets(planets) {
  const list = document.getElementById("appPlanets")
  planets.forEach((planets) => {
    const listItem = document.createElement("li")

    const listName = document.createElement("div")
    listName.setAttribute("textContent", planets.name)

    const listIsDestroyed = document.createElement("div")
    listIsDestroyed.setAttribute("textContent", planets.isDestroyed)
    listIsDestroyed.innerHTML = listIsDestroyed
      ? "Is destroyed"
      : "Is not destroyed"

    const listDescription = document.createElement("div")
    listDescription.setAttribute("textcontent", planets.description)

    const listImage = document.createElement("img")
    listImage.setAttribute("src", planets.image)

    const listDeletedAt = document.createElement("div")
    listDeletedAt.setAttribute("textContent", planets.deletedAt)

    listItem.appendChild(listName)
    listItem.appendChild(listIsDestroyed)
    listItem.appendChild(listDescription)
    listItem.appendChild(listImage)
    listItem.appendChild(listDeletedAt)
    list.appendChild(listItem)
  })
}
planets()
