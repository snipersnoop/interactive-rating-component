
const popup = document.querySelector("#pop-up");
const submit = document.querySelector("#submit-button");
const ratingContainer = document.querySelector("#rating-container");
const selectionMsg = document.querySelector("#selection-msg");
const buttons = document.querySelectorAll("#rating-button-1");
let selectedRating = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedRating = button.textContent;
        selectionMsg.textContent = `you have selected ${selectedRating} out of 5`;
})
});


submit.addEventListener('click', (e) =>{
    e.preventDefault();
    if(selectedRating) {
    ratingContainer.style.display = "none";
    popup.style.display = "block";};

})