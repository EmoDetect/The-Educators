firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      const user = firebase.auth().currentUser;
  
      if (user != null) {
        const email_id = user.email;
        document.getElementById("user_para").innerHTML =
          "Welcome User : " + email_id;
      }
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });
  
  function login() {
    const userEmail = document.getElementById("email_field").value;
    const userPass = document.getElementById("password_field").value;
  
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPass)
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
  
        window.alert("Error : " + errorMessage);
  
        // ...
      });
  }
  
  function logout() {
    firebase.auth().signOut();
  }
  
  function createUser() {
    getAuth()
      .createUser({
        email: "user@example.com",
        emailVerified: false,
        phoneNumber: "+11234567890",
        password: "secretPassword",
        displayName: "John Doe",
        photoURL: "http://www.example.com/12345678/photo.png",
        disabled: false,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new user:", userRecord.uid);
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
      });
  }
  