document.getElementById("bmi-form-submit").addEventListener("click", ()=>{
    console.log("You clicked a button!")
    calculateBMI();
})
function calculateBMI(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const age = document.getElementById("age").value;
   
    let riskDescription = "";
    let heightMeters = height / 100;
    let heightMetersSquared = heightMeters * heightMeters;
    let BMI = weight / heightMetersSquared;
    BMI = Math.round(BMI * 10) / 10;
    console.log(BMI);

    if(BMI < 18.5){
        riskDescription = `This is considered underweight, being underweight can 
        cause a weakened immune system, fragile bones, and chronic tiredness. See our
        diet page for advice on how to increase weight. `;
    }

    else if(BMI >= 18.5 && BMI <= 24.9){
        riskDescription =`This is considered a healthy weight, you're at decreased risk
        of joint and muscle pain, are likely to have a healthy bloodpressure which reduces burden
        on your heart, decreasing the chank of heart attack and stroke. `;
    }

    else if(BMI < 30){
        riskDescription =`This is considered overweight, this puts you at an increased risk
        of heart attack and stroke. `;
    }
    else{
        riskDescription=`This is considered obese. You have a 
        greatly increased risk of type 2 diabetes, heart attack and stroke.`
    }



    document.getElementById("bmi-result-text").textContent = `Your BMI: ${BMI}`;
    document.getElementById("bmi-result-breakdown").textContent = `Your current BMI is
    ${BMI}. ${riskDescription}`;
}

