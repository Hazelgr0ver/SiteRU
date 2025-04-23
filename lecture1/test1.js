// Правильные ответы
const correctAnswers = {
    q1: "b",
    q2: "b",
    q3: "a",
    q4: "a",
    q5: "b",
    q6: "a",
    q7: "b",
    q8: "a",
    q9: "a",
    q10: "a"
  };
  
  let isTestPassed = false; // Флаг для отслеживания успешного прохождения теста

// Функция проверки ответов
function checkAnswers() {
  let score = 0;
  const totalQuestions = Object.keys(correctAnswers).length;

  // Проверяем каждый ответ
  for (let question in correctAnswers) {
    const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
    if (userAnswer && userAnswer.value === correctAnswers[question]) {
      score++;
    }
  }

  // Рассчитываем процент правильных ответов
  const percentage = (score / totalQuestions) * 100;

  // Отображаем результат
  const resultMessage = document.getElementById("resultMessage");
  const nextLectureLink = document.getElementById("nextLectureLink");
  const retryButton = document.getElementById("retryButton");

  if (percentage >= 60) {
    resultMessage.textContent = `Вы успешно прошли тест! Ваш результат: ${percentage}%`;
    nextLectureLink.classList.remove("hidden");
    isTestPassed = true; // Устанавливаем флаг успешного прохождения
  } else {
    resultMessage.textContent = `Вы не прошли тест. Ваш результат: ${percentage}%. Попробуйте снова.`;
    retryButton.classList.remove("hidden");
  }

  // Показываем блок с результатами
  document.getElementById("testResult").classList.remove("hidden");
}

function resetTest() {
    // Сбрасываем форму
    document.getElementById("testForm").reset();
  
    // Прячем блок с результатами
    document.getElementById("testResult").classList.add("hidden");
    document.getElementById("retryButton").classList.add("hidden");
  
    // Плавная прокрутка вверх к началу теста
    const testTop = document.getElementById("testTop");
    testTop.scrollIntoView({ behavior: "smooth" });
  
    // Если пользователь уже успешно прошел тест, не скрываем кнопку перехода на вторую лекцию
    const nextLectureLink = document.getElementById("nextLectureLink");
    if (!nextLectureLink.classList.contains("hidden")) {
      // Кнопка уже видима, ничего не делаем
      return;
    }
  }