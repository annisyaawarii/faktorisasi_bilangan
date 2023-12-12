function factorize() {
    const numberInput = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');
    
    const inputValue = parseInt(numberInput.value);
  
    if (isNaN(inputValue)) {
      resultElement.textContent = 'Masukkan bilangan yang valid.';
      return;
    }
  
    const factors = getFactors(inputValue);
    resultElement.textContent = 'Faktorisasi: ' + factors.join(', ');
  }
  
  function getFactors(number) {
    const factors = [];
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
  
    return factors;
  }
  