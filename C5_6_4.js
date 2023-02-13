
const form = document.getElementById('form')
const image = document.getElementById('img');
const res = document.getElementById('res');


form.addEventListener('submit', function (event) {
    event.preventDefault()

    const widthImg = document.getElementById('width_img').value;
    const heightImg = document.getElementById('height_img').value;

    let url = `https://picsum.photos/${widthImg}/${heightImg}`

    if (widthImg >= 100 && widthImg <= 300 && heightImg >= 100 && heightImg <= 300) {
        fetch(url)
            .then(response => response.url)
            .then(data => image.src = data)
        res.innerHTML = ''
    } else {
        const text = "Одно из чисел вне диапазона от 100 до 300"
        res.innerHTML = text;
        image.src = ''
    }
})
