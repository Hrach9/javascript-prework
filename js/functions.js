function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}



// var computerMove, randomNumber;
// randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log('Wylosowana liczba to: ' + randomNumber);
// if (randomNumber == '1') {
//     computerMove = 'kamień';
// } else if (randomNumber == '2') {
//     computerMove = 'papier';
// } else {
//     computerMove = 'nożyce';
// }
// printMessage('Mój ruch: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    playerMove = 'Zmień ruch';
    printMessage('! ! ! Nieprawydłowy ruch ! ! !');

}
printMessage('Twój ruch: ' + playerMove);