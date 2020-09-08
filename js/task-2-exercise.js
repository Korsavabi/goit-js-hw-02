'use strict';

const calculateEngravingPrice = function( message, pricePerWord) {
console.log(message.split(' ').length * pricePerWord);
  };

  calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10);// 80
  calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',20 );// 160
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40); // 240
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);// 120
  