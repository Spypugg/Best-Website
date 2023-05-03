document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let id = document.getElementById("id-in").value;
  let pass = document.getElementById("pass-in").value;

  if (id === `Admin` && pass === `1234`) {
    window.open("other.html", "_self");
  } else {
    document.getElementById("id-in").style.borderColor = "red";
    document.getElementById("pass-in").style.borderColor = "red";
    document.getElementById(
      "output"
    ).innerHTML = `Username or Password is Incorrect`;
  }
  console.log(`Password Incorrect`);
}
