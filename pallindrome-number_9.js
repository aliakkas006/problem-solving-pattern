/* 
 if we divide a number by 10 we get last digit as remainder also get other digit as result.
 -----reversing a number----:
      temp = number;
      rem = temp % 10;
      rev = rev * 10 + rem;
      temp = temp / 10;
*/

const checkPallindrome = (number) =>{
    if(number < 0 || (number % 10 === 0 && number !== 0)){
        console.log("Not Pallindrome!");
        return;
    }

    let temp = number;
    let rev = 0;

    while (temp !== 0) {
      rev = rev * 10 + temp % 10;
      temp = ~~(temp / 10);
    }

    if(rev === number)
        console.log('Pallindrome!');
    else
        console.log('Not Pallindrome!');
}

checkPallindrome(0);