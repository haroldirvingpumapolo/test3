const images = document.getElementById('imagesId')
fetch('https://jsonplaceholder.typicode.com/photos').then((val) => val.json())
.then(v => v.map((b) =>  images.innerHTML += `<div><img src="${b.url}" /></div>`))
