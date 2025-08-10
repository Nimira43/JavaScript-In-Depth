const name = 'Bob'
const greeting = `Hello ${name}`

console.log(greeting)

const formatDate = (timestamp) => {
  const date = new Date(timestamp)

  return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString()
}

