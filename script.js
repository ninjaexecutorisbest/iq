function checkAnswers() {
  const answers = {
    q1: "32",
    q2: "Car",
    q3: "Pacific"
  };

  let score = 0;
  const form = document.forms["iqForm"];

  for (let key in answers) {
    const selected = form[key].value;
    if (selected === answers[key]) score++;
  }

  const iq = 80 + score * 20; // Basic formula
  document.getElementById("result").innerHTML =
    `You got ${score}/3 correct.<br>Your estimated IQ: <strong>${iq}</strong>`;
}
