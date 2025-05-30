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

function checkAnswers() {
  let score = 0;
  const totalQuestions = Object.keys(correctAnswers).length;
  let allAnswered = true;

  // Очистка предыдущих стилей
  for (let question in correctAnswers) {
    document.querySelectorAll(`input[name="${question}"]`).forEach(input => {
      input.closest("label").classList.remove("correct", "incorrect");
    });
  }

  // Проверяем каждый вопрос
  for (let question in correctAnswers) {
    const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
    
    if (!userAnswer) {
      allAnswered = false;
      break;
    }

    if (userAnswer.value === correctAnswers[question]) {
      score++;
      userAnswer.closest("label").classList.add("correct");
    } else {
      userAnswer.closest("label").classList.add("incorrect");
    }
  }

  // Если не все вопросы отвечены — показываем сообщение и выходим
  if (!allAnswered) {
    alert("Пожалуйста, ответьте на все вопросы.");
    return;
  }

  // Рассчитываем процент правильных ответов
  const percentage = (score / totalQuestions) * 100;

  // Отображаем результат
  const resultMessage = document.getElementById("resultMessage");
  const retryButton = document.getElementById("retryButton");

  if (percentage >= 60) {
    resultMessage.textContent = `Вы успешно прошли тест! Ваш результат: ${percentage}%`;
    retryButton.classList.add("hidden"); // Скрываем кнопку "Пройти тест заново"
  } else {
    resultMessage.textContent = `Вы не прошли тест. Ваш результат: ${percentage}%. Попробуйте снова.`;
    retryButton.classList.remove("hidden"); // Показываем кнопку "Пройти тест заново"
  }

  // Всегда показываем результат
  document.getElementById("testResult").classList.remove("hidden");

  // Кнопка "Перейти к следующей лекции" всегда видна, если результат ≥ 60%
  const nextLectureLink = document.getElementById("nextLectureLink");
  nextLectureLink.classList.toggle("hidden", percentage < 60);
}

// Функция сброса теста
function resetTest() {
  document.getElementById("testForm").reset();

  // Прячем блок с результатами
  document.getElementById("testResult").classList.add("hidden");

  // Скрываем кнопку "Пройти тест заново"
  document.getElementById("retryButton").classList.add("hidden");

  // Убираем подсветку с ответов
  for (let question in correctAnswers) {
    document.querySelectorAll(`input[name="${question}"]`).forEach(input => {
      input.closest("label").classList.remove("correct", "incorrect");
    });
  }

  // Плавная прокрутка вверх к началу теста
  const testTop = document.getElementById("testTop");
  testTop.scrollIntoView({ behavior: "smooth" });
}