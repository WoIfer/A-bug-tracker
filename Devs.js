function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadPeople() {
  const people = getData("people");
  const list = document.getElementById("peopleList");
  list.innerHTML = "";

  people.forEach(person => {
    list.innerHTML += `
        <div class="person-card" onclick="showPerson(${person.id})">
          <h5>${person.name} ${person.surname}</h5>
          <p>@${person.username}</p>
          <p>${person.email}</p>
        </div>`;
  });
}

function showPerson(id) {
  const people = getData("people");
  const issues = getData("issues");

  const person = people.find(p => p.id === id);
  const assignedIssues = issues.filter(i => i.assignedTo === id);

  let issueList = assignedIssues.map(i => `ISS-${i.id}: ${i.summary}`).join("<br>");
  if (!issueList) issueList = "No issues assigned";

  document.getElementById("personDetail").innerHTML = `
    <p><strong>Person ID:</strong> ${person.id}</p>
    <p><strong>Name:</strong> ${person.name} ${person.surname}</p>
    <p><strong>Issues:</strong><br>${issueList}</p>
  `;

  const modal = new bootstrap.Modal(document.getElementById("personModal"));
  modal.show();
}

window.onload = loadPeople;


