function submitForm() {
  // Collect form data
  const name = $('#name').val();
  const email = $('#email').val();
  const password = $('#password').val();
  

  // Validate form data
  if (!name || !email || !password) {
      $('#result').html('<p style="color: red;">Please fill in all required fields.</p>');
      return;
  }

  // Display the data as confirmation
  const resultHtml = `
      <h3>Registration Successful</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      
  `;
  $('#result').html(resultHtml);

  // Optional: Send data to a server
  /*
  $.ajax({
      url: '/submit-form', // Replace with your server endpoint
      type: 'POST',
      data: {
          name,
          email,
          password,
          discipline,
          expertise,
          courses,
          notes,
      },
      success: function(response) {
          $('#result').html('<p>Form submitted successfully!</p>');
      },
      error: function() {
          $('#result').html('<p style="color: red;">An error occurred. Please try again.</p>');
      }
  });
  */
}
