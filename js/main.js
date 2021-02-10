const flatNumber = document.querySelector('#flat-number');
const calcBtn = document.querySelector('#calc');
const message = document.querySelector('#message');

calcBtn.addEventListener('click', function() {
    const flatNumberValue = Number(flatNumber.value)

    console.log(flatNumberValue);
    if (flatNumberValue < 1 || flatNumberValue > 90) {
        message.textContent = 'ОШИБКА, повторите ввод!';
    } else if (flatNumberValue < 20) {
        message.textContent = 'Первый подъезд!';
    } else if (flatNumberValue < 48) {
        message.textContent = 'Второй подъезд!';
    } else if (flatNumberValue < 90) {
        message.textContent = 'Третий подъезд!';
    }
})
