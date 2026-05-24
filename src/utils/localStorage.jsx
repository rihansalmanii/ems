const employeeData = [
  {
    id: 1,
    firstName: "Rihan",
    email: "rihan@e.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        status: "active",
        taskTitle: "Design Landing Page",
        taskDescription: "Create a modern landing page UI",
        taskDate: "2026-05-10",
        category: "Design",
      },
      {
        status: "completed",
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsive navbar issue",
        taskDate: "2026-05-08",
        category: "Development",
      },
      {
        status: "new",
        taskTitle: "Create Logo",
        taskDescription: "Design a new logo",
        taskDate: "2026-05-12",
        category: "Design",
      },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        status: "active",
        taskTitle: "API Integration",
        taskDescription: "Integrate backend APIs",
        taskDate: "2026-05-11",
        category: "Development",
      },
      {
        status: "failed",
        taskTitle: "Database Setup",
        taskDescription: "Setup MongoDB schema",
        taskDate: "2026-05-07",
        category: "Backend",
      },
    ],
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        status: "active",
        taskTitle: "Write Test Cases",
        taskDescription: "Create unit test cases",
        taskDate: "2026-05-12",
        category: "Testing",
      },
    ],
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        status: "completed",
        taskTitle: "Optimize Images",
        taskDescription: "Reduce image sizes",
        taskDate: "2026-05-06",
        category: "Optimization",
      },
    ],
  },
  {
    id: 5,
    firstName: "Amit",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        status: "active",
        taskTitle: "UI Redesign",
        taskDescription: "Redesign dashboard UI",
        taskDate: "2026-05-14",
        category: "Design",
      },
    ],
  },
];

const adminData = [
  {
    id: 6,
    firstName: "Admin1",
    email: "admin1@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 7,
    firstName: "Admin2",
    email: "admin2@example.com",
    password: "admin123",
    role: "admin",
  },
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employeeData))
    localStorage.setItem('admin', JSON.stringify(adminData))
}

export const getLocalStorage = () => {
    let employees = JSON.parse(localStorage.getItem('employees'))
    let admin = JSON.parse(localStorage.getItem('admin'))
   
    return {employees, admin}
    

}

