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
        const storedCourses = Store.getCourses();

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

    static showAlert(){
        const div = document.createElement('div');
        div.className = 'alert';
        div.appendChild(document.createTextNode('Please fill in all the blank'));
        const information = document.querySelector('#information');
        const form = document.querySelector('#myForm');
        information.insertBefore(div, form);
        
        // Vanish in 3 seconds

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

// Store Class: Handles Storage
class Store{
    static getCourses(){
        let course;
        if (localStorage.getItem('courses') === null){
            course = [];
        } else {
            course = JSON.parse(localStorage.getItem('courses'));
        }

        return course;
    }

    static addCourse(course){
        const courses = Store.getCourses();
        courses.push(course);

        localStorage.setItem('courses', JSON.stringify(courses));
    }

    static removeCourse(IDs){
        const courses = Store.getCourses();

        courses.forEach((course, index) => {
            if (course.IDs === IDs){
                courses.splice(index, 1);
            }
        });

        localStorage.setItem('courses', JSON.stringify(courses));

    }
}

// Event: Display Courses
document.addEventListener('DOMContentLoaded', UI.displayCourses);

// Event: Add a Course
document.querySelector('#addCourse').addEventListener('click', (e) => {

    // Get form value
    const name = document.querySelector('#courseName').value;
    const IDs = document.querySelector('#courseID').value;
    const credit = document.querySelector('#courseCredit').value;

    //Validate 
    if (name == '' || IDs == '' || credit == ''){
        UI.showAlert();
    } else {
        // Instantiate a course
        const course = new Courses(name, IDs, credit);

        // Store the course

        Store.addCourse(course);
        //Add course

        UI.addCourseToList(course)

        UI.clearField();
    }


    
});
// Event: Remove a Course
document.querySelector('#courses-list').addEventListener('click', (e) => {
    UI.deleteCourse(e.target);

    // Remove from Store
    Store.removeCourse(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    

})