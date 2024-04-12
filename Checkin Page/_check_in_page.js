document.getElementById('affiliation').addEventListener('change', function() {
    var conditionalInput1or2 = document.getElementById('SDSURedID');
    var conditionalInput3 = document.getElementById('InputEmail');
    var selectedOption = this.value;
    
    // Hide all conditional inputs initially
    conditionalInput1or2.style.display = 'none';
    conditionalInput3.style.display = 'none';

    if (selectedOption === '1' || selectedOption === '2') {
        conditionalInput1or2.style.display = 'block';
    } else {
        conditionalInput3.style.display = 'block';
    }
});

// Get the current year
var currentYear = new Date().getFullYear();

// Update the content of the currentYear span element
document.getElementById("currentYear").textContent = currentYear;