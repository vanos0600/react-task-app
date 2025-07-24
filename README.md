# React Task App

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Overview

React Task App is a modern, responsive task management application built with React and TypeScript. It allows users to create, manage, and delete tasks efficiently, with role-based tags and status indicators to organize work effectively.

---

## Features

- **Task Management**: Create, view, and delete tasks with ease.
- **Role Tags**: Visual badges indicating task roles (Manager, Developer, Designer).
- **Status Indicators**: Tasks show their progress status (pending, in-progress, done) with distinct colors and status bars.
- **Deadline Display**: Tasks with deadlines show formatted dates.
- **Delete Confirmation**: Prevent accidental deletions with a confirmation step on the delete button.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **TypeScript Support**: Fully typed for safer and maintainable code.
- **Custom Styling**: Includes CSS classes for role and status visual differentiation.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vanos0600/react-task-app.git
   cd react-task-app
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Run the development server:

bash
Copy
Edit
npm run dev
# or
yarn dev
Open your browser and navigate to http://localhost:3000 (or the port specified by the terminal).

Project Structure
graphql
Copy
Edit
src/
├── components/        # React components (e.g., TaskCard)
├── hooks/             # Custom React hooks (e.g., useTasks)
├── types/             # TypeScript types and interfaces
├── utils/             # Utility functions (e.g., localStorage helpers)
├── assets/            # Images and SVGs
├── App.tsx            # Main app component
├── main.tsx           # React app entry point
Usage
Add new tasks and assign them roles and statuses.

View task details including description and deadline.

Use the delete button to remove tasks, with a two-step confirmation to prevent mistakes.

Technologies Used
React 18+

TypeScript

Vite (build tool)

CSS Modules / Tailwind CSS (depending on your setup)

Git for version control

Contributing
Contributions are welcome! Please open issues or submit pull requests for bug fixes and feature requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Oskar Vanegas

GitHub: @vanos0600

LinkedIn: Oskar Vanegas

Contact
If you have any questions or feedback, feel free to reach out via GitHub or LinkedIn.
