function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        document.getElementById("result").innerHTML =
            "Please enter weight and height.";
        return;
    }

    // Convert height from cm to meters
    height = height / 100;

    // BMI formula
    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } 
    else if (bmi < 25) {
        category = "Normal weight";
    } 
    else if (bmi < 30) {
        category = "Overweight";
    } 
    else {
        category = "Obese";
    }

    document.getElementById("result").innerHTML =
        "Your BMI is: " + bmi + "<br>Category: " + category;
}