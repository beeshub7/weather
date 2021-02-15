console.log('Client side javascript file is loaded!');

const weatherForm = document.getElementsByTagName('form')[0];
const search = document.getElementsByTagName('input')[0];
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', e => {
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`/weather?address=${location}`).then(response => {
        return response.json();
    }).then(data => {
        if (data.error) {
            messageOne.textContent = data.error;
        } else {
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }
    });
});