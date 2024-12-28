document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loadDataBtn').addEventListener('click', loadData)
})

async function loadData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        const output = document.createElement('ul')
        data.forEach(post => {
            const listItem = document.createElement('li')
            listItem.textContent = post.title
            output.appendChild(listItem)
        })
        document.getElementById('dataContainer').innerHTML = ''
        document.getElementById('dataContainer').appendChild(output)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

