const logoutButton = document.getElementById('logout-educator');

logoutButton.addEventListener('click', () => {
    console.log("try to logout...");
    firebase.auth().signOut();
    window.location.href = "/src/pages/login/login.html";
})