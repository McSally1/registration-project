const submitForm = document.querySelector(".submit");
const pWord = document.querySelector("#pw");
//   console.log(pword);
const showPassword = function () {
  if (pWord.type === "password") {
    pWord.type = "text";
  } else {
    pWord.type = "password";
  }
};

//declaring variables
let fullname, address, email, username, password;

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //getting input fields
  fullname = submitForm.names.value;
  address = submitForm.address.value;
  email = submitForm.email.value;
  username = submitForm.username.value;
  password = submitForm.password.value;
  console.log(fullname, address, email, username, password);

  //assigning variables
  let userInfo = {
    fullname: fullname,
    address: address,
    email: email,
    username: username,
    password: password,
  };

  if (userInfo.fullname === "") {
    const name_er = document.querySelector(".name_err");
    name_er.textContent = "This field is required";
    return;
  }
  if (userInfo.address === "") {
    const address_er = document.querySelector(".address_err");
    address_er.textContent = "This field is required";
    return;
  }
  if (userInfo.email === "") {
    const email_er = document.querySelector(".email_err");
    email_er.textContent = "This field is required";
    return;
  }
  if (userInfo.username === "") {
    const userName_er = document.querySelector(".userName_err");
    userName_er.textContent = "This field is required";
    return;
  }
  if (userInfo.password === "") {
    const pw_er = document.querySelector(".pw_err");
    pw_er.textContent = "This field is required";
    return;
  }
  //check if username exists
  const checkForUser = JSON.parse(localStorage.getItem(userInfo.username));

  if (checkForUser?.username === userInfo.username) {
    alert("Username already exists");
  } else {
    //saving values in local storage
    localStorage.setItem(userInfo.username, JSON.stringify(userInfo));
    alert("Registration Successful");
    window.location.href = "./login.html";
  }
});
