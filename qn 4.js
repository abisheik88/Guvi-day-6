var a = userInput[0];
var b = userInput[1];
class Uberprice{
  constructor(kms,price_per_Km){
    this.kms=kms;
    this.price_per_Km=price_per_Km;
  }
  rate(str){
    return str + this.kms*this.price_per_Km
  }
}
var price = new Uberprice(a,b)
var res = price.rate("the price of this uber ride is ")
console.log(res)