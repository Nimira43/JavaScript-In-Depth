document.getElementById('loadDataBtn').addEventListener('click', loadData)

function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText)
            var output = '<ul>'
            data.forEach(function(post) {
                output += '<li>' + post.title + '</li>';
            })
            output += '</ul>'
            document.getElementById('dataContainer').innerHTML = output
        }
    }

    xhr.send()
}
