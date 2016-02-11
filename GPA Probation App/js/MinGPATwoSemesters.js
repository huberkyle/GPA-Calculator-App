     function MinGPATwoSemesters()
     // Assumes: Input boxes have valid numerical values;
	 //          outputDiv is available for output
     // Results: Calculates GPA needed to bring up to minimum levels in two semesters.
	 // From Angela Bailey's email:
	 //   Use the following symbols to denote student information:
	 //
	 //     E = Credits Earned
	 //     T = Credits being taken during semester on Academic Probation
	 //     N = Credits begin taken in the semester following Academic Probation
	 //     C = current GPA
	 //
	 // Calculates:
	 //     M_2  = minimum GPA needed in current semester to bring GPA up to goal GPA (e.g., 2.75) in two semesters.
     // via
	 //     M_2 = (Goal_GPA * (E+T+N) - C*E)/(T+N)
     //
	 // Example: 30 credits earned, 15 credits this semester, 15 credits next semester, & GPA 2.6 =
     //   2.9 GPA average over the two semesters (for goal GPA of 2.75)
     {
       goalGPA = parseFloat(document.getElementById("achieveGpa").value);
       var creditsEarned = parseFloat(creditsEarned2Box.value);
       var creditsTaken = parseFloat(creditsTaken2Box.value);
       var creditsTakenFollowing = parseFloat(creditsTakenFollowing2Box.value);
       var gpa = parseFloat(gpa2Box.value);
	   var m2 = (window.goalGPA * (creditsEarned + creditsTaken + creditsTakenFollowing)
				- gpa * creditsEarned)/(creditsTaken + creditsTakenFollowing);
	   // Round to two decimal places.
	   m2 =  Math.round(m2 * window.rounding2places) / window.rounding2places;
       outputDiv2.innerHTML =
         'minimum GPA needed in next two semesters to bring GPA up to ' + window.goalGPA + ' = ' + m2 + '<br >';
     }