# Employee Content Management System (CMS)

##Introduction

For our MySQL unit, we were asked to create an employee CMS that allows the user to view all employees in a company, displaying their name, role, department, salary, and manager. Functionality should also allow the user to add employees to the database, and update employee roles and managers. Viewing employees under different criteria was also required, for example, viewing all employees by role or department.

Additionally, our schema was supposed to be made up of three separate tables containing specific information titled employee, role, and department. Creating the MySQL seed file was entirely up to us in an effort to populate the database.

###Technologies

The app's database schema and seeds were created in the MySQL workbench, and the coding was done in VS Code using node.js and JavaScript.

####Demo

Link to a video demoing the finished app:

(https://drive.google.com/open?id=1FPVodPKm8VlCrUICxkv5-pIevFn3Js6r)

#####Status

The program is complete.

A bonus was to create a function that removes employees from the database, but I didn't have enough time to implement this. In the future, I would like to revisit this and include the remove function.

######Sources and Inspiration

I found this to be quite challenging, but really satisfying to work through. I gained a deeper understanding and appreciation of CRUD and joining multiple tables in MySQL.

My favorite bit of code is the inner join that links all three tables in the view all employees feature.

function viewAll() {
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, roles.title, roles.salary, department.department FROM ((employee INNER JOIN roles ON employee.role_id = roles.id) INNER JOIN department ON roles.department_id = department.id)", function (err, res) {
        if (err) 
            throw err;
        
        console.table(res);
        start();
    });
}

It's really wordy and crazy long, but it works!