     function MinGPAOneSemester()
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
       goalGPA = parseFloat(document.getElementById("achieveGpa").value);
       var creditsEarned = parseFloat(document.getElementById("creditsEarnedBox").value);
       var creditsTaken = parseFloat(document.getElementById("creditsTakenBox").value);
       var gpa = parseFloat(document.getElementById("gpaBox").value);
	   
	   var m1 = (window.goalGPA * (creditsEarned+creditsTaken) - gpa * creditsEarned)/creditsTaken;
	   // Round to two decimal places.
	   m1 =  Math.round(m1 * window.rounding2places) / window.rounding2places;
       outputDiv1.innerHTML =
         'minimum GPA needed in next semester to bring GPA up to ' + window.goalGPA + ' = ' + m1 + '<br >';
     }