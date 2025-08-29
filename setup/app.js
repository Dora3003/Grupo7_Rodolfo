// ------------------ INDEX.HTML ------------------

// Toggle das perguntas (só se houver perguntas na página)
const questions = document.querySelectorAll('.question');
if (questions.length > 0) {
    questions.forEach((question) => {
        const btn = question.querySelector('.question-btn');
        btn.addEventListener('click', () => {
            questions.forEach((item) => {
                if (item !== question) {
                    item.classList.remove('show-text');
                }
            });
            question.classList.toggle('show-text');
        });
    });
}

// Botão "Adicionar pergunta" leva para pergunta.html
const addQuestionButton = document.querySelector('.addQuestionButton');
if (addQuestionButton) {
    addQuestionButton.addEventListener('click', () => {
        window.location.href = 'pergunta.html';
    });
}

// ------------------ PERGUNTA.HTML ------------------

// Formulário de adicionar pergunta
const addQuestionForm = document.querySelector('.addQuestionForm');
if (addQuestionForm) {
    addQuestionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pergunta = addQuestionForm.querySelector('input[name="pergunta"]').value;
        const resposta = addQuestionForm.querySelector('input[name="resposta"]').value;

        window.location.href = './index.html';
    });
}

// Botão "Voltar" leva para index.html
const backPageButton = document.querySelector('.backPageButton');
if (backPageButton) {
    backPageButton.addEventListener('click', () => {
        window.location.href = './index.html';
    });
}
