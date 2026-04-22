
function getData(key) { return JSON.parse(localStorage.getItem(key)) || []; }
function setData(key, data) { localStorage.setItem(key, JSON.stringify(data)); }

function loadProjects() {
  const projects = getData("projects");
  const issues = getData("issues");
  const list = document.getElementById("projectsList");
  list.innerHTML = "";

  projects.forEach(project => {
    const projectIssues = issues.filter(i => i.project == project.name);
    const openCount = projectIssues.filter(i => i.status === "open").length;

    list.innerHTML += `
        <div class="project-card" onclick="showProject(${project.id})">
          <div class="project-card-title">${project.name}</div>
          <div><strong>ID:</strong> ${project.id}</div>
          <div><strong>Total Issues:</strong> ${projectIssues.length}</div>
          <div><strong>Open Issues:</strong> ${openCount}</div>
        </div>`;
  });
}

function showProject(id) {
  const projects = getData("projects");
  const issues = getData("issues");
  const project = projects.find(p => p.id === id);
  const projectIssues = issues.filter(i => i.projectId === id);

  let issueList = projectIssues.map(i => `ISS-${i.id}`).join(", ");
  if (!issueList) issueList = "No issues";

  document.getElementById("projectDetail").innerHTML = `
    <p><strong>Project ID:</strong> ${project.id}</p>
    <p><strong>Project Name:</strong> ${project.name}</p>
    <p><strong>Issue IDs:</strong> ${issueList}</p>
  `;

  const modal = new bootstrap.Modal(document.getElementById("projectModal"));
  modal.show();
}

window.onload = loadProjects;

