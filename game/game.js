

let number= Math.floor(Math.random()*100+1)

let count=1;
 console.log( number);

do{
  let useNumber = parseInt(prompt("Give a Number between 1 - 100")) ;

 if (useNumber > number) {
    alert('your number is grater than guess number');
 }else if(useNumber < number){
    alert('your number is less than guess number')
 }else if(useNumber == number){
    alert(`You Win with ${count} attemts`);
    break;
 }
 count ++;
 
 if (count >= 5) {
    alert(`Game Over!`);
    break;
 }


}while(true);


