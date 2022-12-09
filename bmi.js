
var height;
var weight;
var age; 

document.getElementById("bmi-form-submit").addEventListener("click", ()=>{
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
    age = document.getElementById("age").value;

    const heightEmpty = !height.trim().length;
    const weightEmpty = !weight.trim().length;
    const ageEmpty = !age.trim().length;
    
    if(heightEmpty || weightEmpty || ageEmpty){
        return;
    }



    calculateBMI();
    calculateWeightInCookies();
    calculateWeightInNeutrons();
    calculateWeightInApples();
})

function calculateBMI(){
    //Calculate BMI 
    let heightMeters = height / 100;
    let heightMetersSquared = heightMeters * heightMeters;
    let BMI = weight / heightMetersSquared;
    BMI = Math.round(BMI * 10) / 10;

    //Update Text in the HTML document
    document.getElementById("bmi-result-text").textContent = `Your BMI: ${BMI}`;
    document.getElementById("bmi-result-breakdown").textContent = `Your current BMI is
    ${BMI}. ${selectDescription(BMI)}`;
}

function selectDescription(BMI){
    let riskDescription = ""
    if(BMI < 18.5){
        riskDescription = `This is considered underweight, being underweight can 
        cause a weakened immune system, fragile bones, and chronic tiredness. See our
        diet page for advice on how to increase weight. `;
        document.getElementById("bmi-result-text").style.color = `red`;
    }

    else if(BMI >= 18.5 && BMI <= 24.9){
        riskDescription =`This is considered a healthy weight, you're at decreased risk
        of joint and muscle pain, are likely to have a healthy blood pressure which reduces burden
        on your heart, decreasing the chance of heart attack and stroke. `;
        document.getElementById("bmi-result-text").style.color = `green`;
    }

    else if(BMI < 30){
        riskDescription =`This is considered overweight, this puts you at an increased risk
        of heart attack and stroke. `;
        document.getElementById("bmi-result-text").style.color = `orange`;
    }
    else{
        riskDescription=`This is considered obese. You have a 
        greatly increased risk of type 2 diabetes, heart attack and stroke.`
        document.getElementById("bmi-result-text").style.color = `red`;
    }
    return riskDescription;
}

function calculateWeightInCookies(){
    const weight = document.getElementById("weight").value;
    const cookieWeight = 0.016;
    let weightInCookies = weight / cookieWeight;
    document.getElementById("weight-in-cookies").textContent = `You Weigh ${weightInCookies} cookies`;
}

function calculateWeightInNeutrons(){
    const weight = document.getElementById("weight").value;
    const neutronWeight = 1.67 * Math.pow(10,-27);
    const weightInNeutrons = weight / neutronWeight;
    document.getElementById("weight-in-neutrons").textContent = `You Weigh ${weightInNeutrons} neutrons`;
}

function calculateWeightInApples(){
    const weight = document.getElementById("weight").value;
    const appleWeight = 0.25;
    const weightInApples = weight / appleWeight;
    document.getElementById("weight-in-apples").textContent = `You Weigh ${weightInApples} apples`;
}