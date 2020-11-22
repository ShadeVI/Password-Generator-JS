const MAX_LENGTH = 30;

const inputPassEl = document.querySelector('#password');
const btnEl = document.querySelector('#generate');
const infoEl = document.querySelector('.text-info');
const lengthEl = document.querySelector('#passLength');
const lengthStrengthText = document.querySelector('#lengthStrength');

btnEl.addEventListener('click', generatePassword);

lengthEl.addEventListener('change', e => StrengthChecker(e.target.value));
lengthEl.addEventListener('keyup', e => StrengthChecker(e.target.value));

function StrengthChecker(length){
  checkLength(length);
  if(length > 0 && length < 6){
    lengthStrengthText.textContent = "Weak!";
  } else if (length >= 6 && length < 12) {
    lengthStrengthText.textContent = "Good!";
  } else if (length >= 12 && length < 20){
    lengthStrengthText.textContent = "Very Good!";
  } else if(length >= 20 && length <31) {
    lengthStrengthText.textContent = "Unbreakable!!!!";
  } else {
    lengthStrengthText.textContent = "";
  }
}


// Generate array with values from Unicode
const values = [];
for(i=40; i<91; i++){
  values.push(String.fromCharCode(i));
}
for(i=97; i<123; i++){
  values.push(String.fromCharCode(i));
}

// Check if length is valid (between 1 and 30 and not empty)
function checkLength(length){
  if(length > MAX_LENGTH){
    infoEl.textContent = `Max length ${MAX_LENGTH}`;
    infoEl.classList.remove("hide");
    return false;
  } else if(length === "" || length < 1){
    infoEl.classList.remove("hide");
    infoEl.textContent = "Not a valid length";
    return false;
  } else {
    infoEl.classList.add("hide");
    return true;
  }
}

function generatePassword(){
  const length = lengthEl.value;
  // Math.floor in case input is float
  if(!checkLength(Math.floor(length))){
    return;
  }
 let password = '';
 for(i=0; i<length; i++){
    let index = Math.floor(Math.random()*values.length);
    password += values[index]
 }
 inputPassEl.value = password;
}

