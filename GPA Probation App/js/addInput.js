// Function that adds additional inputs boxes for the number of future semesters that are needed.
function addInput(divName){
     // A student should not need more than 8 semesters in calculating future GPA
     var limit = 8;
     if (window.counter == limit)  {
          alert("You have reached the limit of adding of semesters that can be added!");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "Planned Nursing Credits " + (window.counter + 1) + ":" + " <input class='form-control' type='number' min='0' id='creditsTakenBox" + (window.counter + 1) + "' value='0'><br>";
          document.getElementById(divName).appendChild(newdiv);
          window.counter++;
     }
}