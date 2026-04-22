function getData(key) { return JSON.parse(localStorage.getItem(key)) || []; }
function setData(key, data) { localStorage.setItem(key, JSON.stringify(data)); }

let editingIssue = null;

function loadIssueForEdit() {
  const issue = JSON.parse(localStorage.getItem("selectedIssue"));
  if (!issue) {
    document.getElementById("editIssueForm").innerHTML = "<p>No issue selected.</p>";
    return;
  }
  editingIssue = issue;

  document.getElementById("issueIdTitle").innerText = `ISS-${issue.id} — ${issue.summary}`;
  document.getElementById("issueSummary").value = issue.summary;
  document.getElementById("issueDesc").value = issue.description;
  document.getElementById("issueProject").value = issue.project;
  document.getElementById("issueIdentifiedBy").value = issue.identifiedBy || "";
  document.getElementById("issueAssignedTo").value = issue.assignedTo || "";
  document.getElementById("issueStatus").value = issue.status;
  document.getElementById("issuePriority").value = issue.priority;
  document.getElementById("issueDateIdentified").value = issue.dateIdentified || "";
  document.getElementById("issueTargetDate").value = issue.targetDate || "";
  document.getElementById("issueResolutionDate").value = issue.resolutionDate || "";
  document.getElementById("issueResolutionSummary").value = issue.resolutionSummary || "";
}

function updateIssue() {
  const issues = getData("issues");
  const idx = issues.findIndex(i => i.id == editingIssue.id);
  if (idx == -1) return;

  issues[idx] = {
    ...editingIssue,
    summary: document.getElementById("issueSummary").value,
    description: document.getElementById("issueDesc").value,
    project: document.getElementById("issueProject").value,
    identifiedBy: document.getElementById("issueIdentifiedBy").value,
    assignedTo: document.getElementById("issueAssignedTo").value,
    status: document.getElementById("issueStatus").value,
    priority: document.getElementById("issuePriority").value,
    dateIdentified: document.getElementById("issueDateIdentified").value,
    targetDate: document.getElementById("issueTargetDate").value,
    resolutionDate: document.getElementById("issueResolutionDate").value,
    resolutionSummary: document.getElementById("issueResolutionSummary").value
  };

  setData("issues", issues);
  alert("Issue updated successfully!");
  window.location.href = "Bugs.html";
}

window.onload = loadIssueForEdit;
