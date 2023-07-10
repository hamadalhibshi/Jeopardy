const points = [100, 200, 300, 400, 500];

points.forEach((el) => {
    console.log(el);

    const cat1 = $(".cat1qs");
    const cat2 = $(".cat2qs");
    const cat3 = $(".cat3qs");
    const cat4 = $(".cat4qs");
    const cat5 = $(".cat5qs");

    cat1.append(`<button class="questionsButton">${el}</button>`);
    cat2.append(`<button class="questionsButton">${el}</button>`);
    cat3.append(`<button class="questionsButton">${el}</button>`);
    cat4.append(`<button class="questionsButton">${el}</button>`);
    cat5.append(`<button class="questionsButton">${el}</button>`);

});

const openButtons = document.querySelectorAll(".questionsButton");
const closeButtons = document.querySelectorAll(".answerOptions");
const dialog = document.querySelector(".dialogOpen");

openButtons.forEach((el) => {
    el.addEventListener("click", () => {
        // TODO Find which category and value was clicked
        
        // `Get rid of the loop
    questions1.forEach(el => {
        const closeButton = document.createElement("h2")
        closeButton.innerText = el.question;
        dialogheader.append(closeButton);
    });
        dialog.show();
    });
})

closeButtons.forEach((el) => {
    el.addEventListener("click", () => {
        dialog.close();
    });
})

const questions1 = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    { question: "Question 5", answer: "Answer 5" },
];

const questions2 = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    { question: "Question 5", answer: "Answer 5" },
];

const questions3 = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    { question: "Question 5", answer: "Answer 5" },
];

const questions4 = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    { question: "Question 5", answer: "Answer 5" },
];

const questions5 = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    { question: "Question 5", answer: "Answer 5" },
];

let dialogheader = document.getElementById("dialogHeader")
let answerButtons = document.querySelectorAll("answer")
