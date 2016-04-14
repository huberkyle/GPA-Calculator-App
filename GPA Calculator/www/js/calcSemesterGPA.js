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
    while (window.counter > i) {
        var creditHours2 = parseFloat(document.getElementById("classCredit" + (i + 1)).value);
        var grade2 = document.getElementById("classGrade" + (i + 1)).value;
            if(grade == 'A') {
                if(credits == 1) {
                    points = 4.0;
                }
                if(credits == 2) {
                    points = 8.0;
                }
                if(credits == 3) {
                    points = 12.0;
                }
                if(credits == 4) {
                    points = 16.0;
                }
                totalPoints = totalPoints + points;
            }
            else if(grade == 'A-') {
                if(credits == 1) {
                    points = 3.7;
                }
                if(credits == 2) {
                    points = 7.4;
                }
                if(credits == 3) {
                    points = 11.1;
                }
                if(credits == 4) {
                    points = 14.8;
                }
                totalPoints = totalPoints + points;
            }
            else if(grade == 'B+') {
                if(credits == 1) {
                    points = 3.3;
                }
                if(credits == 2) {
                    points = 6.6;
                }
                if(credits == 3) {
                    points = 9.9;
                }
                if(credits == 4) {
                    points = 13.2;
                }
                totalPoints = totalPoints + points;
            }
            else if(grade == 'B') {
                if(credits == 1) {
                    points = 3.0;
                }
                if(credits == 2) {
                    points = 6.0;
                }
                if(credits == 3) {
                    points = 9.0;
                }
                if(credits == 4) {
                    points = 12.0;
                }
                totalPoints = totalPoints + points;
            }
            else if(grade == 'B-') {
                if(credits == 1) {
                    points = 2.7;
                }
                if(credits == 2) {
                    points = 5.4;
                }
                if(credits == 3) {
                    points = 8.1;
                }
                if(credits == 4) {
                    points = 10.8;
                }
                totalPoints = totalPoints + points;
            }
            else if(grade == 'C+') {
                if(credits == 1) {
                    points = 4.6;
                }
                if(credits == 2) {
                    points = 4.0;
                }
                if(credits == 3) {
                    points = 6.9;
                }
                if(credits == 4) {
                    points = 9.2;
                }
                totalPoints = totalPoints + points;
            }
            else if(grade == 'C') {
                if(credits == 1) {
                    points = 2.0;
                }
                if(credits == 2) {
                    points = 4.0;
                }
                if(credits == 3) {
                    points = 6.0;
                }
                if(credits == 4) {
                    points = 8.0;
                }
                totalPoints = totalPoints + points;
            }
            else if(grade == 'C-') {
                if(credits == 1) {
                    points = 1.7;
                }
                if(credits == 2) {
                    points = 3.4;
                }
                if(credits == 3) {
                    points = 5.1;
                }
                if(credits == 4) {
                    points = 6.8;
                }
                totalPoints = totalPoints + points;
            }
            else if(grade == 'D+') {
                if(credits == 1) {
                    points = 1.3;
                }
                if(credits == 2) {
                    points = 2.6;
                }
                if(credits == 3) {
                    points = 3.9;
                }
                if(credits == 4) {
                    points = 5.2;
                }
                totalPoints = totalPoints + points;
            }
            else if(grade == 'D') {
                if(credits == 1) {
                    points = 1.0;
                }
                if(credits == 2) {
                    points = 2.0;
                }
                if(credits == 3) {
                    points = 3.0;
                }
                if(credits == 4) {
                    points = 4.0;
                }
                totalPoints = totalPoints + points;
            }
            else if(grade == 'F') {
                if(credits == 1) {
                    points = 0.0;
                }
                if(credits == 2) {
                    points = 0.0;
                }
                if(credits == 3) {
                    points = 0.0;
                }
                if(credits == 4) {
                    points = 0.0;
                }
                totalPoints = totalPoints + points;
            }
            else {
                window.alert('Could not calculate. Please enter valid letter grades.');
            }
        totalCredits = creditHours + creditHours2;
        semesterGPA = totalPoints/totalCredits;
        outputDiv2.innerHTML = 'Your semester GPA is ' + semesterGPA + '.';
    }
}
