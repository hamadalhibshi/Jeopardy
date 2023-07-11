const points = [100, 200, 300, 400, 500];
const cat1 = $('.cat1qs');
const cat2 = $('.cat2qs');
const cat3 = $('.cat3qs');
const cat4 = $('.cat4qs');
const cat5 = $('.cat5qs');


points.forEach((el) => {
    cat1.append(`<button class='questionsButton'>${el}</button>`);
    cat2.append(`<button class='questionsButton'>${el}</button>`);
    cat3.append(`<button class='questionsButton'>${el}</button>`);
    cat4.append(`<button class='questionsButton'>${el}</button>`);
    cat5.append(`<button class='questionsButton'>${el}</button>`);
});

const questionsButtons = document.querySelectorAll(".questionsButton");
const answerOptions = document.querySelectorAll(".answerOptions");
const dialog = document.querySelector(".dialogOpen");

questionsButtons.forEach((el) => {
    el.addEventListener('click', () => {


    // TODO Find which category was clicked

        cat1.click(() => {
            $('#dialogHeader').text(getCategory[0].questions[0].question)

            for (let i = 0; i < 3; i++) {
                $(`.answer${i+1}`).text(getCategory[0].questions[0].answers[i].answer)                
            }
        });

        cat2.click(() => {
            $('#dialogHeader').text(getCategory[1].questions[0].question)

            for (let i = 0; i < 3; i++) {
                $(`.answer${i+1}`).text(getCategory[1].questions[0].answers[i].answer)                
            }
        }); 

        cat3.click(() => {
            $('#dialogHeader').text(getCategory[2].questions[0].question)

            for (let i = 0; i < 3; i++) {
                $(`.answer${i+1}`).text(getCategory[2].questions[0].answers[i].answer)                
            }
        });

        cat4.click(() => {
            $('#dialogHeader').text(getCategory[3].questions[0].question)

            for (let i = 0; i < 3; i++) {
                $(`.answer${i+1}`).text(getCategory[3].questions[0].answers[i].answer)                
            }
        });

        cat5.click(() => {
            $('#dialogHeader').text(getCategory[4].questions[0].question)

            for (let i = 0; i < 3; i++) {
                $(`.answer${i+1}`).text(getCategory[4].questions[0].answers[i].answer)                
            }
        });

    // Find which value was clicked

        let buttonClickPoints = el.innerText;
        console.log(buttonClickPoints);

    // `Get rid of the loop


        dialog.show();
    });
})

const dialogCorrect = document.querySelector('.dialogCorrect');
const dialogWrong = document.querySelector('.dialogWrong');
const closeButton1 = document.querySelector('.closeButton1');
const closeButton2 = document.querySelector('.closeButton2');


answerOptions.forEach((el) => {
    el.addEventListener('click', (e) => {
        for (let i = 0; i < getCategory.length; i++) {
            for (let j = 0; j < getCategory[i].questions.length; j++) {
                for (let k = 0; k < getCategory[i].questions[j].answers.length; k++) { 
                    // const selectedOption = e.target.innerText;
                    // const answer = getCategory[i].questions[j].answers[k].answer;
                    // const isCorrect = getCategory[i].questions[j].answers[k].isCorrect;

                    // console.log(`selectedOption ==> ${selectedOption}`);
                    // console.log(`answer ==> ${answer}`);
                    // console.log(`isCorrect ==> ${isCorrect}`);
                    // console.log(` `);

                    // Get id of element that was clicked and use it to get the isCorrect
                    const answerButtonId = e.target.id; // convert this to a number
                    const answerButtonIdNumber = parseInt(answerButtonId);
                    const isCorrectCheck = getCategory[i].questions[j].answers[answerButtonIdNumber].isCorrect;
                    console.log(`ID: ${answerButtonId}`);
                    console.log(`NO. ID ${answerButtonIdNumber}`);
                    console.log(`isCorrect: ${isCorrectCheck}`);

                    // const selectedEl = getCategory[i].questions[j].answers[<ID HERE>]
                    // selectedEl.isCorrect 

                    if (e.target.innerText === getCategory[i].questions[j].answers[k].answer && getCategory[i].questions[j].answers[k].isCorrect === true) {
                        dialog.close();
                        dialogCorrect.show();

                        closeButton1.addEventListener('click', () => {
                            dialogCorrect.close();
                        });

                        console.log(e.target.innerText)
                        console.log(true)
                        return true
                    }
                    else {
                        dialog.close();
                        dialogWrong.show();

                        closeButton2.addEventListener('click', () => {
                            dialogWrong.close();
                        });

                        console.log(e.target.innerText)
                        getCategory[i].questions[j].answers[k].answer
                        console.log(false)
                        return false
                    }
                }
            }            
        }
        console.log(e.target.innerText)
    });
})

const category = [
    {questions: [
        {question: 'C1Q1', answers: [{answer: 'My Cool Answer', isCorrect: true}, {answer: 'Q1A2', isCorrect: false}, {answer: 'Q1A3', isCorrect: false}]},
        {question: 'C1Q2', answers: [{answer: 'No you', isCorrect: true}, {answer: 'Q2A2', isCorrect: false}, {answer: 'Q2A3', isCorrect: false}]},
        {question: 'C1Q3', answers: [{answer: 'Q3A1', isCorrect: true}, {answer: 'Q3A2', isCorrect: false}, {answer: 'Q3A3', isCorrect: false}]},
        {question: 'C1Q4', answers: [{answer: 'Q4A1', isCorrect: true}, {answer: 'Q4A2', isCorrect: false}, {answer: 'Q4A3', isCorrect: false}]},
        {question: 'C1Q5', answers: [{answer: 'Q5A1', isCorrect: true}, {answer: 'Q5A2', isCorrect: false}, {answer: 'Q5A3', isCorrect: false}]},
    ]},
    {questions: [
        {question: 'C2Q1', answers: [{answer: 'Wow', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C2Q2', answers: [{answer: ':)', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C2Q3', answers: [{answer: 'B)', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C2Q4', answers: [{answer: ':(', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C2Q5', answers: [{answer: '>:(', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
    ]
    },
    {questions: [
        {question: 'C3Q1', answers: [{answer: ':o', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C3Q2', answers: [{answer: '<:(', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C3Q3', answers: [{answer: 'Boo', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C3Q4', answers: [{answer: 'I dunno', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C3Q5', answers: [{answer: 'Obama', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
    ]
    },
    {questions: [
        {question: 'C4Q1', answers: [{answer: 'Hello World', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C4Q2', answers: [{answer: 'Good Bye World', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C4Q3', answers: [{answer: 'See You Later World', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C4Q4', answers: [{answer: 'Oh no', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C4Q5', answers: [{answer: 'Joe Biden', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
    ]
    },
    {questions: [
        {question: 'C5Q1', answers: [{answer: 'Another One', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C5Q2', answers: [{answer: 'Why', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C5Q3', answers: [{answer: 'Where', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C5Q4', answers: [{answer: 'Nice', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
        {question: 'C5Q5', answers: [{answer: 'Crazy', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
    ]
    }
]

localStorage.setItem('category', JSON.stringify(category))
const getCategory = JSON.parse(localStorage.getItem('category'))
console.log(getCategory)