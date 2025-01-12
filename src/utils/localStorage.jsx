
const Employees = [
  {
    "id": 1,
    "name": "Amit",
    "email": "e@e.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newTask": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Develop Login Page",
        "taskDescription": "Create a secure login page with validation.",
        "taskDate": "2025-01-12",
        "category": "Development"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Fix API Bugs",
        "taskDescription": "Debug and resolve issues in API endpoints.",
        "taskDate": "2025-01-10",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 2,
    "name": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "completed": 0,
      "newTask": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Create Dashboard",
        "taskDescription": "Design an interactive dashboard for analytics.",
        "taskDate": "2025-01-13",
        "category": "UI/UX"
      },
      {
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true,
        "taskTitle": "Optimize Database",
        "taskDescription": "Improve database query performance.",
        "taskDate": "2025-01-05",
        "category": "Database"
      },
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Setup CI/CD",
        "taskDescription": "Configure a continuous integration and deployment pipeline.",
        "taskDate": "2025-01-14",
        "category": "DevOps"
      }
    ]
  },
  {
    "id": 3,
    "name": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newTask": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Document API",
        "taskDescription": "Prepare API documentation for developers.",
        "taskDate": "2025-01-08",
        "category": "Documentation"
      },
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Enhance Security",
        "taskDescription": "Implement advanced security protocols.",
        "taskDate": "2025-01-15",
        "category": "Security"
      }
    ]
  },
  {
    "id": 4,
    "name": "Meena",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "completed": 1,
      "newTask": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Run Load Tests",
        "taskDescription": "Conduct performance testing under high load.",
        "taskDate": "2025-01-12",
        "category": "Testing"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Update Documentation",
        "taskDescription": "Revise outdated project documentation.",
        "taskDate": "2025-01-09",
        "category": "Documentation"
      },
      {
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true,
        "taskTitle": "Resolve UI Issues",
        "taskDescription": "Fix bugs in the user interface.",
        "taskDate": "2025-01-06",
        "category": "UI/UX"
      },
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Design Landing Page",
        "taskDescription": "Create a responsive landing page.",
        "taskDate": "2025-01-18",
        "category": "Design"
      }
    ]
  },
  {
    "id": 5,
    "name": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "completed": 1,
      "newTask": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Set Up Servers",
        "taskDescription": "Deploy and configure production servers.",
        "taskDate": "2025-01-16",
        "category": "DevOps"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Review Codebase",
        "taskDescription": "Perform a thorough code review for potential issues.",
        "taskDate": "2025-01-11",
        "category": "Code Review"
      },
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Implement Search Feature",
        "taskDescription": "Add a search functionality to the web app.",
        "taskDate": "2025-01-14",
        "category": "Development"
      }
    ]
  }
];

const Admin = [
  {
    "id": 1,
    "name": "Ravi",
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStroge = ()=>{
    localStorage.setItem('employees',JSON.stringify(Employees))
    localStorage.setItem('admin',JSON.stringify(Admin))
}

export const getLocalStroge = ()=>{
   const employees = JSON.parse((localStorage.getItem('employees')))
   const admin = JSON.parse((localStorage.getItem('admin')))
   return{employees,admin}
}

