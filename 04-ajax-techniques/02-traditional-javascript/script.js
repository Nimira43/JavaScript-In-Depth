function loadData() {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText)
      var output = '<ul>'
      for (let i = 0; i < data.length; i++) {
        output += '<li>' + data[i].title + '</li>' 
      }
      output += '</ul>'
      document.getElementById('dataContainer').innerHTML = output
    }
  }
  xhr.send()
}