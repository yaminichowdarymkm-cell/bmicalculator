function calculateBMI() {

    // Get input values
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    let result = document.getElementById("result");
    let bmiValue = document.getElementById("bmiValue");
    let bmiCategory = document.getElementById("bmiCategory");

    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.style.display = "block";
        bmiValue.textContent = "Invalid Input";
        bmiCategory.textContent = "Please enter valid weight and height.";
        bmiCategory.className = "error";
        return;
    }

    // Convert height from centimeters to meters
    let heightInMeters = height / 100;

    // BMI Formula
    let bmi = weight / (heightInMeters * heightInMeters);

    // Display BMI
    bmiValue.textContent = "BMI: " + bmi.toFixed(2);

    // Remove previous category classes
    bmiCategory.className = "";

    // Determine BMI category
    if (bmi < 18.5) {
        bmiCategory.textContent = "Underweight";
        bmiCategory.classList.add("underweight");

    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory.textContent = "Normal Weight";
        bmiCategory.classList.add("normal");

    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory.textContent = "Overweight";
        bmiCategory.classList.add("overweight");

    } else {
        bmiCategory.textContent = "Obese";
        bmiCategory.classList.add("obese");
    }

    // Show result
    result.style.display = "block";
}
