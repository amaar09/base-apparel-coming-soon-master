const submit = document.getElementById("submit")
submit.addEventListener("click", submitTheForm)
const errorOccured = document.getElementsByClassName("the-error-occured")

function submitTheForm(e) {
    e.preventDefault();
    console.log("submit")
    const emailInputValue = document.getElementById("email-input-value").value
    console.log(emailInputValue)

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailInputValue.match(validRegex)) {
        errorOccured[0].style.visibility = "visible";
        // errorOccured[1].style.visibility = "visible";
    }
    else {
        errorOccured[0].style.visibility = "hidden";
        // errorOccured[1].style.visibility = "hidden";
    }
}