function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadIssues() {
  const issues = getData("issues");
  const searchTerm = document.getElementById("searchBar").value.toLowerCase();
  const list = document.getElementById("issuesList");
  list.innerHTML = "";

  // Filter issues by search term
  const filtered = issues.filter(issue =>
    issue.summary.toLowerCase().includes(searchTerm) ||
    issue.description.toLowerCase().includes(searchTerm) ||
    (issue.assignedTo && issue.assignedTo.toString().toLowerCase().includes(searchTerm)) ||
    issue.project.toLowerCase().includes(searchTerm)
  );

  // Summary counts
  document.getElementById("issueCount").innerText = `${filtered.length} issues found`;
  document.getElementById("totalIssues").innerText = issues.length;
  document.getElementById("openIssues").innerText = issues.filter(i => i.status === "open").length;
  document.getElementById("resolvedIssues").innerText = issues.filter(i => i.status === "resolved").length;
  document.getElementById("overdueIssues").innerText = issues.filter(i => i.status === "overdue").length;

  // Render issues
  filtered.forEach(issue => {
    list.innerHTML += `
      <div class="issue-card" id="issue-${issue.id}">
        <div class="issue-header">ISS-${issue.id} | ${issue.project}</div>
        <div><strong>Title:</strong> ${issue.summary}</div>
        <div><strong>Status:</strong> ${issue.status}</div>
        <div><strong>Priority:</strong> ${issue.priority}</div>
        <button onclick="toggleDetails(${issue.id})" class="viewAll">View Details</button>
        
        <div class="issue-details" id="details-${issue.id}" style="display:none;">
          <p><strong>Description:</strong> ${issue.description}</p>
          <p><strong>Identified By:</strong> ${issue.identifiedBy || "Not Available"}</p>
          <p><strong>Assigned To:</strong> ${issue.assignedTo || "Unassigned"}</p>
          <p><strong>Date Identified:</strong> ${issue.dateIdentified || "Not Available"}</p>
          <p><strong>Target Resolution Date:</strong> ${issue.targetDate || "Not Available"}</p>
          <p><strong>Resolution Date:</strong> ${issue.resolutionDate || "Not Available"}</p>
          <p><strong>Resolution Summary:</strong> ${issue.resolutionSummary || "Not Available"}</p>

          <div style="text-align:right; margin-top:10px;">
            <button onclick="editIssue(${issue.id})" class="viewAll">Edit</button>
            <button onclick="deleteIssue(${issue.id})" class="viewAll">Delete</button>
          </div>
        </div>
      </div>`;
  });
}

function toggleDetails(id) {
  const details = document.getElementById(`details-${id}`);
  details.style.display = details.style.display === "none" ? "block" : "none";
}

function editIssue(id) {
  const issues = getData("issues");
  const issue = issues.find(i => i.id === id);
  localStorage.setItem("selectedIssue", JSON.stringify(issue));
  window.location.href = "Edit.html";
}

function deleteIssue(id) {
  if (confirm("Are you sure you want to delete this ticket?")) {
    let issues = getData("issues");
    issues = issues.filter(i => i.id !== id);
    setData("issues", issues);
    loadIssues();
  }
}

function openAddBugModal() {
  const modal = new bootstrap.Modal(document.getElementById("addBugModal"));
  modal.show();
}

function saveBug() {
  const summary = document.getElementById("bugSummary").value;
  const description = document.getElementById("bugDescription").value;
  const project = document.getElementById("bugProject").value;
  const identifiedBy = document.getElementById("bugIdentifiedBy").value;
  const priority = document.getElementById("bugPriority").value;
  const dateIdentified = document.getElementById("bugDateIdentified").value;

  if (!summary || !description || !project || !identifiedBy || !dateIdentified) {
    alert("Please fill in all required fields");
    return;
  }

  const issues = getData("issues");
  const newId = issues.length > 0 ? Math.max(...issues.map(i => i.id)) + 1 : 1;

  const newBug = {
    id: newId,
    summary: summary,
    description: description,
    project: project,
    identifiedBy: identifiedBy,
    priority: priority,
    status: "open",
    dateIdentified: dateIdentified,
    targetDate: "",
    resolutionDate: "",
    resolutionSummary: "",
    assignedTo: ""
  };

  issues.push(newBug);
  setData("issues", issues);

  // Clear form and close modal
  document.getElementById("addBugForm").reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById("addBugModal"));
  modal.hide();

  // Reload issues list
  loadIssues();
}

window.onload = loadIssues;



