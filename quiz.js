let nextButtonEl = document.getElementById("nextButton");
let questionHead = document.getElementById("questionHead");
let firstOption = document.getElementById("oneHead");
let secondOption = document.getElementById("twoHead");
let thirdOption = document.getElementById("threeHead");
let fourthOption = document.getElementById("fourHead");
let startPage = document.getElementById("startPage");
let result = document.getElementById("showAnswer");
let score = document.getElementById("score");
let questionContainer = document.getElementById("page2");
let scoreValue = 0;
let count = 0;



function questionsDisplayPage() {
    let value1 = 0;
    let value2 = 0;
    let value3 = 0;
    let value4 = 0;

    result.textContent = "";
    result.classList.remove("result-right", "result-wrong");
    firstOption.style.backgroundColor = "#00FFFF";
    secondOption.style.backgroundColor = "#00FFFF";
    thirdOption.style.backgroundColor = "#00FFFF";
    fourthOption.style.backgroundColor = "#00FFFF";
    firstOption.style.color = "black";
    secondOption.style.color = "black";
    thirdOption.style.color = "black";
    fourthOption.style.color = "black";

    let questions = [{
            q: "Who is the CEO of NXTWAVE ?",
            option1: {
                one: "A. Sashank Gujjala",
                answer: false
            },
            option2: {
                two: "B. Anupam Pedarla",
                answer: false

            },
            option3: {
                three: "C. Rahul Attuluri",
                answer: true
            },
            option4: {
                four: "D. Avinash Dara",
                answer: false

            },
        },
        {
            q: "Who is the co-founders of NXTWAVE ?",
            option1: {
                one: "A. Sashank Gujjala",
                answer: false
            },
            option2: {
                two: "B. Rahul Attuluri",
                answer: false
            },
            option3: {
                three: "C.  Anupam Pedarla",
                answer: false
            },
            option4: {
                four: "D. All of these",
                answer: true
            },
        },
        {
            q: "Who is the head of placements at NXTWAVE ?",
            option1: {
                one: "A. Girish Akash",
                answer: true
            },
            option2: {
                two: "B. Anupam Pedarla",
                answer: false
            },
            option3: {
                three: "C. Praneetha Moturi",
                answer: false
            },
            option4: {
                four: "D. Avinash Dara",
                answer: false
            },
        },
        {
            q: "Who is the head of student engagement at NXTWAVE ?",
            option1: {
                one: "A. Girish Akash",
                answer: false
            },
            option2: {
                two: "B. Avinash Dara",
                answer: true
            },
            option3: {
                three: "C. Sashank Gujjala",
                answer: false
            },
            option4: {
                four: "D. Praneetha Moturi",
                answer: false
            },
        },
        {
            q: "What is the full form of CCBP ?",
            option1: {
                one: "A. Continuous Computer Building Program",
                answer: false
            },
            option2: {
                two: "B. Continuous Compreseive Building Program",
                answer: false
            },
            option3: {
                three: "C. Continuous Company Building Program",
                answer: false
            },
            option4: {
                four: "D. Continuous Career Building Program",
                answer: true
            },
        },
        {
            q: "Who is the official EdTech Partner of NXTWAVE ?",
            option1: {
                one: "A. Chennai Super Kings",
                answer: false
            },
            option2: {
                two: "B. Rajasthan Royals",
                answer: false
            },
            option3: {
                three: "C. Royal Challengers Bangalore",
                answer: true
            },
            option4: {
                four: "D. Mumbai Indians",
                answer: false
            },
        },
        {
            q: "Which of the following courses we can learn in NXTWAVE ?",
            option1: {
                one: "A. Fullstack Development",
                answer: false
            },
            option2: {
                two: "B. 4.O Technologies",
                answer: false
            },
            option3: {
                three: "C. Masterclasses",
                answer: false
            },
            option4: {
                four: "D. All of these",
                answer: true
            },
        },

        {
            q: "NXTWAVE learning is a __________Curriculum ?",
            option1: {
                one: "A. Engineered Curriculum",
                answer: false
            },
            option2: {
                two: "B.Reverse Engineered Curriculum",
                answer: true
            },
            option3: {
                three: "C. Both A and B",
                answer: false
            },
            option4: {
                four: "D. None of these",
                answer: false
            },
        },
        {
            q: "What is the full form of IRC ?",
            option1: {
                one: "A. Intern Ready Certificate",
                answer: false
            },
            option2: {
                two: "B. Industry Revolution Certificate",
                answer: false
            },
            option3: {
                three: "C. Industry Ready Certificate",
                answer: true
            },
            option4: {
                four: "D. All of these",
                answer: false
            },
        },

        {
            q: "NXTWAVE is Recognised BY ?",
            option1: {
                one: "A. NASSCOM",
                answer: false
            },
            option2: {
                two: "B. Startupindia",
                answer: false
            },
            option3: {
                three: "C. N.S.D.C",
                answer: false
            },
            option4: {
                four: "D. All of these",
                answer: true
            },
        },
    ];
    questionHead.textContent = questions[count].q;
    firstOption.textContent = questions[count].option1.one;
    secondOption.textContent = questions[count].option2.two;
    thirdOption.textContent = questions[count].option3.three;
    fourthOption.textContent = questions[count].option4.four;

    firstOption.onclick = function() {

        if (questions[count].option1.answer === true) {
            firstOption.style.backgroundColor = "green";
            firstOption.style.color = "white";
            result.textContent = "Correct Answer";
            result.classList.add("result-right");
            result.classList.remove("result-wrong");
            if (value1 === 0) {

                scoreValue = scoreValue + 1;
                score.textContent = scoreValue;
                value1 = value1 + 1;
            }



            secondOption.style.backgroundColor = "#00FFFF";
            thirdOption.style.backgroundColor = "#00FFFF";
            fourthOption.style.backgroundColor = "#00FFFF";
            secondOption.style.color = "black";
            thirdOption.style.color = "black";
            fourthOption.style.color = "black";

        } else {
            firstOption.style.backgroundColor = "red";
            firstOption.style.color = "white";
            result.textContent = "Wrong Answer";
            result.classList.add("result-wrong");

            secondOption.style.backgroundColor = "#00FFFF";
            thirdOption.style.backgroundColor = "#00FFFF";
            fourthOption.style.backgroundColor = "#00FFFF";
            secondOption.style.color = "black";
            thirdOption.style.color = "black";
            fourthOption.style.color = "black";

        }

    };
    secondOption.onclick = function() {

        if (questions[count].option2.answer === true) {
            secondOption.style.backgroundColor = "green";
            result.textContent = "Correct Answer";
            result.classList.add("result-right");
            result.classList.remove("result-wrong");
            if (value2 === 0) {
                scoreValue = scoreValue + 1;
                score.textContent = scoreValue;
                value2 = value2 + 1;

            }


            secondOption.style.color = "white";
            firstOption.style.backgroundColor = "#00FFFF";
            thirdOption.style.backgroundColor = "#00FFFF";
            fourthOption.style.backgroundColor = "#00FFFF";
            firstOption.style.color = "black";
            thirdOption.style.color = "black";
            fourthOption.style.color = "black";

        } else {
            secondOption.style.backgroundColor = "red";
            secondOption.style.color = "white";
            result.textContent = "Wrong Answer";
            result.classList.add("result-wrong");
            firstOption.style.backgroundColor = "#00FFFF";
            thirdOption.style.backgroundColor = "#00FFFF";
            fourthOption.style.backgroundColor = "#00FFFF";
            firstOption.style.color = "black";
            thirdOption.style.color = "black";
            fourthOption.style.color = "black";


        }


    };
    thirdOption.onclick = function() {

        if (questions[count].option3.answer === true) {
            thirdOption.style.backgroundColor = "green";
            thirdOption.style.color = "white";
            result.textContent = "Correct Answer";
            result.classList.add("result-right");
            result.classList.remove("result-wrong");

            if (value3 === 0) {
                scoreValue = scoreValue + 1;
                score.textContent = scoreValue;
                value3 = value3 + 1;

            }


            firstOption.style.backgroundColor = "#00FFFF";
            secondOption.style.backgroundColor = "#00FFFF";
            fourthOption.style.backgroundColor = "#00FFFF";

            firstOption.style.color = "black";
            secondOption.style.color = "black";
            fourthOption.style.color = "black";

        } else {
            thirdOption.style.backgroundColor = "red";
            thirdOption.style.color = "white";
            result.textContent = "Wrong Answer";
            result.classList.add("result-wrong");
            firstOption.style.backgroundColor = "#00FFFF";
            secondOption.style.backgroundColor = "#00FFFF";
            fourthOption.style.backgroundColor = "#00FFFF";

            firstOption.style.color = "black";
            secondOption.style.color = "black";
            fourthOption.style.color = "black";



        }



    };
    fourthOption.onclick = function() {

        if (questions[count].option4.answer === true) {
            fourthOption.style.backgroundColor = "green";
            fourthOption.style.color = "white";
            result.textContent = "Correct Answer";
            result.classList.add("result-right");
            result.classList.remove("result-wrong");
            if (value4 === 0) {
                scoreValue = scoreValue + 1;
                score.textContent = scoreValue;
                value4 = value4 + 1;

            }


            firstOption.style.backgroundColor = "#00FFFF";
            secondOption.style.backgroundColor = "#00FFFF";
            thirdOption.style.backgroundColor = "#00FFFF";
            firstOption.style.color = "black";
            secondOption.style.color = "black";
            thirdOption.style.color = "black";
        } else {
            fourthOption.style.backgroundColor = "red";
            fourthOption.style.color = "white";
            result.textContent = "Wrong Answer";
            result.classList.add("result-wrong");

            firstOption.style.backgroundColor = "#00FFFF";
            secondOption.style.backgroundColor = "#00FFFF";
            thirdOption.style.backgroundColor = "#00FFFF";
            firstOption.style.color = "black";
            secondOption.style.color = "black";
            thirdOption.style.color = "black";
        }


    };







}
























