var computerMove, randomNumber; //Dodaliśmy zmienne
randomNumber = Math.floor(Math.random() * 3 + 1); // silnik Math.floor zaokrągla liczbę do dołu a Math.random losuje nam liczbę 
console.log('Wylosowana liczba to: ' + randomNumber); // Wyświetla w konsoli "narzędzia developerskie" komunikaty w typ przypadku "wylosowana liczba to ..."
if (randomNumber == '1') {
    computerMove = 'kamień';
} else if (randomNumber == '2') {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}
//Dodaliśmy warunek która mówi "jeżeli randomNumber będzie równe 1 to napisz na ekranie kamien w przeciwnym razie jeżeli randomNumber będzie równe 2 (czyli wylosujesz 2 ) to napisz na ekranie papier a jeżeli wylosujesz inną liczbę niż 1 i 2 to napisz na ekranie nożyce"
printMessage('Mój ruch: ' + computerMove);