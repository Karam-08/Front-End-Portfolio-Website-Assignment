$("#contact").on('submit', function(e){
    e.preventDefault(); // Prevents the default action of submitting the form

    const name = $('#name').val();
    const email = $('#email').val();
    const phone = $('#number').val();
    const message = $('#message').val();

    $("#output").html(
        `<h3>Message Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>`
    )
})