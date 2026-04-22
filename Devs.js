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
  const assignedIssues = issues.filter(i => i.assignedTo == person.name+' '+person.surname);

  let issueList = assignedIssues.map(i => `ISS-${i.id}: ${i.summary}`).join("<br>");
  if (!issueList) issueList = "No issues assigned";

  document.getElementById("personDetail").innerHTML = `
    <p><strong>Person ID:</strong> ${person.id}</p>
    <p><strong>Name:</strong> ${person.name} ${person.surname}</p>
    <p><strong>Issues:</strong><br>${issueList}</p>
    <a class="viewAll" onclick="deleteDeveloper(${person.id})">Delete Developer</a>
  `;

  const modal = new bootstrap.Modal(document.getElementById("personModal"));
  modal.show();
}

function showAddDevModal() {
  const modal = new bootstrap.Modal(document.getElementById("addDevModal"));
  modal.show();
}
function addDeveloper(name, surname, email, username) {
  if (!name || !surname || !email || !username) {
    alert("Please fill in all fields");
    return;
  }
  const people = getData("people");
  const newPerson = {
    id: people.length > 0 ? Math.max(...people.map(p => p.id)) + 1 : 1,
    name: name,
    surname: surname,
    email: email,
    username: username
  };
  people.push(newPerson);
  setData("people", people);
  loadPeople();
  
  document.getElementById("addDevForm").reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById("addDevModal"));     
  modal.hide();
}

function deleteDeveloper(id) {
  if (confirm("Are you sure you want to delete this developer?")) {
  let people = getData("people");
  people = people.filter(p => p.id !== id);
  setData("people", people);
  loadPeople();
   const modal = bootstrap.Modal.getInstance(document.getElementById("personModal"));     
    modal.hide();
}
}
window.onload = loadPeople;


