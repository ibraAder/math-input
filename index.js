function show_Grade() {
    let score = parseInt(document.getElementById("score").value); // get the input value and convert it to an integer
    let grade;
  
    if (score >= 80 && score <= 100) {
      grade = 'A';
    } else if (score >= 60 && score < 80) {
      grade = 'B';
    } else if (score >= 50 && score < 60) {
      grade = 'C';
    } else if (score >= 45 && score < 50) {
      grade = 'D';
    } else if (score >= 0 && score < 44) {
        grade = 'E';  
    } else {
      grade = 'Invalid grade';
    }
    
    document.getElementById("grade").value = grade; // set the value of the output field
  }
  