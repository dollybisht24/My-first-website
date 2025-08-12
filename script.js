let attempts1 = 0;
let attempts2 = 0;

// Puzzle 1: Number riddle
function checkRiddle1() {
  const input = document.getElementById("riddle1Input");
  const answer = input.value.trim();
  const message = document.getElementById("riddle1Message");
  const hint = document.getElementById("hint1");

  if (answer === "194") {
    alert("🎉 Correct! You solved the number riddle!");
    message.textContent = "🎉 Correct! You solved the number riddle!";
    message.className = "success";
    hint.style.opacity = 0;
  } else {
    attempts1++;
    message.textContent = `❌ Incorrect. You have ${3 - attempts1} attempt(s) left.`;
    message.className = "error";

    if (attempts1 >= 1) {
      hint.style.opacity = 1;
    }

    if (attempts1 >= 3) {
      alert("❌ You're out of attempts!");
      document.getElementById("riddle1Button").disabled = true;
    }
  }
}

// Puzzle 2: Plane crash riddle
function checkRiddle2() {
  const input = document.getElementById("riddle2Input");
  const answer = input.value.trim().toLowerCase();
  const message = document.getElementById("riddle2Message");
  const hint = document.getElementById("hint2");

  if (answer.includes("married") || answer.includes("couple")) {
    alert("🎉 Correct! The married people survived!");
    message.textContent = "🎉 Correct! The married people survived!";
    message.className = "message success";
    hint.style.opacity = 0;
  } else {
    attempts2++;
    message.textContent = `❌ Incorrect. You have ${3 - attempts2} attempt(s) left.`;
    message.className = "message error";

    if (attempts2 >= 1) {
      hint.style.opacity = 1;
    }

    if (attempts2 >= 3) {
      alert("❌ You're out of attempts!");
      document.getElementById("riddle2Button").disabled = true;
    }
  }
}
