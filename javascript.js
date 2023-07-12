const points = [100, 200, 300, 400, 500];
const cat1 = $('.cat1qs');
const cat2 = $('.cat2qs');
const cat3 = $('.cat3qs');
const cat4 = $('.cat4qs');
const cat5 = $('.cat5qs');


points.forEach((el) => {
    cat1.append(`<button class='questionsButton' id ='0'>${el}</button>`);
    cat2.append(`<button class='questionsButton' id ='1'>${el}</button>`);
    cat3.append(`<button class='questionsButton' id ='2'>${el}</button>`);
    cat4.append(`<button class='questionsButton' id ='3'>${el}</button>`);
    cat5.append(`<button class='questionsButton' id ='4'>${el}</button>`);
});

const questionsButtons = document.querySelectorAll(".questionsButton");
const answerOptions = document.querySelectorAll(".answerOptions");
const dialog = document.querySelector(".dialogOpen");

let elPoints
let randomInt
let catIndex
let minInt = 0
let maxInt = 4

function questionsLength() {
    return getCategory[catIndex].questions.length
}

// Random Int Generator
function getRandomInt(minInt, maxInt) {
        minInt = Math.ceil(minInt);
        maxInt = Math.floor(maxInt);
        return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
    }


questionsButtons.forEach((el) => {
    el.addEventListener('click', (e) => {

        cat1.click(() => {
            catIndex = 0;
            maxInt = questionsLength();
            console.log("MAX-INT:", maxInt);
            randomInt = getRandomInt(minInt, maxInt);
            console.log("RANDOM-INT:", randomInt);

            $('#dialogHeader').text(getCategory[0].questions[randomInt].question);
            
            for (let i = 0; i < 3; i++) {
                $(`.answer${i+1}`).attr('data-questionsAtt',randomInt);
                $(`.answer${i+1}`).text(getCategory[0].questions[randomInt].answers[i].answer);           
            }
        });

        cat2.click(() => {
            catIndex = 1;
            maxInt = questionsLength();
            randomInt = getRandomInt(minInt, maxInt);

            $('#dialogHeader').text(getCategory[1].questions[randomInt].question);

            for (let i = 0; i < 3; i++) {
                $(`.answer${i+1}`).attr('data-questionsAtt',randomInt);
                $(`.answer${i+1}`).text(getCategory[1].questions[randomInt].answers[i].answer);              
            }
        }); 

        cat3.click(() => {
            catIndex = 2;
            maxInt = questionsLength();
            randomInt = getRandomInt(minInt, maxInt);

            $('#dialogHeader').text(getCategory[2].questions[randomInt].question);

            for (let i = 0; i < 3; i++) {
                $(`.answer${i+1}`).attr('data-questionsAtt',randomInt);
                $(`.answer${i+1}`).text(getCategory[2].questions[randomInt].answers[i].answer);              
            }
        });

        cat4.click(() => {
            catIndex = 3;
            maxInt = questionsLength();
            randomInt = getRandomInt(minInt, maxInt);

            $('#dialogHeader').text(getCategory[3].questions[randomInt].question);

            for (let i = 0; i < 3; i++) {
                $(`.answer${i+1}`).attr('data-questionsAtt',randomInt);
                $(`.answer${i+1}`).text(getCategory[3].questions[randomInt].answers[i].answer);            
            }
        });

        cat5.click(() => {
            catIndex = 4;
            maxInt = questionsLength();
            randomInt = getRandomInt(minInt, maxInt);

            $('#dialogHeader').text(getCategory[4].questions[randomInt].question);

            for (let i = 0; i < 3; i++) {
                $(`.answer${i+1}`).attr('data-questionsAtt',randomInt);
                $(`.answer${i+1}`).text(getCategory[4].questions[randomInt].answers[i].answer);               
            }
        });

    // Find which value was clicked

        elPoints = e.target.innerText;
        // console.log(elPoints)
    // `Get rid of the loop
        dialog.show();

        return elPoints, randomInt, catIndex, maxInt;
    });
})

const dialogCorrect = document.querySelector('.dialogCorrect');
const dialogWrong = document.querySelector('.dialogWrong');
const closeButton1 = document.querySelector('.closeButton1');
const closeButton2 = document.querySelector('.closeButton2');

let count = 1;
let score1 = 0;
let score2 = 0;

const score1El = $('.score1');
const score2El = $('.score2');

