 //Losowanie ruchu komputera

 //  var computerMove, randomNumber; //Dodaliśmy zmienne
 //  randomNumber = Math.floor(Math.random() * 3 + 1); // silnik Math.floor zaokrągla liczbę do dołu a Math.random losuje nam liczbę 
 //  console.log('Wylosowana liczba to: ' + randomNumber); // Wyświetla w konsoli "narzędzia developerskie" komunikaty w typ przypadku "wylosowana liczba to ..."
 //  if (randomNumber == '1') {
 //      computerMove = 'kamień';
 //  } else if (randomNumber == '2') {
 //      computerMove = 'papier';
 //  } else {
 //      computerMove = 'nożyce';
 //  }
 //  //Dodaliśmy warunek która mówi "jeżeli randomNumber będzie równe 1 to napisz na ekranie kamien w przeciwnym razie jeżeli randomNumber będzie równe 2 (czyli wylosujesz 2 ) to napisz na ekranie papier a jeżeli wylosujesz inną liczbę niż 1 i 2 to napisz na ekranie nożyce"
 //  printMessage('Mój ruch: ' + computerMove);


 //  //Ustalanie ruchu gracza

 //  var playerMove, playerInput;
 //  playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
 //  console.log('Wpisana odpowiedź to: ' + playerInput);
 //  if (playerInput == '1') {
 //      playerMove = 'kamień';
 //   } else if (playerInput == '2') {
 //       playerMove = 'papier';
 //   } else if (playerInput == '3') {
 //       playerMove = 'nożyce';
 //   } else {
 //       playerMove = 'Zmień ruch';
 //       printMessage('! ! ! Nieprawydłowy ruch ! ! !');

 //  }
 //  printMessage('Twój ruch: ' + playerMove);

 var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

 /**
  * Describe this function...
  */
 function getMoveName(argMoveId) {
     console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
     if (argMoveId == 1) {
         return 'kamień';
     } else if (argMoveId == '2') {
         return 'papier';
     } else if (argMoveId == '3') {
         return 'nożyce';
     } else {
         printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');

         return 'kamień';
     }
 }

 /**
  * Describe this function...
  */
 function displayResult(argPlayerMove, argComputerMove) {
     console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
     if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
         printMessage('Wygrywasz!');
     } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
         printMessage('Wygrywasz!');
     } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
         printMessage('Wygrywasz!');
     } else if (argPlayerMove == argComputerMove) {
         printMessage('Remis!');
     } else {
         printMessage('Przegrywasz :(');
     }
     printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
 }

 playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
 console.log('wybór ruchu gracza to: ' + playerInput);

 playerMove = getMoveName(playerInput);
 console.log('ruch gracza to: ' + playerMove);

 randomNumber = Math.floor(Math.random() * 3 + 1);
 console.log('wylosowana liczba to: ' + randomNumber);
 computerMove = getMoveName(randomNumber);
 console.log('ruch komputera to: ' + computerMove);

 displayResult(playerMove, computerMove);