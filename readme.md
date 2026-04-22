# BUG_HUNTER

## Overview
**BUG_HUNTER** is a client side bug tracking application to manage software issues
## Technical
**Frontend**: HTML, CSS (Bootstrap)
**Styling**: Custom CSS themed UI components
**State Management**: Browser `localStorage` for persistent data storage across sessions
**Scripting**: Vanilla JavaScript for DOM manipulation and data logic


## Key Functionalities

### 1. Issue Management 
The system tracks several attributes for each bug:
 ID (ISS-1), Project Name, and Summary
Open, Resolved, or Overdue
Low, Medium, High
A real-time filter that checks summaries, descriptions, projects, and assignees

### 2. Developer Integration
The "Bounty Hunters" section links users to their reported or assigned issues:
- Displays name, username, and email.
- **Modal View**: Clicking a developer card opens a Bootstrap modal listing every `ISS-ID` currently assigned to that person.

### 3. Data Persistence
All data is stored as JSON strings in the browser. 
- **Keys used**: `issues`, `people`, and `selectedIssue`

## Final notes
Basic Login
- **USERNAME**: username
- **PASSWORD**: password
- [Hosted site]:https://woifer.github.io/A-bug-tracker/