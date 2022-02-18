 //Losowanie ruchu komputera

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


 //Ustalanie ruchu gracza

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