function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}



var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamień';
} else if (randomNumber == '2') {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);