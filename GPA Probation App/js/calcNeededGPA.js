   /*
   calcNeededGPA.js
   By: Kyle, Morgan, Aaron
   This page runs the Desired GPA Calculations
   
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
   function calcNeededGPA()
       // Assumes: outputDiv is available for output
       // Results: Calculates GPA needed to bring up to minimum levels in one semester.
       // From Angela Bailey's email:
       //   Use the following symbols to denote student information:
       //
       //     E = Credits Earned
       //     T = Credits being taken during semester on Academic Probation
       //     N = Credits begin taken in the semester following Academic Probation
       //     C = current GPA
       //
       // Calculates:
       //     M_1  = minimum GPA needed in current semester to bring GPA up to goal GPA (e.g., 2.75) in one semester.
       // via
       //     M_1=(Goal_GPA*(E+T)-C*E)/T
       //
       // Example: 30 credits earned, 15 credits this semester, & GPA 2.6 = 3.05 GPA for this semester (for goal GPA of 2.75)
   {
       // constant for the targeted GPA
       var goalGPA = 2.75;
       var rounding2places = 100;
       // Pulls values form inputs areas and places them in variables
       goalGPA = parseFloat(document.getElementById("achieveGpa").value);
       var creditsEarned = parseFloat(document.getElementById("creditsEarnedBox").value);
       var creditsTaken = parseFloat(document.getElementById("creditsTakenBox").value);
       var replacementCredits = parseFloat(document.getElementById("replacementCredits").value);
       var previousGPAReplacement = parseFloat(document.getElementById("previousGPAReplacement").value);
       var i = 1;
       // Adds together the number of planned nursing credits from each of the semester input areas added 
       while (window.counter > i) {
           var creditsTaken2 = parseFloat(document.getElementById("creditsTakenBox" + (i + 1)).value);
           creditsTaken = creditsTaken + creditsTaken2;
           i = i + 1;
       }
       var gpa = parseFloat(document.getElementById("gpaBox").value);

       gpa = (((creditsEarned + creditsTaken) * gpa) - (replacementCredits * previousGPAReplacement)) / (creditsEarned + creditsTaken - replacementCredits);
       creditsEarned = creditsEarned - replacementCredits;
       creditsTaken = creditsEarned + replacementCredits;
       // Calculates the needed GPA to obtain desired GPA
       var m1 = (goalGPA * (creditsEarned + creditsTaken) - gpa * creditsEarned) / creditsTaken;
       // Round to two decimal places.
       m1 = Math.round(m1 * rounding2places) / rounding2places;
       // If not possible to reach desired GPA the user is told so
       if ((m1 > 4) || (isNaN(m1))) {
           outputDiv1.innerHTML = 'Not possible to reach ' + goalGPA + ' GPA with given information!';
       }
           // If possible to reach desired GPA, the desired GPA is shown along with what GPA in the future semester is needed to each desired GPA
       else {
           outputDiv1.innerHTML = goalGPA + ' GPA possible! Minimum GPA needed in next semester to bring GPA up to ' + goalGPA + ' = <kbd>' + m1 + '</kbd><br >';
       }
   }