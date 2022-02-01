let Game = {
    // call methods and objects
    startGame: function (trainer) {
        this.resetPlayer(trainer);
        this.setIdleTrainer();
    },
    //    creates player inside game
    resetPlayer: function (trainer) {
        switch (trainer) {
            case "Harley":
                player = new Player(trainer, 50000, 36, 76, 80);  // money,experience,age,strength
                break;
            case "Shawn":
                player = new Player(trainer, 15000, 4, 56, 150);
                break;
            case "Matt":
                player = new Player(trainer, 8000, 2, 49, 200);  // money,experience,age,strength
                break;
            case "Terry":
                player = new Player(trainer, 9500, 4, 66, 95);
                break;
            case "Booker":
                player = new Player(trainer, 30000, 4, 56, 300);
                break;
            case "Afa":
                player = new Player(trainer, 1500, 4, 79, 25);
                break;
            case "Brett":
                player = new Player(trainer, 4500, 4, 64, 55);
                break;
            case "Sarah":
                player = new Player(trainer, 35000, 4, 30, 230);
                break;
            case "Serena":
                player = new Player(trainer, 50000, 4, 35, 120);
                break;
            case "Johnny":
                player = new Player(trainer, 65000, 4, 41, 85);
                break;
        }
        // grabs info from html
        let getInfo = document.querySelector(".info");
        getInfo.innerHTML = '<img src="img/player/' + trainer.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + trainer + '</h3><p class="money-player">money:  ' + player.money + '</p><p>experience:  ' + player.experience + '</p><p>age:  ' + player.age + '</p><p>Strength: ' + player.strength + '</p></div>';
    },
    setIdleTrainer: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getStage = document.querySelector(".stage");
        getHeader.innerHTML = '<p>Task: Find opponent!</p> ';
        getActions.innerHTML = '<a href="#" class="btn-idleTrainer" onclick="Game.setTrainer()">Find opponent!</a>';
        getStage.style.visibility = 'visible';
    },
    setTrainer: function () {
        // let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getOpponent = document.querySelector(".opponent");
        // Create opponents
        let opponent0 = new Opponent("rock", 50000, 2, 49, 50);
        let opponent1 = new Opponent("masters", 60000, 2, 39, 100);
        let opponent2 = new Opponent("hunter", 10000, 2, 52, 150);
        let opponent3 = new Opponent("nia", 6000, 2, 37,200);
        let opponent4 = new Opponent("john", 9000, 2, 44, 50);
        let opponent5 = new Opponent("edge", 5500, 2, 48, 100);
        let opponent6 = new Opponent("jon", 2800, 2, 36, 150);
        let opponent7 = new Opponent("cody", 9400, 2, 36, 200);
        let opponent8 = new Opponent("randy", 20000, 2, 41, 50);
        let opponent9 = new Opponent("chris", 3300, 2, 51, 100);
        let chooseRandomOpponent = Math.floor(Math.random() * Math.floor(10));
        let opponent;
        switch (chooseRandomOpponent) {
            case 0:
                opponent = opponent0;
                break;
            case 1:
                opponent = opponent1;
                break;
            case 2:
                opponent = opponent2;
                break;
            case 3:
                opponent = opponent3;
                break;
            case 4:
                opponent = opponent4;
                break;
            case 5:
                opponent = opponent5;
                break;
            case 6:
                opponent = opponent6;
                break;
            case 7:
                opponent = opponent7;
                break;
            case 8:
                opponent = opponent8;
                break;
            case 9:
                opponent = opponent9;
                break;
        }
        // getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = `<a href="#" class="btn-idleTrainer" >Attack!</a>`;
        getOpponent.innerHTML = '<img src="img/opponents/' + opponent.enemies.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + opponent.enemies + '</h3><p class="money-opponent">money:  ' + opponent.money + '</p><p>experience:  ' + opponent.experience + '</p><p>age:  ' + opponent.age + '</p><p>Strength: ' + opponent.strength + '</p></div>';
        let attack = document.querySelector(".btn-idleTrainer");
        attack.addEventListener('click', () => {
            player.calcAttack(opponent.experience, opponent.money);
        })
        console.log(attack);
    }
}
// console.log(chooseRandomOpponent); 