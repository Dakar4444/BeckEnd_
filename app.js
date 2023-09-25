function send() {
    //Ввод данных
    //let x = prompt("Введите имя: ")
    let message = document.getElementById('message').value;

    //Логика
    //x = x + 2
    if (message=='') {
        document.getElementById('error').innerText = "Введите сообщение!"
    }
    else {
        document.getElementById('result').innerText = message;
        document.getElementById('error').innerText = ""
    }

    //Вывод данных
    //alert(x)
    //document.getElementById('result').value = message;
}