$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        var firstName = $('#first-name').val();
        var lastName = $('#last-name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var termsChecked = $('#terms').is(':checked');

        // Basic validation
        if(firstName === '' || lastName === '' || email === '' ||  !termsChecked) {
            alert('All fields are required and you must agree to the terms and conditions.');
            return;
        }

        // Placeholder for AJAX request (assuming server-side processing)
        $.ajax({
            url: 'path/to/your/server/script', // Replace with your server URL
            type: 'POST',
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                
            },
            success: function(response) {
                // Handle successful response
                alert('Your response has been sent successfully.');
                $('#contactForm')[0].reset();
            },
            error: function(error) {
                // Handle error response
                alert('There was an error sending your message. Please try again later.');
            }
        });
    });
});
