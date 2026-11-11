
// Простая викторина

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

// запуск викторины
function startQuiz() {
    let correctCount = 0;
    for (let i = 0; i < quiz.length; i++) {
        let message = quiz[i].question + '\n' + quiz[i].options.join('\n');
        let answer = prompt(message);

        if (Number(answer) === quiz[i].correctAnswer) {
            correctCount++;
        }
    }

    alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов!`);
}

document.getElementById('game-quiz').addEventListener('click', function (event) {
    event.preventDefault();
    startQuiz();
});