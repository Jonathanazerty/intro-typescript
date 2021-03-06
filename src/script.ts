(function() {
    document.getElementById('guess-form').addEventListener("submit", compareUserGuess);

    function compareUserGuess (event: any) {
        event.preventDefault();

        const secretNumber: number = generateSecretNumber();
        const userNumber: number = parseInt((<HTMLInputElement>document.getElementById('guess')).value);
        // document.getElementById('guess') as HTMLInputElement;

        // const userGuess = userNumber.value as Number | String;

        if (secretNumber == userNumber) { //userGuess
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }

    function generateSecretNumber() {
        const secretNumber = getRandomArbitrary(1, 22);

        return secretNumber;
    }

    function getRandomArbitrary(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();