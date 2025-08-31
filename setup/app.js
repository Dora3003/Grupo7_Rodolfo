// ------------------ INDEX.HTML ------------------

// Toggle das perguntas (funciona também para perguntas dinâmicas)
const sectionCenter = document.querySelector(".section-center");
if (sectionCenter) {
  sectionCenter.addEventListener("click", (e) => {
    const btn = e.target.closest(".question-btn");
    if (!btn) return;
    const question = btn.closest(".question");

    // fecha os outros
    sectionCenter.querySelectorAll(".question").forEach((item) => {
      if (item !== question) item.classList.remove("show-text");
    });

    question.classList.toggle("show-text");
  });
}

// Botão "Adicionar pergunta" leva para pergunta.html
document.querySelector(".addQuestionButton")?.addEventListener("click", () => {
  window.location.href = "pergunta.html";
});

// ------------------ PERGUNTA.HTML ------------------

// armazena as perguntas no localstorage
const storage = "questions";

const readQuestions = () => JSON.parse(localStorage.getItem(storage) || "[]");
const saveQuestions = (array) => localStorage.setItem(storage, JSON.stringify(array));
const pushQuestion = (item) => saveQuestions([...readQuestions(), item]);

// botão "Voltar" volta para o index.html
document.querySelector(".backPageButton")?.addEventListener("click", () => {
  window.location.href = "./index.html";
});

// formulário de adicionar pergunta
const addQuestionForm = document.querySelector(".addQuestionForm");
addQuestionForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const pergunta = addQuestionForm.querySelector('input[placeholder="Pergunta"]')?.value.trim();
  const resposta = addQuestionForm.querySelector('input[placeholder="Resposta"]')?.value.trim();

  if (!pergunta || !resposta) return alert("Preencha a pergunta e a resposta!");

  pushQuestion({ id: Date.now(), pergunta, resposta });
  window.location.href = "./index.html";
});

// renderiza perguntas na index.html
if (sectionCenter) {
  readQuestions().forEach(({ id, pergunta, resposta }) => {
    const article = document.createElement("article");
    article.className = "question";
    article.dataset.id = id;
    article.innerHTML = `
      <div class="question-title">
        <p>${pergunta}</p>
        <button type="button" class="question-btn">
          <span class="plus-icon"><i class="far fa-plus-square"></i></span>
          <span class="minus-icon"><i class="far fa-minus-square"></i></span>
        </button>
      </div>
      <div class="question-text">
        <p>${resposta}</p>
      </div>
    `;
    sectionCenter.appendChild(article);
  });
}
