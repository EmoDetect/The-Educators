const educatorClicked = document.querySelector(".educator").className;
const childClicked = document.querySelector(".child").className;

document.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.className === educatorClicked) {
    localStorage.setItem('user', 'educator');

    window.location.href = "/src/pages/login/login.html";
  } 
  else if (e.target.className === childClicked) {
    localStorage.setItem('user', 'kid');

    window.location.href = "/src/pages/login/login.html";
  }
});
