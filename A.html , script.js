<!DOCTYPE html>
<html>
  <head>
    <title>Calculator</title>
  </head>
 <body>
  <script src="script.js"></script>
 </body>
</html>


// Body style
document.body.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
document.body.style.margin = "0";
document.body.style.height = "100vh"; // Full viewport height
document.body.style.display = "flex";
document.body.style.justifyContent = "center"; // Center horizontally
document.body.style.alignItems = "center"; // Center vertically

// Main container for heading + calculator + history
const mainContainer = document.createElement("div");
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.alignItems = "center";
document.body.appendChild(mainContainer);

// Heading
const heading = document.createElement("h1");
heading.textContent = "Calculator";
heading.style.fontFamily = "Arial";
heading.style.fontSize = "2.5rem";
heading.style.color = "black";
heading.style.textAlign = "center";
heading.style.marginBottom = "20px";
heading.style.textShadow = "2px 2px 5px rgba(0,0,0,0.3)";
mainContainer.appendChild(heading);

// Calculator container
const calculator = document.createElement("div");
calculator.style.width = "320px";
calculator.style.padding = "20px";
calculator.style.borderRadius = "15px";
calculator.style.background = "#ffffff";
calculator.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.2)";
calculator.style.display = "flex";
calculator.style.flexDirection = "column";
calculator.style.alignItems = "center";
mainContainer.appendChild(calculator);

// Display
const display = document.createElement("input");
display.type = "text";
display.style.width = "100%";
display.style.height = "60px";
display.style.fontSize = "2rem";
display.style.textAlign = "right";
display.style.marginBottom = "15px";
display.style.border = "none";
display.style.borderRadius = "10px";
display.style.padding = "10px";
display.style.background = "#f3f4f6";
display.style.boxShadow = "inset 2px 2px 5px #cfd8dc, inset -2px -2px 5px #ffffff";
display.readOnly = true;
calculator.appendChild(display);

// Buttons container
const btnContainer = document.createElement("div");
btnContainer.style.display = "grid";
btnContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
btnContainer.style.gap = "10px";
calculator.appendChild(btnContainer);

// Updated buttons array with Clear & Backspace
const buttons = [
    "C", "⌫", "÷", "×",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", "."
];

// HISTORY container
const historyContainer = document.createElement("div");
historyContainer.style.width = "320px";
historyContainer.style.maxHeight = "200px";
historyContainer.style.marginTop = "20px";
historyContainer.style.background = "#ffffff";
historyContainer.style.borderRadius = "10px";
historyContainer.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.1)";
historyContainer.style.overflowY = "auto";
historyContainer.style.padding = "10px";
mainContainer.appendChild(historyContainer);

const historyTitle = document.createElement("h2");
historyTitle.textContent = "History";
historyTitle.style.fontFamily = "Arial";
historyTitle.style.fontSize = "1.2rem";
historyTitle.style.color = "#333";
historyTitle.style.marginBottom = "10px";
historyTitle.style.textAlign = "center";
historyContainer.appendChild(historyTitle);

const historyList = document.createElement("div");
historyContainer.appendChild(historyList);

// Create buttons
buttons.forEach(text => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.style.width = "60px";
    btn.style.height = "60px";
    btn.style.fontSize = "1.5rem";
    btn.style.border = "none";
    btn.style.borderRadius = "10px";
    btn.style.cursor = "pointer";
    btn.style.transition = "0.2s";

    // Style based on type
    if (!isNaN(text) || text === ".") {
        btn.style.background = "#ffffff";
        btn.style.boxShadow = "2px 2px 5px #cfd8dc, -2px -2px 5px #ffffff";
    } else if (text === "=") {
        btn.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
        btn.style.color = "#fff";
        btn.style.fontWeight = "bold";
    } else if (text === "C" || text === "⌫") {
        btn.style.background = "linear-gradient(135deg, #fbc2eb, #a6c1ee)";
        btn.style.color = "#fff";
        btn.style.fontWeight = "bold";
    } else {
        btn.style.background = "linear-gradient(135deg, #a1c4fd, #c2e9fb)";
        btn.style.fontWeight = "bold";
    }

    // Hover effect
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });

    // Click events
    btn.addEventListener("click", () => {
        if (text === "C") {
            display.value = "";
        } else if (text === "⌫") {
            display.value = display.value.slice(0, -1);
        } else if (text === "=") {
            try {
                let expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
                let result = eval(expression);
                // Add to history
                const historyItem = document.createElement("div");
                historyItem.textContent = `${display.value} = ${result}`;
                historyItem.style.fontFamily = "monospace";
                historyItem.style.fontSize = "1rem";
                historyItem.style.color = "#444";
                historyItem.style.borderBottom = "1px solid #eee";
                historyItem.style.padding = "5px 0";
                historyList.prepend(historyItem); // Add latest on top
                display.value = result;
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += text;
        }
    });

    btnContainer.appendChild(btn);
});
