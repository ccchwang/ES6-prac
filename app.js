"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(attack, health, color) {
    _classCallCheck(this, Character);

    this.attackPower = attack;
    this.healthPower = health;
    this.color = color;
  }

  _createClass(Character, [{
    key: 'attack',
    value: function attack(opponent) {
      if (Math.random() > 0.5) {
        opponent.healthPower -= this.attackPower;
      }
    }
  }], [{
    key: 'battle',
    value: function battle(char1, char2) {
      var battle = true;
      var first = char1;
      var second = char2;

      while (battle) {
        first.attack(second);

        if (second.healthPower <= 0) {
          battle = false;
        } else {
          var hold = first;
          first = second;
          second = hold;
        }
      }

      var winner = first.healthPower > 0 ? first : second;
      return 'The winner is ' + winner.color;
    }
  }, {
    key: 'battleNumTimes',
    value: function battleNumTimes(num, char1, char2) {
      var winner = void 0;
      var count = 0;
      var arr = [];

      while (count++ < num) {
        winner = this.battle(char1, char2);
        arr.push({ winner: winner });
        char1.healthPower = 100;
        char2.healthPower = 100;
      }
      return arr;
    }
  }]);

  return Character;
}();

var red = new Character(5, 100, 'r');
var blue = new Character(5, 100, 'b');

var arr = [10, red, blue];
console.log(Character.battleNumTimes.apply(Character, arr));

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
