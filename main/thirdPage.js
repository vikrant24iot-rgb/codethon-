document.addEventListener("DOMContentLoaded", () => {
    //retrieves results from frontpage
  const results = JSON.parse(localStorage.getItem("results")) || [];
  const container = document.getElementById("resultsBox");

    //throw error if no results found
  if (results.length === 0) {
    container.innerHTML = "<p>No results found.</p>";
    return;
  }

  //display results
  results.forEach(r => {
    const div = document.createElement("div");
    div.innerHTML = `
      <b>Scenario:</b> ${r.scenario}<br>
      <b>Scene:</b> ${r.scene}<br>
      <b>Choice:</b> ${r.choice}<br>
      <b>Result:</b> ${r.isWrong ? "❌ Wrong" : "✅ Correct"}
      <hr>
    `;
    container.appendChild(div);
  });
});