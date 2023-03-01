async function getData() {
    const data = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
    const response = await data.json()
    return response
}

async function showData() {
    let data = await getData()
    console.log(data)

    let divParent = document.getElementById('div-parent')

    data.forEach(element => {
        let img = document.createElement('img')
        img.src = element.url
        img.alt = 'Animal fofinho'

        return divParent.appendChild(img)
    })
}

showData()