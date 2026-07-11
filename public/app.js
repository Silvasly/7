async function loadAzureFeatures() {
  const response = await fetch('/api/azure-features');
  const features = await response.json();
  const grid = document.getElementById('feature-grid');

  grid.innerHTML = features
    .map(
      (feature) => `
        <article class="card">
          <h3>${feature.title}</h3>
          <p>${feature.summary}</p>
          <strong>${feature.level}</strong>
        </article>
      `
    )
    .join('');
}

async function loadArchitecture() {
  const response = await fetch('/api/architecture');
  const architecture = await response.json();
  const list = document.getElementById('architecture-list');

  list.innerHTML = `
    <h3>${architecture.title}</h3>
    ${architecture.steps
      .map((step) => `<article><p>${step}</p></article>`)
      .join('')}
  `;
}

const quizButton = document.getElementById('quiz-btn');
const quizAnswer = document.getElementById('quiz-answer');

quizButton?.addEventListener('click', () => {
  quizAnswer.classList.toggle('hidden');
  quizButton.textContent = quizAnswer.classList.contains('hidden') ? 'Reveal answer' : 'Hide answer';
});

loadAzureFeatures();
loadArchitecture();
