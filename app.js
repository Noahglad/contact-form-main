const myForm = document.querySelector(".form");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();


//   Gets the inputs

  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;
  const email = document.querySelector("#email").value;
  const terms = document.querySelector("#check-btn").checked;

//   the valid variable
  let allValid = true;



//   Validates the first name
  if (fname === "") {
    alert("First Name is required");
    allValid = false;
  } else if (fname.length < 3) {
    alert("First Name must be more than 3 characters");
    allValid = false;
  }

//   Validates the last name
  if (lname === "") {
    alert("Last Name is required");
    allValid = false;
  } else if (lname.length < 3) {
    alert("Last Name must be more than 3 characters");
    allValid = false;
  }


//   Validates the email inputs
  if (email === "") {
    alert("Please enter your email");
    allValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email");
    allValid = false;
  }

//   Validates the checkbox
  if (!terms) {
    alert("To submit this form, please consent to be contacted");
    allValid = false;
  }

  if (allValid) {
    alert("Form submitted successfully");

    
    //clear the fields 
    fname.value = "";
    lname.value = "";
    email.value = "";
    terms.checked = false;
  }
});
