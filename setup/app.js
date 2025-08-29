const addQuestionForm = document.querySelector('.addQuestionForm');
const backPage = document.getElementById('backPage');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});

// intercepta o submit do form
addQuestionForm.addEventListener('submit', function (e) {
    e.preventDefault();
    window.location.href = 'pergunta.html';
});

backPage.addEventListener('click', function () {
    window.location.href = 'index.html';
});