answerOptions.forEach((el) => {
    el.addEventListener('click', (e) => {
        function removeQuestion() {
            let updatedCategory = getCategory;

            updatedCategory[catIndex].questions.splice(randomInt, 1);
            localStorage.setItem("category", JSON.stringify(updatedCategory));

            console.log(updatedCategory)
        }

        for (let i = 0; i < getCategory.length; i++) {
            
            for (let j = 0; j < getCategory[i].questions.length; j++) {

                for (let k = 0; k < getCategory[i].questions[j].answers.length; k++) { 
            
                    const responseId = parseInt(e.target.id);
                    const questionIndex = parseInt(e.target.dataset.questionsatt);
                    const isCorrect = getCategory[i].questions[questionIndex].answers[responseId].isCorrect;

                    console.log(`isCorrect ${isCorrect}`);
                    console.log(`option choice ${responseId}`);
                    console.log(`questionIndex ${questionIndex}`);
                    console.log(`category ${i}`);

                    // SCORE
                    if(isCorrect) {
                        if(count % 2 === 0){
                            score2 += parseInt(elPoints);
                            let score2Str = score2.toString();
                            console.log(score2Str);
                            score2El.text(score2Str);
                        }

                        else {
                            score1 += parseInt(elPoints);
                            let score1Str = score1.toString();
                            console.log(elPoints);
                            score1El.text(score1Str);
                        }
                    }
                    else {
                        count++;
                    }

                    if (isCorrect) {
                        dialog.close();
                        dialogCorrect.show();

                        closeButton1.addEventListener('click', () => {
                            dialogCorrect.close();
                        })

                        console.log(e.target.innerText);
                        console.log(true);
                        removeQuestion();

                        return true;
                    }
                    else {
                        // const returnRightAnswer = document.querySelector(".returnCorrectAnswer")
                        // returnRightAnswer.innerHTML()
                        dialog.close();
                        dialogWrong.show();

                        closeButton2.addEventListener('click', () => {
                            dialogWrong.close();
                        });

                        console.log(e.target.innerText);
                        getCategory[i].questions[j].answers[k].answer;
                        removeQuestion();

                        console.log(false);
                        return false;
                    }
                }
            }
        }
        console.log(e.target.innerText);

    });
})

