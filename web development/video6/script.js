document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form values
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;
    const bunkReason = document.getElementById('bunkReason').value;

    // Here you would typically send this data to a server
    // For this example, we will just display the information
    
    if (bunkReason.trim() === '') {
        alert('Please provide a reason for your absence.');
        return; // Stop the function if the reason is empty
    }

    // Display a confirmation message
    const message = `
        Submission successful!
        Student ID: ${studentId}
        Reason for Absence: ${bunkReason}
    `;

    alert(message);

    // You can uncomment the line below to reset the form after submission
    // event.target.reset();
});