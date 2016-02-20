/*
addInput.js
By: Kyle, Morgan, Aaron
This pages is the function that adds additional inputs boxes for the number of future semesters that are needed.

Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

// Function that adds additional inputs boxes for the number of future semesters that are needed
function addInput(divName){
     // A student should not need more than 8 semesters in calculating future GPA
     var limit = 8;
	 // If more than the limit of input boxes are added the user is alerted no more can be added
     if (window.counter == limit)  {
          alert("You have reached the limit of adding of semesters that can be added!");
     }
	 // If not at limit, a new element is created that stores each new input box as they are created by the user
     else {
          var newdiv = document.createElement('div');
		  // The name of the input with the number of which additional semester it is, is added  
		  // Creates the new inputs as they are requested
          newdiv.innerHTML = "Additional Planned Semester " + (window.counter) + ":" + " <input class='form-control' type='number' min='0' id='creditsTakenBox" + (window.counter + 1) + "' value='0'><br>";
          document.getElementById(divName).appendChild(newdiv);
          window.counter++;
     }
}