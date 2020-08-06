const calculatorBtn = document.getElementById('btn-calculate');

calculatorBtn.addEventListener('click',function(){
  var bmiValue =  bmiCalculator('height','weight');
  
 if(bmiValue != NaN)  document.getElementById('your-bmi').value = bmiValue;
 else  document.getElementById('your-bmi').value ="";

  compBmiValue(bmiValue);

})

function bmiCalculator(heightValue , weightValue){
    const height = praseMe(heightValue);

    const weight = praseMe(weightValue);

    const bmiCalculation = (weight /(height*height)).toFixed(2);
   
    return bmiCalculation;
}

function praseMe(id){
   const value = document.getElementById(id).value;

   const floatValue = parseFloat(value);

   return floatValue;
}
function compBmiValue(bmiValue){
    var btn =  document.getElementById('btn-for-success');

    var text =  document.getElementById('text-for-you');
     if(bmiValue < 18.5){
       btn.style.display = 'block';

       text.style.display = 'block';

       btn.style.backgroundColor = 'grey';

       text.innerText = "You are Under Weighted click grey circle ."+"Your BMI Value "+bmiValue;
       text.style.color = 'gray';
       text.style.fontSize = '19px';
    }
    else if(bmiValue >= 18.5 && bmiValue < 25.0){
       btn.style.display = 'block';

       text.style.display = 'block';

       btn.style.backgroundColor = 'green';

       text.innerText ="You are  Normal or Healthy Weight ."+"Your BMI Value :"+bmiValue;
         
       text.style.color = 'green';
       text.style.fontSize = '19px';
    }
    else if(bmiValue >= 25.0 && bmiValue < 30.0){
       var btn =  document.getElementById('btn-for-success');

       var text =  document.getElementById('text-for-you');

       btn.style.display = 'block';

       text.style.display = 'block';

       btn.style.backgroundColor = 'red';

       text.innerText = "You are OverWeight."+"Your BMI Value "+bmiValue;

       text.style.color = 'red'
       text.style.fontSize = '19px';
    }
}
