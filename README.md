# Todo App

A modern **Todo List application** built with **React** and **Vite**.  
The app allows users to **add, update, and delete todo tasks** with a smooth and responsive interface.


##  Features

-  Add new todo tasks  
-  Update existing todo tasks  
-  Delete todo tasks  
-  Snowfall animation in the background  
-  Fast performance using Vite  
-  Fully responsive UI  


## Tech Stack

- **React** – Frontend library  
- **Vite** – Development and build tool  
- **JavaScript**  
- **CSS** – Styling and animations  



##  Project Structure

```
├── node_modules
├── public
├── src
│ ├── assets
│ ├── components
│ │ ├── index.js
│ │ ├── TodoForm.jsx
│ │ └── TodoItem.jsx
│ ├── context
│ │ ├── index.js
│ │ └── TodoContext.js
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── README.md
````

##  Installation

Follow these steps to set up the project locally:

```bash
git clone https://github.com/shubh-srivastava/Todo_List
cd Todo_List
npm install
````

##  Run the Project (Development Mode)

To start the development server, run:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

The page will automatically reload when you make changes to the source code.

---

##  How the App Works

* Todo tasks are managed using **React state (`useState`)**
* Users can perform **CRUD operations** (Create, Read, Update, Delete)
* Snowfall background animation runs continuously using **npm snowfall**
* Component-based architecture ensures clean and reusable code


##  Future Enhancements

*  Mark todos as completed
*  Save todos using Local Storage
*  Dark mode support
*  Task deadlines and reminders



##  Contributing

Contributions are welcome!
Fork the repository, make your changes, and submit a pull request.
