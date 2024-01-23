function name(letters) {
  let myStudents = ["Ameer", "Ruby", "Ghydaa", "Fahed", "Gena" , "maria" , "Ameer"];

  for (i = 0; i <= myStudents.length; i++) {
    if (myStudents[i][0] == letters) {
      console.log(
        `this name ${myStudents[i]} is starting with the letter ${letters}`
      );
    } else {
      console.log("sorry your letter is undefined ");
    }
  }
}

name("G");
