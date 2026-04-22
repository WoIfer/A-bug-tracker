// Seed sample people into localStorage if not already present
if (!localStorage.getItem("people")) {
  localStorage.setItem("people", JSON.stringify([
    {
      id: 1,
      name: "Alice",
      surname: "Johnson",
      email: "alice@devteam.com",
      username: "alicej"
    },
    {
      id: 2,
      name: "Bob",
      surname: "Smith",
      email: "bob@devteam.com",
      username: "bobsmith"
    },
    {
      id: 3,
      name: "Carol",
      surname: "Williams",
      email: "carol@devteam.com",
      username: "carolw"
    },
    {
      id: 4,
      name: "David",
      surname: "Brown",
      email: "david@devteam.com",
      username: "davidb"
    },
    {
      id: 5,
      name: "Eva",
      surname: "Martinez",
      email: "eva@devteam.com",
      username: "evam"
    }
  ]));
}

// Seed sample projects into localStorage if not already present
if (!localStorage.getItem("projects")) {
  localStorage.setItem("projects", JSON.stringify([
    {
      id: 1,
      name: "E-Commerce Platform"
    },
    {
      id: 2,
      name: "Mobile Banking App"
    },
    {
      id: 3,
      name: "CRM Dashboard"
    },
    {
      id: 4,
      name: "Internal HR Portal"
    }
  ]));
}

// Sample data for issues
if (!localStorage.getItem("issues")) {
  localStorage.setItem("issues", JSON.stringify([
    {
      id: 1,
      project: "E-Commerce Platform",
      summary: "Login page crashes on invalid email format",
      description: "Unhandled exception when email lacks '@'.",
      dateIdentified: "2026-03-01",
      assignedTo: "Bob Smith",
      status: "open",
      priority: "high"
    },
    {
      id: 2,
      project: "E-Commerce Platform",
      summary: "Product images not loading on Safari",
      description: "WebP images fail on Safari <16. No fallback implemented.",
      dateIdentified: "2026-03-05",
      assignedTo: "Alice Johnson",
      status: "resolved",
      priority: "medium"
    },
    {
      id: 3,
      project: "E-Commerce Platform",
      summary: "Payment gateway timeout during peak hours",
      description: "Stripe API calls timeout after 30s during peak traffic.",
      dateIdentified: "2026-02-28",
      assignedTo: "David Brown",
      status: "overdue",
      priority: "high"
    },
    {
      id: 4,
      project: "Mobile Banking App",
      summary: "Balance display shows negative values",
      description: "After a refund transaction, balance temporarily shows negative before correcting.",
      dateIdentified: "2026-03-10",
      assignedTo: "Unassigned",
      status: "open",
      priority: "high"
    },
    {
      id: 5,
      project: "Mobile Banking App",
      summary: "Push notifications not received on Android 14",
      description: "Users on Android 14+ not receiving push notifications due to permission changes.",
      dateIdentified: "2026-03-12",
      assignedTo: "Eva Martinez",
      status: "resolved",
      priority: "medium"
    },
    {
      id: 6,
      project: "Mobile Banking App",
      summary: "Biometric login fails after app update",
      description: "Fingerprint and Face ID stop working after update. Users forced to use PIN.",
      dateIdentified: "2026-03-15",
      assignedTo: "Unassigned",
      status: "open",
      priority: "low"
    },
    {
      id: 7,
      project: "CRM Dashboard",
      summary: "Dashboard charts render incorrectly on Firefox",
      description: "Bar chart labels misaligned and tooltips overlap on Firefox 120+.",
      dateIdentified: "2026-03-18",
      assignedTo: "Alice Johnson",
      status: "overdue",
      priority: "medium"
    },
    {
      id: 8,
      project: "CRM Dashboard",
      summary: "Contact search returns duplicate results",
      description: "Searching by name returns duplicates when contact appears in multiple pipelines.",
      dateIdentified: "2026-03-20",
      assignedTo: "David Brown",
      status: "resolved",
      priority: "low"
    },
    {
      id: 9,
      project: "Internal HR Portal",
      summary: "Employee leave form not saving draft",
      description: "Leave request draft lost when navigating away. Auto-save not implemented.",
      dateIdentified: "2026-03-22",
      assignedTo: "Unassigned",
      status: "open",
      priority: "medium"
    },
    {
      id: 10,
      project: "Internal HR Portal",
      summary: "Payslip PDF generation shows wrong tax bracket",
      description: "Payslip PDFs use outdated tax brackets from 2025 instead of 2026.",
      dateIdentified: "2026-04-01",
      assignedTo: "Eva Martinez",
      status: "open",
      priority: "high"
    },
    {
      id: 11,
      project: "E-Commerce Platform",
      summary: "Cart total doesn't update when quantity changes",
      description: "Changing item quantity does not recalc subtotal/total until item removed.",
      dateIdentified: "2026-04-05",
      assignedTo: "Eva Martinez",
      status: "open",
      priority: "medium"
    },
    {
      id: 12,
      project: "Mobile Banking App",
      summary: "Transfer history pagination broken",
      description: "Load More button stops working after third page. API returns 200 OK but empty.",
      dateIdentified: "2026-04-08",
      assignedTo: "David Brown",
      status: "open",
      priority: "low"
    }
  ]));
}

function getData(key) { return JSON.parse(localStorage.getItem(key)) || []; }
function setData(key, data) { localStorage.setItem(key, JSON.stringify(data)); }
