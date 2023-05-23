//your JS code here. If required.

        const quizData = [
            {
                question: "Which language runs in a web browser?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d"
            },
            {
                question: "What does CSS stand for?",
                a: "Central Style Sheets",
                b: "Cascading Style Sheets",
                c: "Cascading Simple Sheets",
                d: "Cars SUVs Sailboats",
                correct: "b"
            },
            {
                question: "What does HTML stand for?",
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborghinis",
                correct: "a"
            },
            {
                question: "What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b"
            }
        ];

        const quizContainer = document.getElementById('quiz');
        const questionElement = document.getElementById('question');
        const optionAElement = document.getElementById('a_text');
        const optionBElement = document.getElementById('b_text');
        const optionCElement = document.getElementById('c_text');
        const optionDElement = document.getElementById('d_text');
        const optionElements = document.querySelectorAll('input[type="radio"]');
        const submitButton = document.getElementById('submit');
        const resultElement = document.getElementById('result');
        const reloadButton = document.getElementById('reload');

        let currentQuestion = 0;
        let score = 0;

        function loadQuestion() {
            const currentQuizData = quizData[currentQuestion];
            questionElement.textContent = currentQuizData.question;
            optionAElement.textContent = currentQuizData.a;
            optionBElement.textContent = currentQuizData.b;
            optionCElement.textContent = currentQuizData.c;
            optionDElement.textContent = currentQuizData.d;
            deselectOptions();
        }

        function deselectOptions() {
            optionElements.forEach(option => {
                option.checked = false;
            });
        }

        function getSelectedOption() {
            let selectedOption = undefined;
            optionElements.forEach(option => {
                if (option.checked) {
                    selectedOption = option.id;
                }
            });
            return selectedOption;
        }

        function submitAnswer() {
            const selectedOption = getSelectedOption();
            if (selectedOption) {
                if (selectedOption === quizData[currentQuestion].correct) {
                    score++;
                }
                currentQuestion++;
                if (currentQuestion < quizData.length) {
                    loadQuestion();
                } else {
                    showResult();
                }
            }
        }

        function showResult() {
            quizContainer.style.display = 'none';
            resultElement.textContent = `You scored ${score} out of ${quizData.length}.`;
            reloadButton.style.display = 'block';
        }

        function reloadQuiz() {
            currentQuestion = 0;
            score = 0;
            quizContainer.style.display = 'block';
            resultElement.textContent = '';
            reloadButton.style.display = 'none';
            loadQuestion();
        }

        submitButton.addEventListener('click', submitAnswer);
        reloadButton.addEventListener('click', reloadQuiz);

        loadQuestion();
    