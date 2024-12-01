const patients = [];
document.getElementById("patient-form").addEventListener("submit", function (e) {
  e.preventDefault();  
  const name = document.getElementById("name").value.trim();
  const idNumber = document.getElementById("id-number").value.trim();
  const history = document.getElementById("history").value.trim();
  if (name && idNumber) {
    const newPatient = { name, idNumber, history };
    patients.push(newPatient);
    alert("Patient registered successfully!");
    displayPatients();
    this.reset();
  } else {
    alert("Please fill in all required fields.");
  }
});
function displayPatients() {
  const patientList = document.getElementById("patients");
  patientList.innerHTML = "";
  patients.forEach((patient, index) => {
    const li = document.createElement("li");
    li.classList.add("patient-card");
    li.innerHTML = `
      <h3>${patient.name}</h3>
      <p><strong>ID Number:</strong> ${patient.idNumber}</p>
      <p><strong>Medical History:</strong> ${patient.history || "No history available"}</p>
    `;
    patientList.appendChild(li);
  });
}
document.getElementById("search").addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  const results = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.idNumber.includes(query)
  );

  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = "";
  results.forEach((patient) => {
    const div = document.createElement("div");
    div.classList.add("patient-card");
    div.innerHTML = `
      <h3>${patient.name}</h3>
      <p><strong>ID Number:</strong> ${patient.idNumber}</p>
      <p><strong>Medical History:</strong> ${patient.history || "No history available"}</p>
    `;
    searchResults.appendChild(div);
  });
});