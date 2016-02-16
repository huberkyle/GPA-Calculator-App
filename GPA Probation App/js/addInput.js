var limit = 6;
function counters(countered){
    return countered;
}
function addInput(divName){
     if (window.counter == limit)  {
          alert("You have reached the limit of adding of semesters that can be added!");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "Planned Nursing Credits " + (window.counter + 1) + ":" + " <input class='form-control' type='number' min='0' id='creditsTakenBox" + (window.counter + 1) + "' name='myInputs[]' value='0'><br>";
          //<input type='text' name='buyer" + i + "' id='creditsTakenBox" + i + "'>
          document.getElementById(divName).appendChild(newdiv);
          window.counter++;
     }
}