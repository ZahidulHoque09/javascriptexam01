/* Exam: Java script Exam No 1: 2024-01-30 */

let num = prompt("Its the application of namta 5:");
let namta = +5;
for (let i = 1; i <= 20; i++) {
  /*  console.log(namta + "x" + i + "=" + namta * i); */
  /*  document.write(namta + "x" + i + "=" + namta * i + "<br/>"); */
  /* 
  console.log(`${namta} x ${i} = ${namta * i}`); */

  document.write(`${namta} x ${i} = ${namta * i}  <br/>`);
}

/* if (namta <= 0 && namta <= 18) {
    console.log("You are under age and no need to marry :");
  }
 */
let age = i;
if (namta >= 0 && namta <= 18) {
  document.write("You are under age and no need to marry :");
} else if (namta >= 20 && namta <= 35) {
  document.write(
    "You are ready to marry and you are perfectly aged to marry :"
  );
}
