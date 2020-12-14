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
        const storedCourses = [];

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
        <th><button class='delete'>delete</button></th>
        `;

        list.appendChild(row);
    }

    static clearField(){
        document.querySelector('#myForm').reset();
    }

    static deleteCourse(target){
        if(target.classList.contains('delete')){
            target.parentElement.parentElement.remove();
        }
    }
}

// Store Class: Handles Storage

// Event: Display Courses
document.addEventListener('DOMContentLoaded', UI.displayCourses);

// Event: Add a Course
document.querySelector('#addCourse').addEventListener('click', (e) => {

    // Get form value
    const name = document.querySelector('#courseName').value;
    const IDs = document.querySelector('#courseID').value;
    const credit = document.querySelector('#courseCredit').value;

    // Instantiate a course
    const course = new Courses(name, IDs, credit);

    //Add course

    UI.addCourseToList(course)

    UI.clearField();
});
// Event: Remove a Course
document.querySelector('#courses-list').addEventListener('click', (e) => {
    UI.deleteCourse(e.target);
})