
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
  const projectIssues = issues.filter(i => i.project === project.name);

  let issueList = projectIssues.map(i => `ISS-${i.id}`).join(", ");
  if (!issueList) issueList = "No issues";

  document.getElementById("projectDetail").innerHTML = `
    <p><strong>Project ID:</strong> ${project.id}</p>
    <p><strong>Project Name:</strong> ${project.name}</p>
    <p><strong>Issue IDs:</strong> ${issueList}</p>
    <a class="viewAll" onclick="deleteProject(${project.id})">Delete Project</a>
  `;

  const modal = new bootstrap.Modal(document.getElementById("projectModal"));
  modal.show();
}


function showAddProjectModal() {
  const modal = new bootstrap.Modal(document.getElementById("addProjectModal"));
  modal.show();
}

function addProject(name) {
  const projectName = name;
  const projects = getData("projects");
  if (!projectName) {
    alert("Please enter a project name");
    return;
  }

 
  document.getElementById("projectName").value = "";

  const newproject = {
    id: projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1,
    name: projectName
  };

  projects.push(newproject);
  setData("projects", projects);


document.getElementById("addProjectForm").reset();
 const modal = bootstrap.Modal.getInstance(document.getElementById("addProjectModal"));
 modal.hide();

  loadProjects();
}

function deleteProject (id) {
  if (confirm("Are you sure you want to delete this project?")) {
    let projects = getData("projects");
    projects = projects.filter(p => p.id !== id);
    setData("projects", projects);
    loadProjects();
    const modal = bootstrap.Modal.getInstance(document.getElementById("projectModal"));     
    modal.hide();
  }
}

window.onload = loadProjects;