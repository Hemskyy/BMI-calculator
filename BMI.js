function calculateBMI() {
    // Getting user input
    var weightKg = parseFloat(document.getElementById("weight").value);
    var heightCm = parseFloat(document.getElementById("height").value);

    // Converting height from centimeters to meters
    var heightM = heightCm / 100;

    // Calculating BMI
    var bmi = weightKg / (heightM * heightM);

    // Displaing result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your BMI is: " + Math.round(bmi);

    // Interpreting BMI
    var interpretationElement = document.getElementById("interpretation");
    if (bmi < 18.5) {
      interpretationElement.style.color = "blue";
      interpretationElement.innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      interpretationElement.style.color = "green";
      interpretationElement.innerHTML = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      interpretationElement.style.color = "red";
      interpretationElement.innerHTML = "Overweight";
    } else {
      interpretationElement.style.color = "red";
      interpretationElement.innerHTML = "Obesity";
    }
  }