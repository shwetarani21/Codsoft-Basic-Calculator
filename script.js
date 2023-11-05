let display = document.getElementById('display');

function appendToDisplay(value) {
  if (display.innerText === '0' && value !== '.' && value !== 'C') {
    display.innerText = '';
  }

  if (value === 'C') {
    display.innerText = '0';
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = 'Error';
  }
}
