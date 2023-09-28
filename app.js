function send() {

    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;

    if (message=='') {
        document.getElementById('error').innerText = "Введите сообщение!"
    }
        else {
        document.getElementById('error').innerText = "";
        document.getElementById('result').innerText = `\n ${name}: ${message}`;
    }
}