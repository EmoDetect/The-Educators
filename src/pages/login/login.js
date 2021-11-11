const user = localStorage.getItem('user');

const showRegisterForm = () => {
    const loginForm = document.getElementById('login-div');
    const registerForm = document.getElementById('register-div');

    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
};

if (user === 'educator') {
    const registerForm = document.getElementById('register-div');
    const newAccountButton = document.getElementById('new-account');

    const orText = document.getElementById('display-or-text');

    orText.style.display = 'none';
    registerForm.style.display = 'none';
    newAccountButton.style.display = 'none';
} else {
    const registerForm = document.getElementById('register-div');

    registerForm.style.display = 'none';

    const newAccountButton = document.getElementById('new-account');
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        //User is signed in.
        db.collection('users')
            .doc(user.uid)
            .get()
            .then((doc) => {
                if (doc.data().role === 'kid') {
                    window.location.href =
                        '/src/pages/activities-list/activities.html';
                } else {
                    window.location.href =
                        '/src/pages/educator-dashboard/educator-dashboard.html';
                }
            });
    }
});

function login() {
    const userEmail = document.getElementById('email_field').value;
    const userPass = document.getElementById('password_field').value;

    firebase
        .auth()
        .signInWithEmailAndPassword(userEmail, userPass)
        .catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            window.alert('Error : ' + errorMessage);

            // ...
        });
}

function logout() {
    firebase.auth().signOut();
}

// register
const registerBtn = document.getElementById('register_button');

registerBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // get user info
    const email = document.getElementById('email_field_register').value;
    const password = document.getElementById('password_field_register').value;

    // sign up the user & add firestore data
    auth.createUserWithEmailAndPassword(email, password)
        .then((cred) => {
            console.log(cred);
            return db.collection('users').doc(cred.uid).set({
                role: 'kid'
            });
        })
        .then(() => {
            window.location.href = '/src/pages/activities-list/activities.html';
        });
});

// login with enter
const passwordInput = document.getElementById('password_field');
passwordInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('login-button').click();
    }
});
