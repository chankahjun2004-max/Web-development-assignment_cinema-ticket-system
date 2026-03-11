
const namecardInput = document.getElementById('nameCard');
const namecardError = document.getElementById('namecard-error');
namecardInput.addEventListener('input', () => {
  checkNamecardInput();
  
});

const cardnumInput = document.getElementById('cardNum');
const cardnumError = document.getElementById('cardnum-error');
cardnumInput.addEventListener('input', () => {
  checkCardnumInput();
  
});

const cvvInput = document.getElementById('cvv');
const cvvError = document.getElementById('cvv-error');
cvvInput.addEventListener('input', () => {
  checkCvvInput();
  
});


function checkInputs() {
  checkNamecardInput();
  checkCardnumInput();
  checkCvvInput();
}


 function checkNamecardInput(){
    const namecardValue = namecardInput.value;
    const Special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(namecardValue);
    const Numbers = /[0-9]/.test(namecardValue);
            
        if (Special || Numbers) {
            namecardError.innerHTML = 'Name cannot contain number or special characters.';
        } else if (namecardValue === '' || namecardValue === null ) {
          namecardError.innerHTML = 'Please fill this field';
        } else {
            namecardError.innerHTML = '';
        }
    };

 function checkCardnumInput(){
    const cardnumValue = cardnumInput.value;
    const Digits = /^[0-9]{16}$/.test(cardnumValue);
            
        if(!Digits){
            cardnumError.innerHTML = 'Please enter a valid credit card number'
        } else if (cardnumValue === '' || cardnumValue === null ) {
          cardnumError.innerHTML = 'Please fill this field';
        } 
        else {
            cardnumError.innerHTML = '';
        }
};

function checkCvvInput(){
    const cvvValue = cvvInput.value;
    const validThreeDigits = /^[0-9]{3}$/.test(cvvValue);
        
    if (!validThreeDigits) {
        cvvError.innerHTML = 'Invalid Input';
    } else if (cvvValue === '' || cvvValue === null){
      cvvError.innerHTML = 'Please fill this field';
    } else {
        cvvError.innerHTML ='';
    }
};

const payButton = document.getElementById('payNowBtn');
payButton.addEventListener('click', () => {
 
  checkInputs();

  if (!namecardError.innerText && !cardnumError.innerText && !cvvError.innerText) {
    alert('Your transaction is successful!');
    sessionStorage.removeItem('cart');
    localStorage.setItem('nameCard', namecardInput.value);
    localStorage.setItem('cardNum', cardnumInput.value);
    localStorage.setItem('cvv', cvvInput.value);
    namecardInput.value = '';
    cardnumInput.value = '';
    cvvInput.value = '';
  }
});

document.addEventListener('DOMContentLoaded', function() {   
  window.onload = function() {
      displayPaymentDetails();
  };
  
  });
  
  function payNow() {
window.location.href = "receipt.html"
    }