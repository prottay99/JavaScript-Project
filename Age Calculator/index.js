function calcAge() {

    // get the values from input field
    let dobInput = document.getElementById('inputDob').value;
    let currentDateInput = document.getElementById('currentDate').value;

    // Validate if both dates are provided
    if (!dobInput || !currentDateInput) {
        alert('Input field is empty!!');
        return;
    }

    // Convert input values to Date objects
    let DOB = new Date(dobInput)
    let cdate = new Date(currentDateInput)

    // Calculate the year month and day
    let years = cdate.getFullYear() - DOB.getFullYear();
    let months = cdate.getMonth() - DOB.getMonth();
    let days = cdate.getDate() - DOB.getDate()

    // Adjust year and month if the birthday hasn't occurred yet this year or this month
    if (days < 0) {
        months--;
    }
    if (months < 0) {
        years--;
        months += 12
    }

    // display the results
    document.getElementById('current__age').textContent = `Your age is ${years} years ${months} months ${days} days`;
}