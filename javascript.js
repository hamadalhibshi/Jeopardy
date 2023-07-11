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
                    const isCorrectCheck = getCategory[i].questions[j].answers[answerButtonId].isCorrect;
                    console.log(`ID: ${answerButtonId}`);
                    console.log(`NO. ID ${answerButtonIdNumber}`);
                    console.log(`isCorrect: ${isCorrectCheck}`);

                    const selectedEl = getCategory[i].questions[j].answers[answerButtonId]
                    //check if selectedEl is correct
                    // selectedEl.isCorrect

                    if (selectedEl.isCorrect) {
                        dialog.close();
                        dialogCorrect.show();

                        closeButton1.addEventListener('click', () => {
                            dialogCorrect.close();
                        })

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
        {question: 'Will Andrew Tate ever be a free man again?',
        answers: [{answer: 'The Top G is always a free man', isCorrect: true}, {answer: 'The matrix got him', isCorrect: false}, {answer: 'Never', isCorrect: false}]},

        {question: "What was Andrew Tate's comments about vaping?",
        answers: [{answer: 'Breathe Air', isCorrect: true}, {answer: "It's cool", isCorrect: false}, {answer: 'Just smoke cigars', isCorrect: false}]},

        {question: "What color is Andrew Tate's Buggati?", 
        answers: [{answer: 'Copper', isCorrect: true}, {answer: 'Silver', isCorrect: false}, {answer: 'Blue', isCorrect: false}]},

        {question: "What sport did Andrew Tate used to play?", 
        answers: [{answer: 'Kickboxing', isCorrect: true}, {answer: 'Boxing', isCorrect: false}, {answer: 'MMA', isCorrect: false}]},

        {question: "What is the name of Andrew Tate's brother?", 
        answers: [{answer: 'Tristan', isCorrect: true}, {answer: 'Alejandro', isCorrect: false}, {answer: 'Michael', isCorrect: false}]},
    ]},

    {questions: [
        {question: 'Which powerful ninja from the Uchiha clan possesses the Sharingan, a special dojutsu that grants various ocular abilities?', 
        answers: [{answer: 'Itachi Uchiha', isCorrect: true}, {answer: 'Kakashi Hatake', isCorrect: false}, {answer: 'Jiraiya', isCorrect: false}]},

        {question: 'Who is the captain of the Straw Hat Pirates in the manga series One Piece?', 
        answers: [{answer: 'Monkey D. Luffy', isCorrect: true}, {answer: 'Roronoa Zoro', isCorrect: false}, {answer: 'Trafalgar Law', isCorrect: false}]},

        {question: 'Who is the main protagonist of the anime/manga series "Demon Slayer: Kimetsu no Yaiba"?', 
        answers: [{answer: 'Tanjiro Kamado)', isCorrect: true}, {answer: 'Zenitsu Agatsuma', isCorrect: false}, {answer: 'Inosuke Hashibira', isCorrect: false}]},

        {question: 'What is the name of the main character in the anime/manga series "Bleach"?', 
        answers: [{answer: 'Ichigo Kurosaki', isCorrect: true}, {answer: 'Izuru Kira', isCorrect: false}, {answer: 'Rukia Kuchiki', isCorrect: false}]},

        {question: 'Who is the main protagonist in Attack on Titan?', 
        answers: [{answer: 'Eren Yeager', isCorrect: true}, {answer: 'Eren Yeager', isCorrect: false}, {answer: 'Mikasa Ackerman', isCorrect: false}]},
    ]},

    {questions: [
        {question: 'Which superhero wields a mystical hammer known as Mjolnir?', 
        answers: [{answer: 'Mr. Tor himself', isCorrect: true}, {answer: 'Iron Man', isCorrect: false}, {answer: 'Captain America', isCorrect: false}]},

        {question: 'Who is the alter ego of the superhero Iron Man?', 
        answers: [{answer: 'Tony Stark', isCorrect: true}, {answer: 'Bruce Wayne', isCorrect: false}, {answer: 'Peter Parker', isCorrect: false}]},

        {question: 'Which superhero represents the fictional African nation of Wakanda?', 
        answers: [{answer: 'Black Panther', isCorrect: true}, {answer: 'Captain America', isCorrect: false}, {answer: 'Black Widow', isCorrect: false}]},

        {question: 'Which superhero has the ability to shrink in size while increasing in strength?', 
        answers: [{answer: 'Ant-Man', isCorrect: true}, {answer: 'Hulk', isCorrect: false}, {answer: 'Spider-Man', isCorrect: false}]},

        {question: 'Which Marvel superhero is known for his incredible strength, green skin, and uncontrollable rage?', 
        answers: [{answer: 'Hulk', isCorrect: true}, {answer: 'Thor', isCorrect: false}, {answer: 'Iron Man', isCorrect: false}]},

    ]},

    {questions: [
        {question: 'What type of game is "Overwatch"?',
        answers: [{answer: 'A team-based first-person shooter', isCorrect: true}, {answer: 'A puzzle-solving adventure', isCorrect: false}, {answer: 'A competitive cooking game', isCorrect: false}]},

        {question: 'In the game "The Legend of Zelda: Breath of the Wild," what is the name of the main character?', 
        answers: [{answer: 'Link', isCorrect: true}, {answer: 'Mario', isCorrect: false}, {answer: 'Link', isCorrect: false}]},

        {question: 'Which video game franchise features a protagonist named Nathan Drake?',
        answers: [{answer: 'Uncharted', isCorrect: true}, {answer: "Assassin's Creed", isCorrect: false}, {answer: 'Call of Duty', isCorrect: false}]},

        {question: 'In the game "Super Mario Bros," what is the name of the main antagonist that Mario continuously battles against?',
        answers: [{answer: 'Bowser', isCorrect: true}, {answer: 'Wario', isCorrect: false}, {answer: 'Donkey Kong', isCorrect: false}]},

        {question: 'In the game "Minecraft," what is the primary goal or objective for players to accomplish?',
        answers: [{answer: 'Survive and thrive in a randomly generated world', isCorrect: true}, {answer: 'Solve puzzles in a dungeon', isCorrect: false}, {answer: 'Survive and thrive in a randomly generated world b) Build and manage a city', isCorrect: false}]},
    ]},

    {questions: [
        {question: 'Which band created the song Bohemian Rhapsody?',
        answers: [{answer: 'Queen', isCorrect: true}, {answer: 'Twisted Sisters', isCorrect: false}, {answer: 'AC DC', isCorrect: false}]},

        {question: 'C5Q2',
        answers: [{answer: 'Why', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},

        {question: 'C5Q3',
        answers: [{answer: 'Where', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},

        {question: 'C5Q4',
        answers: [{answer: 'Nice', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},

        {question: 'C5Q5',
        answers: [{answer: 'Crazy', isCorrect: true}, {answer: 'A2', isCorrect: false}, {answer: 'A3', isCorrect: false}]},
    ]}
]

localStorage.setItem('category', JSON.stringify(category))
const getCategory = JSON.parse(localStorage.getItem('category'))
console.log(getCategory)