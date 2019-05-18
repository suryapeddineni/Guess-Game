var secreatNumber = 12;

var gussNumber= Number(prompt("Guess the Number in between 0 to 9"));

if(Number(gussNumber) === secreatNumber){

    alert("Your Right..!!");
}
else if (Number(gussNumber) > secreatNumber ){

   alert("Too High,Guss again");
   
}

else{

    alert("Too Low,Guss agin");
}
