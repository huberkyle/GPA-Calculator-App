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
var i;
var semesterGPA = 0.00;

var grade1 = document.getElementById('classGrade1').value;
var grade2 = document.getElementById('classGrade2').value;
var grade3 = document.getElementById('classGrade3').value;
var grade4 = document.getElementById('classGrade4').value;
var grade5 = document.getElementById('classGrade5').value;
var grade6 = document.getElementById('classGrade6').value;

var creditHours1 = parseFloat(document.getElementById('class1Credit').value);
var creditHours2 = parseFloat(document.getElementById('class2Credit').value);
var creditHours3 = parseFloat(document.getElementById('class3Credit').value);
var creditHours4 = parseFloat(document.getElementById('class4Credit').value);
var creditHours5 = parseFloat(document.getElementById('class5Credit').value);
var creditHours6 = parseFloat(document.getElementById('class6Credit').value);

    for (i = 0; i < 10; ++i) {
        if(creditHours1 == 1
            || creditHours2 == 1
            || creditHours3 == 1
            || creditHours4 == 1
            || creditHours5 == 1
            || creditHours6 == 1) {
            if(grade1 == 'A'
                || grade2 == 'A'
                || grade3 == 'A'
                || grade4 == 'A'
                || grade5 == 'A'
                || grade6 == 'A') {
                points = 4.0;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'A-'
                || grade2 == 'A-'
                || grade3 == 'A-'
                || grade4 == 'A-'
                || grade5 == 'A-'
                || grade6 == 'A-') {
                points = 3.7;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'B+'
                || grade2 == 'B+'
                || grade3 == 'B+'
                || grade4 == 'B+'
                || grade5 == 'B+'
                || grade6 == 'B+') {
                points = 3.3;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'B'
                || grade2 == 'B'
                || grade3 == 'B'
                || grade4 == 'B'
                || grade5 == 'B'
                || grade6 == 'B') {
                points = 3.0;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'B-'
                || grade2 == 'B-'
                || grade3 == 'B-'
                || grade4 == 'B-'
                || grade5 == 'B-'
                || grade6 == 'B-') {
                points = 2.7;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'C+'
                || grade2 == 'C+'
                || grade3 == 'C+'
                || grade4 == 'C+'
                || grade5 == 'C+'
                || grade6 == 'C+') {
                points = 2.3;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'C'
                || grade2 == 'C'
                || grade3 == 'C'
                || grade4 == 'C'
                || grade5 == 'C'
                || grade6 == 'C') {
                points = 2.0;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'C-'
                || grade2 == 'C-'
                || grade3 == 'C-'
                || grade4 == 'C-'
                || grade5 == 'C-'
                || grade6 == 'C-') {
                points = 1.7;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'D+'
                || grade2 == 'D+'
                || grade3 == 'D+'
                || grade4 == 'D+'
                || grade5 == 'D+'
                || grade6 == 'D+') {
                points = 1.3;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'D'
                || grade2 == 'D'
                || grade3 == 'D'
                || grade4 == 'D'
                || grade5 == 'D'
                || grade6 == 'D') {
                points = 1.0;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'F'
                || grade2 == 'F'
                || grade3 == 'F'
                || grade4 == 'F'
                || grade5 == 'F'
                || grade6 == 'F') {
                points = 0.0;
                totalPoints = totalPoints + points;
            }
            else {
                window.alert('For 1 credit hours: Could not calculate. Please enter valid letter grades.');
            }
            credits = 1;
            totalCredits = totalCredits + credits;
        }
        else if(creditHours1 == 2
            || creditHours2 == 2
            || creditHours3 == 2
            || creditHours4 == 2
            || creditHours5 == 2
            || creditHours6 == 2) {
            if(grade1 == 'A'
                || grade2 == 'A'
                || grade3 == 'A'
                || grade4 == 'A'
                || grade5 == 'A'
                || grade6 == 'A') {
                points = 8.0;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'A-'
                || grade2 == 'A-'
                || grade3 == 'A-'
                || grade4 == 'A-'
                || grade5 == 'A-'
                || grade6 == 'A-') {
                points = 7.4;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'B+'
                || grade2 == 'B+'
                || grade3 == 'B+'
                || grade4 == 'B+'
                || grade5 == 'B+'
                || grade6 == 'B+') {
                points = 6.6;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'B'
                || grade2 == 'B'
                || grade3 == 'B'
                || grade4 == 'B'
                || grade5 == 'B'
                || grade6 == 'B') {
                points = 6.0;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'B-'
                || grade2 == 'B-'
                || grade3 == 'B-'
                || grade4 == 'B-'
                || grade5 == 'B-'
                || grade6 == 'B-') {
                points = 5.4;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'C+'
                || grade2 == 'C+'
                || grade3 == 'C+'
                || grade4 == 'C+'
                || grade5 == 'C+'
                || grade6 == 'C+') {
                points = 4.6;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'C'
                || grade2 == 'C'
                || grade3 == 'C'
                || grade4 == 'C'
                || grade5 == 'C'
                || grade6 == 'C') {
                points = 4.0;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'C-'
                || grade2 == 'C-'
                || grade3 == 'C-'
                || grade4 == 'C-'
                || grade5 == 'C-'
                || grade6 == 'C-') {
                points = 3.4;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'D+'
                || grade2 == 'D+'
                || grade3 == 'D+'
                || grade4 == 'D+'
                || grade5 == 'D+'
                || grade6 == 'D+') {
                points = 2.6;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'D'
                || grade2 == 'D'
                || grade3 == 'D'
                || grade4 == 'D'
                || grade5 == 'D'
                || grade6 == 'D') {
                points = 2.0;
                totalPoints = totalPoints + points;
            }
            else if(grade1 == 'F'
                || grade2 == 'F'
                || grade3 == 'F'
                || grade4 == 'F'
                || grade5 == 'F'
                || grade6 == 'F') {
                points = 0.0;
                totalPoints = totalPoints + points;
            }
            else {
                window.alert('For 2 credit hours: Could not calculate. Please enter valid letter grades.');
            }
            credits = 2;
            totalCredits = totalCredits + credits;
        }
        else if(creditHours1 == 3
            || creditHours2 == 3
            || creditHours3 == 3
            || creditHours4 == 3
            || creditHours5 == 3
            || creditHours6 == 3) {
            window.alert('If credit hours are equal to 3.');
            if(grade1 == 'A'
                || grade2 == 'A'
                || grade3 == 'A'
                || grade4 == 'A'
                || grade5 == 'A'
                || grade6 == 'A') {
                points = 12.0;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an A are: ' + points + '.');
            }
            else if(grade1 == 'A-'
                || grade2 == 'A-'
                || grade3 == 'A-'
                || grade4 == 'A-'
                || grade5 == 'A-'
                || grade6 == 'A-') {
                points = 11.1;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an A- are: ' + points + '.');
            }
            else if(grade1 == 'B+'
                || grade2 == 'B+'
                || grade3 == 'B+'
                || grade4 == 'B+'
                || grade5 == 'B+'
                || grade6 == 'B+') {
                points = 9.9;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an B+ are: ' + points + '.');
            }
            else if(grade1 == 'B'
                || grade2 == 'B'
                || grade3 == 'B'
                || grade4 == 'B'
                || grade5 == 'B'
                || grade6 == 'B') {
                points = 9.0;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an B are: ' + points + '.');
            }
            else if(grade1 == 'B-'
                || grade2 == 'B-'
                || grade3 == 'B-'
                || grade4 == 'B-'
                || grade5 == 'B-'
                || grade6 == 'B-') {
                points = 8.1;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an B- are: ' + points + '.');
            }
            else if(grade1 == 'C+'
                || grade2 == 'C+'
                || grade3 == 'C+'
                || grade4 == 'C+'
                || grade5 == 'C+'
                || grade6 == 'C+') {
                points = 6.9;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an C+ are: ' + points + '.');
            }
            else if(grade1 == 'C'
                || grade2 == 'C'
                || grade3 == 'C'
                || grade4 == 'C'
                || grade5 == 'C'
                || grade6 == 'C') {
                points = 6.0;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an C are: ' + points + '.');
            }
            else if(grade1 == 'C-'
                || grade2 == 'C-'
                || grade3 == 'C-'
                || grade4 == 'C-'
                || grade5 == 'C-'
                || grade6 == 'C-') {
                points = 5.1;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an C- are: ' + points + '.');
            }
            else if(grade1 == 'D+'
                || grade2 == 'D+'
                || grade3 == 'D+'
                || grade4 == 'D+'
                || grade5 == 'D+'
                || grade6 == 'D+') {
                points = 3.9;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an D+ are: ' + points + '.');
            }
            else if(grade1 == 'D'
                || grade2 == 'D'
                || grade3 == 'D'
                || grade4 == 'D'
                || grade5 == 'D'
                || grade6 == 'D') {
                points = 3.0;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an D are: ' + points + '.');
            }
            else if(grade1 == 'F'
                || grade2 == 'F'
                || grade3 == 'F'
                || grade4 == 'F'
                || grade5 == 'F'
                || grade6 == 'F') {
                points = 0.0;
                totalPoints = totalPoints + points;
                window.alert('For 3 credit hours: Points for an F are: ' + points + '.');
            }
            else {
                window.alert('For 3 credit hours: Could not calculate. Please enter valid letter grades.');
            }
            credits = 3;
            totalCredits = totalCredits + credits;
        }
        else if(creditHours1 == 4
            || creditHours2 == 4
            || creditHours3 == 4
            || creditHours4 == 4
            || creditHours5 == 4
            || creditHours6 == 4) {
            window.alert('If credit hours are equal to 4.');
            if(grade1 == 'A'
                || grade2 == 'A'
                || grade3 == 'A'
                || grade4 == 'A'
                || grade5 == 'A'
                || grade6 == 'A') {
                points = 16.0;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an A are: ' + points + '.');
            }
            else if(grade1 == 'A-'
                || grade2 == 'A-'
                || grade3 == 'A-'
                || grade4 == 'A-'
                || grade5 == 'A-'
                || grade6 == 'A-') {
                points = 14.8;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an A- are: ' + points + '.');
            }
            else if(grade1 == 'B+'
                || grade2 == 'B+'
                || grade3 == 'B+'
                || grade4 == 'B+'
                || grade5 == 'B+'
                || grade6 == 'B+') {
                points = 13.2;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an B+ are: ' + points + '.');
            }
            else if(grade1 == 'B'
                || grade2 == 'B'
                || grade3 == 'B'
                || grade4 == 'B'
                || grade5 == 'B'
                || grade6 == 'B') {
                points = 12.0;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an B are: ' + points + '.');
            }
            else if(grade1 == 'B-'
                || grade2 == 'B-'
                || grade3 == 'B-'
                || grade4 == 'B-'
                || grade5 == 'B-'
                || grade6 == 'B-') {
                points = 10.8;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an B- are: ' + points + '.');
            }
            else if(grade1 == 'C+'
                || grade2 == 'C+'
                || grade3 == 'C+'
                || grade4 == 'C+'
                || grade5 == 'C+'
                || grade6 == 'C+') {
                points = 9.2;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an C+ are: ' + points + '.');
            }
            else if(grade1 == 'C'
                || grade2 == 'C'
                || grade3 == 'C'
                || grade4 == 'C'
                || grade5 == 'C'
                || grade6 == 'C') {
                points = 8.0;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an C are: ' + points + '.');
            }
            else if(grade1 == 'C-'
                || grade2 == 'C-'
                || grade3 == 'C-'
                || grade4 == 'C-'
                || grade5 == 'C-'
                || grade6 == 'C-') {
                points = 6.8;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an C- are: ' + points + '.');
            }
            else if(grade1 == 'D+'
                || grade2 == 'D+'
                || grade3 == 'D+'
                || grade4 == 'D+'
                || grade5 == 'D+'
                || grade6 == 'D+') {
                points = 5.2;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an D+ are: ' + points + '.');
            }
            else if(grade1 == 'D'
                || grade2 == 'D'
                || grade3 == 'D'
                || grade4 == 'D'
                || grade5 == 'D'
                || grade6 == 'D') {
                points = 4.0;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an D are: ' + points + '.');
            }
            else if(grade1 == 'F'
                || grade2 == 'F'
                || grade3 == 'F'
                || grade4 == 'F'
                || grade5 == 'F'
                || grade6 == 'F') {
                points = 0.0;
                totalPoints = totalPoints + points;
                window.alert('For 4 credit hours: Points for an F are: ' + points + '.');
            }
            else {
                window.alert('For 4 credit hours: Could not calculate. Please enter valid letter grades.');
            }
            credits = 4;
            totalCredits = totalCredits + credits;
        }
        else {
            window.alert('Enter either 1,2,3, or 4 in the credit hours box.');
        }
    }
    semesterGPA = totalPoints/totalCredits;
    outputDiv2.innerHTML = 'Your semester GPA is ' + semesterGPA + '.';
}
