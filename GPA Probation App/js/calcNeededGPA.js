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
       var creditsEarned = parseFloat(document.getElementById("creditsEarnedBox").value);
       var creditsTaken = parseFloat(document.getElementById("creditsTakenBox").value);
       var gpa = parseFloat(document.getElementById("gpaBox").value);
	   var m1 = (goalGPA * (creditsEarned+creditsTaken) - gpa * creditsEarned)/creditsTaken;
	   // Round to two decimal places.
	   m1 =  Math.round(m1 * rounding2places) / rounding2places;
       // If not possible to reach desired GPA an alert is sent.
       if (m1 > 4) {
           alert("Not possible to reach " + goalGPA + " GPA with given information!");
       }
       // If possible to reach desired GPA, the desired GPA is shown along with what GPA in the future semester is needed to each desired GPA.
       else {
           outputDiv1.innerHTML = goalGPA + ' GPA possible! Probation is an option. Minimum GPA needed in next semester to bring GPA up to ' + goalGPA + ' = <kbd>' + m1 + '</kbd><br >';
       }
     }