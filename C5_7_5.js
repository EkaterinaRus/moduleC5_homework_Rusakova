// Ищем ноду для вставки результата запроса
const res = document.getElementById('res');
const resPageLimit = document.getElementById('res_page_limit');
// Ищем форму
const form = document.getElementById('form')

const resPage = document.getElementById('res_page');
const resLimit = document.getElementById('res_limit');

function myClick(event) {
    event.preventDefault()

    const pageImg = document.getElementById('page_img').value;
    const limitImg = document.getElementById('limit_img').value;
    const url = `https://picsum.photos/v2/list?page=${pageImg}&limit=${limitImg}`

    if (!(pageImg >= 1 && pageImg <= 10) && !(limitImg >= 1 && limitImg <= 10)) {
        resPage.innerHTML = ''
        resLimit.innerHTML = ''
        resPageLimit.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
        displayResult('')
    }
    else if (!(pageImg >= 1 && pageImg <= 10)) {
        resPageLimit.innerHTML = ''
        resLimit.innerHTML = ''
        resPage.innerHTML = "Номер страницы вне диапазона от 1 до 10";
        displayResult('')

    } 
    else if (!(limitImg >= 1 && limitImg <= 10)) {
        resPageLimit.innerHTML = ''
        resPage.innerHTML = ''
        resLimit.innerHTML = "Лимит вне диапазона от 1 до 10";
        displayResult('')

    } 
    else if (pageImg >= 1 && pageImg <= 10 && limitImg >= 1 && limitImg <= 10) {
        resPage.innerHTML = ''
        resLimit.innerHTML = ''
        resPageLimit.innerHTML = ''
        useRequest(url, displayResult)

   }
}

function useRequest(url, callback) {
    // Делаем запрос за данными
    fetch(url)
    .then((response) => {
        const result = response.json();
        return result
    })
    .then((data) => {
        return data
    })
    .then((data) => {
        if (callback) {
            callback(data)
        }
    })
    .catch(() => { console.log('error') });
}

/**
 * Функция обработки полученного результата
 * apiData - объект с результатом запроса
 */

function displayResult(apiData) {
    let cards = '';

    if (apiData == '') {
        res.innerHTML = '';
    }

    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"/>
        </div>
    `;
        cards = cards + cardBlock;
    })

    res.innerHTML = cards;
}

form.addEventListener('submit', myClick);