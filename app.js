// Course class: Represent a Course

class Courses {
    constructor(name, ID, credit){
        this.name = name;
        this.IDs = ID;
        this.credit = credit;
    }
}
// UI Class: Handle UI Tasks
class UI{
    static displayCourses(){
        const storedCourses = [
            {
                name: 'Computer Science I ',
                IDs: 'CS-101',
                credit: 4
            },
            {
                name: 'Computer Science II ',
                IDs: 'CS-102',
                credit: 4
            }
        ];

        const courses = storedCourses;

        courses.forEach((courses) => UI.addCourseToList(courses));
    }

    static addCourseToList(courses) {
        const list = document.querySelector('#courses-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <th>${courses.name}</th>
        <th>${courses.IDs}</th>
        <th>${courses.credit}</th>
        <th><button>delete</button></th>
        `;

        list.appendChild(row);
    }
}

// Store Class: Handles Storage

// Event: Display Courses
document.addEventListener('DOMContentLoaded', UI.displayCourses);

// Event: Add a Course

// Event: Remove a Course