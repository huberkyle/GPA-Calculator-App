/*
addClassInput.js
By: Kyle, Morgan, Aaron
This page runs the semester GPA calculations from letter grades to GPA.

Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/
function addClassInput(divName){
     var limit = 7;
     if (window.counter == limit)  {
          alert("You have reached the limit of classes that can be added!");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "Credit Hours " + (window.counter + 1) + ":" + " <input class='form-control' type='number' id='classCredit" + (window.counter + 1) + "' min='1' value='0'>" + "Class Grade "  + (window.counter + 1) + ":" +  " <input class='form-control grade' type='text' id='classGrade" + (window.counter + 1) + "' ><br>";
          document.getElementById(divName).appendChild(newdiv);
          window.counter++;
     }
}
