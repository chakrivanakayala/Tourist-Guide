
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('userType').value;

        // You can implement authentication logic here
        // For simplicity, let's assume a successful login
        console.log('Login successful');
        let userTypeText = '';
        if (userType === 'user') {
            userTypeText = 'User';
        } else if (userType === 'guide') {
            userTypeText = 'Guide';
        }
        alert('Welcome back, ' + userTypeText + ' ' + username + '!');
        loginForm.reset(); // Clear form inputs
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate password match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Create user object (you can send it to the server for further processing)
        const user = {
            username: username,
            email: email,
            password: password
        };

        console.log('New user:', user);
        alert('Account created successfully');
        signupForm.reset(); // Clear form inputs
    });
});

