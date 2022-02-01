// declared the constructor 
let player;  //global variable to call on 

class Player {
    constructor(trainer, money, experience, age,strength) {
        this.trainer = trainer;
        this.money = money;
        this.experience = experience;
        this.age = age;
        this.strength = strength;
        this.opponent = {};
    }
    calcAttack(opponentExperience, opponentMoney) {
    // who is attacking first?
        this.opponent.experience = opponentExperience;
        this.opponent.money = opponentMoney;
        this.Money ();
    }
     playerAttack() {
        let calcBaseDamage;
        if ( this.money > 0) {
           calcBaseDamage =  this.money *  this.strength / 1000;
           
        } else {
            calcBaseDamage =  this.strength *  this.age / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutPutDamage = calcBaseDamage + offsetDamage;  //damage to opponent
        // Number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(this.age / 10) / 2) + 1;
        let attackValues = [calcOutPutDamage, numberOfHits];
        return attackValues;
    }
    // opponent attacks
     opponentAttack() {
      let calcBaseDamage;
      if (opponent.money > 0) {
         calcBaseDamage = opponent.money * opponent.strength / 1000;
         
      } else {
          calcBaseDamage = opponent.strength * opponent.age / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutPutDamage = calcBaseDamage + offsetDamage;  //damage to opponent
      // Number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(opponent.age / 10) / 2) + 1;
      let attackValues = [calcOutPutDamage, numberOfHits];
      return attackValues;
    }
    // gets player/opponent money
    Money() {
        let getPlayerMoney = document.querySelector(".money-player");
        let getOpponentMoney = document.querySelector(".money-opponent");
        console.log(this.opponent);
        // initate attacks
            let playerAttackValues = this.playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            this.opponent.money = this.opponent.money - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage" + playerAttackValues[1] + " times.");
            if (this.opponent.money <= 0) {
                alert("Congrats you win");
                getPlayerMoney.innerHTML = 'Money: ' + this.money;
                getOpponentMoney.innerHTML = 'Money: ' + this.opponent.money;
            }else {
                getOpponentMoney.innerHTML = 'Money: ' + this.opponent.money;
            }
        }
    }

