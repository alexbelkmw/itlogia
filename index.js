document.addEventListener("DOMContentLoaded", function () {
    /* Исключаю точку из имени */
    document.getElementById('name').addEventListener('input', e => {
        if (e.data === '.') {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1)
        }
    })
    /* Исключаю другие символы, кроме цифр в поле телефона */
    document.getElementById('telephone').addEventListener('input', e => {
        if (Number.isNaN(Number(e.data))) {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1)
        }
    })
    /* Собираю значения инпутов и по кнопке заказа отправляю на сервер
    Пользователю показывается сообщение */
    document.getElementById('order').addEventListener('click', e => {
        const name = document.getElementById('name').value
        const address = document.getElementById('telephone').value
        const telephone = document.getElementById('telephone').value

        fetch('https://fakesite12300.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ name, address, telephone })
        })

        document.getElementById("popup").style.opacity = 1;

        setTimeout(() => {
            document.getElementById("popup").style.opacity = 0;
        }, [5500])
    })
    const modal = document.getElementById('modal')
    modal.addEventListener('click', e => {
        modal.style.display = 'none'
    })
    /* Раскрываю модальное окно */
    Array.prototype.filter.call(
        document.getElementsByClassName('choice_img'),
        function (element) {
            element.addEventListener('click', () => {
                document.getElementById('targetImg').src = element.src
                modal.style.display = 'flex'
            })
        },
    );

});