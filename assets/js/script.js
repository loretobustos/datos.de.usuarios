const userData = (() => {

    const quantityUsers = 10
    const url = `https://randomuser.me/api/?results=${quantityUsers}`
    const div = document.getElementById('user-data')

    const loadData = async (resource) => {
        const response = await fetch(resource)
        const users = await response.json()
        return users
    }

    const getData = async (url) => {
        try {
            let users = await loadData(url)
            for (const user of users.results) {
                let element = document.createElement('p')
                let elementName = document.createElement('p')
                let elementEmail = document.createElement('p')
                let elementPhone = document.createElement('p')
                let img = document.createElement('img')

                img.setAttribute('src', user.picture.large)
                elementName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`
                elementEmail.textContent = user.email
                elementPhone.textContent = user.cell

                element.appendChild(img)
                element.appendChild(elementName)
                element.appendChild(elementEmail)
                element.appendChild(elementPhone)
                div.appendChild(element)
            }
        } catch (e) {
            alert('En este momento no es posible cargar un recurso necesario.')
        }
    }

    getData(url)

})()