document.addEventListener("DOMContentLoaded", function () {

  const button = document.getElementById("analyzeBtn");
  const resultBox = document.getElementById("result");

  button.addEventListener("click", function () {

    const selectedSkills = [];
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    checkboxes.forEach((checkbox) => {
      selectedSkills.push(checkbox.value);
    });

    if (selectedSkills.length === 0) {
      resultBox.innerHTML = "⚠️ Please select at least one skill.";
      return;
    }

    let suggestion = "";

    if (!selectedSkills.includes("JavaScript")) {
      suggestion += "👉 Learn JavaScript for better frontend skills.<br>";
    }

    if (selectedSkills.includes("HTML") && selectedSkills.includes("CSS") && selectedSkills.includes("JavaScript") && !selectedSkills.includes("React")) {
      suggestion += "👉 You are ready to learn React!<br>";
    }

    if (!selectedSkills.includes("Python")) {
      suggestion += "👉 Consider learning Python for backend & AI.<br>";
    }

    if (suggestion === "") {
      suggestion = "🔥 You are on a strong learning path. Keep building projects!";
    }

    resultBox.innerHTML = suggestion;

  });

});
