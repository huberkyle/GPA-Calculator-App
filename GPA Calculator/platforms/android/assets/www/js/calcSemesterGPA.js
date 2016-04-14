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
function calcSemesterGPA() {
var totalPoints = 0.0;
var totalCredits = 0;
var points = 0.0;
var credits = 0;
var i = 1;
var j;
var semesterGPA = 0.00;
var grade = document.getElementById('classGrade').value;
var creditHours = parseFloat(document.getElementById('classCredit').value);
//for(i = 0; i < 6; ++i) {
while (window.counter > i) {
    var creditHours2 = parseFloat(document.getElementById("classCredit" + (i + 1)).value);
    var grade2 = document.getElementById("classGrade" + (i + 1)).value;
    for(j = 0; j < window.counter; ++j) {
    if(creditHours == 1) {
        if(grade == 'A') {
            points = 4.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'A-') {
            points = 3.7;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B+') {
            points = 3.3;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B') {
            points = 3.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B-') {
            points = 2.7;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C+') {
            points = 2.3;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C') {
            points = 2.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C-') {
            points = 1.7;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'D+') {
            points = 1.3;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'D') {
            points = 1.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'F') {
            points = 0.0;
            totalPoints = totalPoints + points;
        }
        else {
            window.alert('For 1 credit hours: Could not calculate. Please enter valid letter grades.');
        }
        //credits = 1;
        totalCredits = creditHours + creditHours2;
    }
    else if(creditHours == 2) {
        if(grade == 'A') {
            points = 8.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'A-') {
            points = 7.4;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B+') {
            points = 6.6;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B') {
            points = 6.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B-') {
            points = 5.4;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C+') {
            points = 4.6;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C') {
            points = 4.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C-') {
            points = 3.4;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'D+') {
            points = 2.6;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'D') {
            points = 2.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'F') {
            points = 0.0;
            totalPoints = totalPoints + points;
        }
        else {
            window.alert('For 2 credit hours: Could not calculate. Please enter valid letter grades.');
        }
        //credits = 2;
        totalCredits = creditHours + creditHours2;
    }
    else if(creditHours == 3) {
        if(grade == 'A') {
            points = 12.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'A-') {
            points = 11.1;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B+') {
            points = 9.9;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B') {
            points = 9.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B-') {
            points = 8.1;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C+') {
            points = 6.9;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C') {
            points = 6.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C-') {
            points = 5.1;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'D+') {
            points = 3.9;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'D') {
            points = 3.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'F') {
            points = 0.0;
            totalPoints = totalPoints + points;
        }
        else {
            window.alert('For 3 credit hours: Could not calculate. Please enter valid letter grades.');
        }
        //credits = 3;
        totalCredits = creditHours + creditHours2;
    }
    else if(creditHours == 4) {
        if(grade == 'A') {
            points = 16.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'A-') {
            points = 14.8;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B+') {
            points = 13.2;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B') {
            points = 12.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'B-') {
            points = 10.8;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C+') {
            points = 9.2;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C') {
            points = 8.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'C-') {
            points = 6.8;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'D+') {
            points = 5.2;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'D') {
            points = 4.0;
            totalPoints = totalPoints + points;
        }
        else if(grade == 'F') {
            points = 0.0;
            totalPoints = totalPoints + points;
        }
        else {
            window.alert('For 4 credit hours: Could not calculate. Please enter valid letter grades.');
        }
        //credits = 4;
        totalCredits = creditHours + creditHours2;
    }
    else {
        window.alert('Enter either 1,2,3, or 4 in the credit hours box.');
    }
    ++i;
}
}
semesterGPA = totalPoints/totalCredits;
outputDiv2.innerHTML = 'Your semester GPA is ' + semesterGPA + '.';
}
