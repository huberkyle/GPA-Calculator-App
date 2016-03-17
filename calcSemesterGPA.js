/*
calcSemesterGPA.js
By: Kyle, Morgan, Aaron
This page runs the semester GPA calculations from letter grades to GPA.

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
// Takes letter grades of classes and outputs the GPA calculated the letter grades
var totalPoints = 0;
 var totalCredits = 0;
 var points;
 var classgrade1 = document.getElementById('classGrade1');
 var classgrade2 = document.getElementById('classGrade2');
 var classgrade3 = document.getElementById('classGrade3');
 var classgrade4 = document.getElementById('classGrade4');
 var classgrade5 = document.getElementById('classGrade5');
 var classgrade6 = document.getElementById('classGrade6');
 
 function switchToNumber()
 {
     // for 3 credit hours
     var input = parseFloat(document.getElementsByClassName('classGrade1').value);
     // get input
     switch(input) {
         case 0:
             if (input = "A") {
                 points = 12.0;
             }
             break;
         case 1:
             if (input = "A-") {
                 points = 11.1;
             }
             break;
         case 2:
             if (input = "B+") {
                 points = 9.9;
             }
             break;
         case 3:
             if (input = "B") {
                 points = 9.0;
             }
             break;
         case 4:
             if (input = "B-") {
                 points = 8.1;
             }
             break;
         case 5:
             if (input = "C+") {
                 points = 6.9;
             }
             break;
         case 6:
             if (input = "C") {
                 points = 6.0;
             }
             break;
         case 7:
             if (input = "C-") {
                 points = 5.1;
             }
             break;
         case 8:
             if (input = "D+") {
                 points = 3.9;
             }
             break;
         case 9:
             if (input = "D") {
                 points = 3.0;
            }
             break;
         case 10:
             if (input = "F") {
                 points = 0.0;
             }
             break;
        default:
             // alert to enter a letter grade
             break;
     }
 }

 function switchToNumber()
 {
     // for 3 credit hours
     var input = parseFloat(document.getElementsByClassName('classGrade2').value);
     // get input
     switch(input) {
         case 0:
             if (input = "A") {
                 points = 12.0;
             }
             break;
         case 1:
             if (input = "A-") {
                 points = 11.1;
             }
             break;
         case 2:
             if (input = "B+") {
                 points = 9.9;
             }
             break;
         case 3:
             if (input = "B") {
                 points = 9.0;
             }
             break;
         case 4:
             if (input = "B-") {
                 points = 8.1;
             }
             break;
         case 5:
             if (input = "C+") {
                 points = 6.9;
             }
             break;
         case 6:
             if (input = "C") {
                 points = 6.0;
             }
             break;
         case 7:
             if (input = "C-") {
                 points = 5.1;
             }
             break;
         case 8:
             if (input = "D+") {
                 points = 3.9;
             }
             break;
         case 9:
             if (input = "D") {
                 points = 3.0;
            }
             break;
         case 10:
             if (input = "F") {
                 points = 0.0;
             }
             break;
        default:
             // alert to enter a letter grade
             break;
     }
 }

 function switchToNumber()
 {
     // for 3 credit hours
     var input = parseFloat(document.getElementsByClassName('classGrade3').value);
     // get input
     switch(input) {
         case 0:
             if (input = "A") {
                 points = 12.0;
             }
             break;
         case 1:
             if (input = "A-") {
                 points = 11.1;
             }
             break;
         case 2:
             if (input = "B+") {
                 points = 9.9;
             }
             break;
         case 3:
             if (input = "B") {
                 points = 9.0;
             }
             break;
         case 4:
             if (input = "B-") {
                 points = 8.1;
             }
             break;
         case 5:
             if (input = "C+") {
                 points = 6.9;
             }
             break;
         case 6:
             if (input = "C") {
                 points = 6.0;
             }
             break;
         case 7:
             if (input = "C-") {
                 points = 5.1;
             }
             break;
         case 8:
             if (input = "D+") {
                 points = 3.9;
             }
             break;
         case 9:
             if (input = "D") {
                 points = 3.0;
            }
             break;
         case 10:
             if (input = "F") {
                 points = 0.0;
             }
             break;
        default:
             // alert to enter a letter grade
             break;
     }
 }

 function switchToNumber()
 {
     // for 3 credit hours
     var input = parseFloat(document.getElementsByClassName('classGrade4').value);
     // get input
     switch(input) {
         case 0:
             if (input = "A") {
                 points = 12.0;
             }
             break;
         case 1:
             if (input = "A-") {
                 points = 11.1;
             }
             break;
         case 2:
             if (input = "B+") {
                 points = 9.9;
             }
             break;
         case 3:
             if (input = "B") {
                 points = 9.0;
             }
             break;
         case 4:
             if (input = "B-") {
                 points = 8.1;
             }
             break;
         case 5:
             if (input = "C+") {
                 points = 6.9;
             }
             break;
         case 6:
             if (input = "C") {
                 points = 6.0;
             }
             break;
         case 7:
             if (input = "C-") {
                 points = 5.1;
             }
             break;
         case 8:
             if (input = "D+") {
                 points = 3.9;
             }
             break;
         case 9:
             if (input = "D") {
                 points = 3.0;
            }
             break;
         case 10:
             if (input = "F") {
                 points = 0.0;
             }
             break;
        default:
             // alert to enter a letter grade
             break;
     }
 }

 function switchToNumber()
 {
     // for 3 credit hours
     var input = parseFloat(document.getElementsByClassName('classGrade5').value);
     // get input
     switch(input) {
         case 0:
             if (input = "A") {
                 points = 12.0;
             }
             break;
         case 1:
             if (input = "A-") {
                 points = 11.1;
             }
             break;
         case 2:
             if (input = "B+") {
                 points = 9.9;
             }
             break;
         case 3:
             if (input = "B") {
                 points = 9.0;
             }
             break;
         case 4:
             if (input = "B-") {
                 points = 8.1;
             }
             break;
         case 5:
             if (input = "C+") {
                 points = 6.9;
             }
             break;
         case 6:
             if (input = "C") {
                 points = 6.0;
             }
             break;
         case 7:
             if (input = "C-") {
                 points = 5.1;
             }
             break;
         case 8:
             if (input = "D+") {
                 points = 3.9;
             }
             break;
         case 9:
             if (input = "D") {
                 points = 3.0;
            }
             break;
         case 10:
             if (input = "F") {
                 points = 0.0;
             }
             break;
        default:
             // alert to enter a letter grade
             break;
     }
 }

 function switchToNumber()
 {
     // for 3 credit hours
     var input = parseFloat(document.getElementsByClassName('classGrade6').value);
     // get input
     switch(input) {
         case 0:
             if (input = "A") {
                 points = 12.0;
             }
             break;
         case 1:
             if (input = "A-") {
                 points = 11.1;
             }
             break;
         case 2:
             if (input = "B+") {
                 points = 9.9;
             }
             break;
         case 3:
             if (input = "B") {
                 points = 9.0;
             }
             break;
         case 4:
             if (input = "B-") {
                 points = 8.1;
             }
             break;
         case 5:
             if (input = "C+") {
                 points = 6.9;
             }
             break;
         case 6:
             if (input = "C") {
                 points = 6.0;
             }
             break;
         case 7:
             if (input = "C-") {
                 points = 5.1;
             }
             break;
         case 8:
             if (input = "D+") {
                 points = 3.9;
             }
             break;
         case 9:
             if (input = "D") {
                 points = 3.0;
            }
             break;
         case 10:
             if (input = "F") {
                 points = 0.0;
             }
             break;
        default:
             // alert to enter a letter grade
             break;
     }
 }

 function calcPoints() {
     switchToNumber();
     totalPoints = totalPoints + points;
     totalCredits = totalCredits + 3;
 }
 
 function calcSemesterGPA() {
     calcPoints(classgrade1);
     calcPoints(classgrade2);
     calcPoints(classgrade3);
     calcPoints(classgrade4);
     calcPoints(classgrade5);
     calcPoints(classgrade6);
     var semesterGPA = totalPoints/totalCredits;
     outputDiv1.innerHTML = 'Your semester GPA is ' + semesterGPA + '.';
 }