document.addEventListener('DOMContentLoaded', function() {
    // Sign-Up Form Submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log(`Sign-Up: Username: ${username}, Email: ${email}, Password: ${password}`);
            alert('Sign-Up successful');
            window.location.href = 'signin.html';  // Redirect to Dashboard
        });
    }

    // Sign-In Form Submission
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log(`Sign-In: Email: ${email}, Password: ${password}`);
            alert('Sign-In successful');
            window.location.href = 'dashboard.html';  // Redirect to Dashboard
        });
    }

    // Dashboard Post Display (dummy data)
    const posts = [
        { title: 'Post 1', content: 'Content of post 1' },
        { title: 'Post 2', content: 'Content of post 2' },
        { title: 'Post 3', content: 'Content of post 3' },
    ];

    const postsContainer = document.getElementById('posts');
    if (postsContainer) {
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
            postsContainer.appendChild(postDiv);
        });
    }
});