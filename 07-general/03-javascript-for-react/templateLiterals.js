const name = 'Bob'
const greeting = `Hello ${name}`

console.log(greeting)

const formatDate = (timestamp) => {
  const date = new Date(timestamp)

  return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString()
}

const note = {
  title: 'Project discussion',
  timestamp: Date.now(),
}

console.log(`Last edited: ${formatDate(note.timestamp)}`)