const category = [
    {questions: [
        {question: 'Will Andrew Tate ever be a free man again?',
        answers: [{answer: 'The matrix got him', isCorrect: false}, {answer: 'The Top G is always a free man', isCorrect: true}, {answer: 'Never', isCorrect: false}]},

        {question: "What was Andrew Tate's comments about vaping?",
        answers: [{answer: 'Breathe Air', isCorrect: true}, {answer: "It's cool", isCorrect: false}, {answer: 'Just smoke cigars', isCorrect: false}]},

        {question: "What color is Andrew Tate's Buggati?", 
        answers: [{answer: 'Copper', isCorrect: true}, {answer: 'Silver', isCorrect: false}, {answer: 'Blue', isCorrect: false}]},

        {question: "What sport did Andrew Tate used to play?", 
        answers: [{answer: 'Boxing', isCorrect: false}, {answer: 'MMA', isCorrect: false}, {answer: 'Kickboxing', isCorrect: true}]},

        {question: "What is the name of Andrew Tate's brother?", 
        answers: [{answer: 'Alejandro', isCorrect: false}, {answer: 'Tristan', isCorrect: true}, {answer: 'Michael', isCorrect: false}]},
    ]},

    {questions: [
        {question: 'Which powerful ninja from the Uchiha clan possesses the Sharingan, a special dojutsu that grants various ocular abilities?', 
        answers: [{answer: 'Itachi Uchiha', isCorrect: true}, {answer: 'Kakashi Hatake', isCorrect: false}, {answer: 'Jiraiya', isCorrect: false}]},

        {question: 'Who is the captain of the Straw Hat Pirates in the manga series One Piece?', 
        answers: [{answer: 'Roronoa Zoro', isCorrect: false}, {answer: 'Trafalgar Law', isCorrect: false}, {answer: 'Monkey D. Luffy', isCorrect: true}]},

        {question: 'Who is the main protagonist of the anime/manga series "Demon Slayer: Kimetsu no Yaiba"?', 
        answers: [{answer: 'Tanjiro Kamado)', isCorrect: true}, {answer: 'Zenitsu Agatsuma', isCorrect: false}, {answer: 'Inosuke Hashibira', isCorrect: false}]},

        {question: 'What is the name of the main character in the anime/manga series "Bleach"?', 
        answers: [{answer: 'Izuru Kira', isCorrect: false}, {answer: 'Ichigo Kurosaki', isCorrect: true}, {answer: 'Rukia Kuchiki', isCorrect: false}]},

        {question: 'Who is the main protagonist in Attack on Titan?', 
        answers: [{answer: 'Eren Yeager', isCorrect: true}, {answer: 'Levi Ackerman', isCorrect: false}, {answer: 'Mikasa Ackerman', isCorrect: false}]},
    ]},

    {questions: [
        {question: 'Which superhero wields a mystical hammer known as Mjolnir?', 
        answers: [{answer: 'Iron Man', isCorrect: false}, {answer: 'Captain America', isCorrect: false}, {answer: 'Mr. Tor himself', isCorrect: true}]},

        {question: 'Who is the alter ego of the superhero Iron Man?', 
        answers: [{answer: 'Tony Stark', isCorrect: true}, {answer: 'Bruce Wayne', isCorrect: false}, {answer: 'Peter Parker', isCorrect: false}]},

        {question: 'Which superhero represents the fictional African nation of Wakanda?', 
        answers: [{answer: 'Black Panther', isCorrect: true}, {answer: 'Captain America', isCorrect: false}, {answer: 'Black Widow', isCorrect: false}]},

        {question: 'Which superhero has the ability to shrink in size while increasing in strength?', 
        answers: [{answer: 'Hulk', isCorrect: false}, {answer: 'Ant-Man', isCorrect: true}, {answer: 'Spider-Man', isCorrect: false}]},

        {question: 'Which Marvel superhero is known for his incredible strength, green skin, and uncontrollable rage?', 
        answers: [{answer: 'Hulk', isCorrect: true}, {answer: 'Thor', isCorrect: false}, {answer: 'Iron Man', isCorrect: false}]},

    ]},

    {questions: [
        {question: 'What type of game is "Overwatch"?',
        answers: [{answer: 'A team-based first-person shooter', isCorrect: true}, {answer: 'A puzzle-solving adventure', isCorrect: false}, {answer: 'A competitive cooking game', isCorrect: false}]},

        {question: 'In the game "The Legend of Zelda: Breath of the Wild," what is the name of the main character?', 
        answers: [{answer: 'Link', isCorrect: true}, {answer: 'Mario', isCorrect: false}, {answer: 'Superman', isCorrect: false}]},

        {question: 'Which video game franchise features a protagonist named Nathan Drake?',
        answers: [{answer: "Assassin's Creed", isCorrect: false}, {answer: 'Call of Duty', isCorrect: false}, {answer: 'Uncharted', isCorrect: true}]},

        {question: 'In the game "Super Mario Bros," what is the name of the main antagonist that Mario continuously battles against?',
        answers: [{answer: 'Bowser', isCorrect: true}, {answer: 'Wario', isCorrect: false}, {answer: 'Donkey Kong', isCorrect: false}]},

        {question: 'In the game "Minecraft," what is the primary goal or objective for players to accomplish?',
        answers: [{answer: 'Solve puzzles in a dungeon', isCorrect: false}, {answer: 'Survive and thrive in a randomly generated world', isCorrect: true},{answer: 'Build and manage a city', isCorrect: false}]},
    ]},

    {questions: [
        {question: 'What is banned in public places in Florida after 6pm on a Thursday?',
        answers: [{answer: 'Cycling', isCorrect: false}, {answer: 'Farting', isCorrect: true}, {answer: 'Swimming', isCorrect: false}]},

        {question: 'On Sunday, what is illegal to sell in Columbus, Ohio?',
        answers: [{answer: 'Cornflakes', isCorrect: true}, {answer: 'Games', isCorrect: false}, {answer: 'Cars', isCorrect: false}]},

        {question: 'Whats is Illegal in Alabama?',
        answers: [{answer: 'Guns', isCorrect: false}, {answer: 'Driving Blindfolded', isCorrect: true}, {answer: 'Window tinting', isCorrect: false}]},

        {question: 'What is Illegal in Arizona?',
        answers: [{answer: "You can't use a toaster at 10pm", isCorrect: false}, {answer: "Football", isCorrect: false}, {answer: "You can't have a donkey sleeping in your bathtub after 7pm", isCorrect: true}]},

        {question: 'What is Illegal in Maine?',
        answers: [{answer: 'To bite your landlord', isCorrect: true}, {answer: 'Running', isCorrect: false}, {answer: 'Netlix after 7pm', isCorrect: false}]},
    ]}
]

localStorage.setItem('category', JSON.stringify(category));
const getCategory = JSON.parse(localStorage.getItem('category'));
console.log(getCategory);