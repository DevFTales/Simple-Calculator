function appendChar(char) {
    const display = document.getElementById('display');
    display.value += char;
  }
  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function deleteCharacter() {
    const display = document.getElementById('display');
    const displayValue = display.value;
    display.value = displayValue.slice(0, -1);
  }
  
  function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
  
    if (expression.includes('%')) {
      calculatePercentage();
    } else {
      try {
        const result = eval(expression);
        display.value = result;
      } catch (error) {
        display.value = 'Erro de cálculo';
      }
    }
  }
  
  function calculatePercentage() {
    const display = document.getElementById('display');
    const expression = display.value;
    const parts = expression.split('%');
    
    if (parts.length !== 2) {
      display.value = 'Erro de cálculo';
      return;
    }
    
    const value = parseFloat(parts[0]);
    const percentage = parseFloat(parts[1]);
    
    if (isNaN(value) || isNaN(percentage)) {
      display.value = 'Erro de cálculo';
      return;
    }
    
    const result = (value * percentage) / 100;
    display.value = result;
  }
  
  function validateNumber(event) {
    const key = event.key;
    const isNumber = /[0-9]/.test(key);
    
    if (!isNumber) {
      event.preventDefault();
    }
  }

