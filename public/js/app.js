const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#message1')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    msg1.textContent = 'Loading...'
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = 'error: ' + data.error
                return;
            }
            msg1.textContent = 'address: ' + data.address + ' forecast: ' + data.forecast
        })
    })
})