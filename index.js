"use strict";

class Character {
  constructor(attack, health, color) {
    this.attackPower = attack;
    this.healthPower = health;
    this.color = color
  }

  attack(opponent) {
    if (Math.random() > 0.5) {opponent.healthPower -= this.attackPower}
  }
  static battle (char1, char2){
    let battle = true;
    let first = char1;
    let second = char2;

    while(battle) {
      first.attack(second);

      if(second.healthPower <= 0) {battle = false}
      else {
        let hold = first;
        first = second;
        second = hold;
      }
    }

    let winner = first.healthPower > 0 ? first : second;
    return `The winner is ${winner.color}`
  }

  static battleNumTimes (num, char1, char2){
    let winner;
    let count = 0;
    let arr = [];

    while(count++ < num) {
      winner = this.battle(char1, char2);
      arr.push({ winner })
      char1.healthPower = 100;
      char2.healthPower = 100;
    }
    return arr;
  }
}


const red = new Character(5, 100, 'r');
const blue = new Character(5, 100, 'b')

let arr = [10, red, blue];
console.log(Character.battleNumTimes(...arr))




// let winnerArr = ['red', 'red', 'blue', 'blue', 'red'];

// winnerArr = winnerArr.map((item) => {
//   return {winner: item}
// })


// let foo = 'bar';
// console.log(foo);


//   let fn = function(me, you, adjective){
//     console.log(me, you, adjective)
//   }

// let you = 'chloe';
// let adjective  ='cool';

// fn`Hi ${you}, you're ${adjective}`