startPage.addEventListener("click", function() {
    questionsDisplayPage();
});


function finalPage() {

    questionContainer.textContent = "";
    questionContainer.style.backgroundColor = "#F0F8FF"

    let headEl = document.createElement("p");
    headEl.textContent = "YOUR SCORE : " + scoreValue;
    headEl.classList.add("final-head", "p-2", "mb-4", "mt-5");
    questionContainer.appendChild(headEl);

    let headEl2 = document.createElement("p");
    headEl2.textContent = "THANK YOU!"
    headEl2.classList.add("final-head2", "p-2", "mb-5");
    questionContainer.appendChild(headEl2);

    let hrEl = document.createElement("hr");
    questionContainer.appendChild(hrEl);

    let container = document.createElement("div");
    container.classList.add("text-center")
    questionContainer.appendChild(container)

    let imgEl = document.createElement("img");
    imgEl.src = "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg";
    imgEl.classList.add("mb-3")
    container.appendChild(imgEl);
    let headE13 = document.createElement("h1");
    headE13.textContent = "Designed to transform you into a highly skilled Software Professional";
    headE13.classList.add("final-head3");
    container.appendChild(headE13);


}
nextButtonEl.onclick = function() {
    count = count + 1;
    if (count === 10) {
        finalPage();
    } else {
        questionsDisplayPage();
    }
}
