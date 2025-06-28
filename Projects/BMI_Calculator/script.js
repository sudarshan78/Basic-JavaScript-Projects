const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#Height").value)
    const weight = parseInt(document.querySelector("#Weight").value)
    const result = document.querySelector("#result")
    const weightRange = document.querySelector("#weight-range")

    if(height === '' || height <= 0 || isNaN(height)){
        result.textContent =  `Please Enter valid Height ${height}`;
        console.log(result)
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
         result.textContent =  `Please Enter valid Weight ${weight}`;
    }else{
        var BMI = (weight / ((height * height) / 10000)).toFixed(2);
        result.textContent = `This is Your Claculated Body Mass Index: ${BMI}`;
    }

    if(BMI < 18.6){
            weightRange.textContent = `You are Under Weight`
           console.log(weightRange)
    }else if(BMI >= 18.6 && BMI <= 24.9){
           weightRange.textContent = `You are in Normal Weight Range Weight`
    }else if(BMI > 24.9){
            weightRange.textContent = `You are Over Weight`
    }



})