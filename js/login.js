// 01. add click event handler
document.getElementById("button-submit").addEventListener('click', function(){
   // 02. Get the email input field
   // always use .value to get text from a input field
   const emailField = document.getElementById("user-email");
   const email = emailField.value;

   // 03 get the password input field
   passwordField = document.getElementById("user-password");
   password = passwordField.value;   


   // dont verify on the client site

   // step 4
   if (email === 'son.com' && password === 'secret'){
      window.location.href = 'bank.html'
   } else {
      alert('invalid User');
   }
});