function goToBMI() {
    const name = document.getElementById('username').value;
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    localStorage.setItem('userName', name);
    window.location.href = "bmi.html";
  }
  
  window.onload = function () {
    const name = localStorage.getItem('userName');
    if (name && document.getElementById('greeting')) {
      document.getElementById('greeting').innerText = `Hi ${name}!`;
    }
    if (name && document.getElementById('resultAge')) {
      document.getElementById('resultGender').textContent = localStorage.getItem('gender');
      document.getElementById('resultAge').textContent = localStorage.getItem('age') + " years";
      document.getElementById('resultWeight').textContent = localStorage.getItem('weight') + " kg";
      document.getElementById('resultHeight').textContent = localStorage.getItem('height') + " cm";
      document.getElementById('bmiValue').textContent = localStorage.getItem('bmi');
      document.getElementById('bmiCategory').textContent = localStorage.getItem('category');
    }
    const selectedGender = localStorage.getItem('gender');
    if (selectedGender) {
      selectGender(selectedGender);
    }
  };
  
  function selectGender(gender) {
    localStorage.setItem('gender', gender);
  
    const maleBtn = document.getElementById('maleBtn');
    const femaleBtn = document.getElementById('femaleBtn');
  
    if (maleBtn && femaleBtn) {
      maleBtn.classList.remove('active');
      femaleBtn.classList.remove('active');
      if (gender === 'Male') maleBtn.classList.add('active');
      else femaleBtn.classList.add('active');
    }
  }
  
  
  function calculateBMI() {
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
  
    if (!age || !weight || !height) {
      alert("Please fill all fields");
      return false;
    }
  
    const heightMeters = height / 100;
    const bmi = (weight / (heightMeters * heightMeters)).toFixed(1);
  
    let category = "";
    if (bmi < 16) category = "Very severely underweight";
    else if (bmi < 17) category = "Severely underweight";
    else if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal ✅";
    else if (bmi < 30) category = "Overweight";
    else if (bmi < 35) category = "Obese Class I";
    else if (bmi < 40) category = "Obese Class II";
    else category = "Obese Class III";
  
    localStorage.setItem('age', age);
    localStorage.setItem('weight', weight);
    localStorage.setItem('height', height);
    localStorage.setItem('bmi', bmi);
    localStorage.setItem('category', category);
  
    window.location.href = "result.html";
    return false;
  }
  