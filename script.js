var actualOTP = generateOTP();

function generateOTP() {
  // Generate a random 6-digit OTP
  var otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

function generateNewOTP() {
  actualOTP = generateOTP();
  alert("OTP generated: " + actualOTP);
}

function validateOTP() {
  var otpInput = document.getElementById('otpInput');
  var message = document.getElementById('message');

  var enteredOTP = otpInput.value;

  if (enteredOTP === actualOTP) {
    message.style.color = 'green';
    message.textContent = 'OTP is valid.';
  } else {
    message.style.color = 'red';
    message.textContent = 'Invalid OTP. Please try again.';
  }
}
