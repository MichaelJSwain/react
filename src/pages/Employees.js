import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
// import Header from '../components/Header';

function Employees() {
    const [employees, setEmployees] = useState(
        [
            {
                id: uuidv4(),
                name: "Caleb",
                role: "Developer",
                img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                id: uuidv4(),
                name: "Abby",
                role: "Engineer",
                img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                id: uuidv4(),
                name: "John",
                role: "PO",
                img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                id: uuidv4(),
                name: "Caleb",
                role: "Developer",
                img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                id: uuidv4(),
                name: "Abby",
                role: "Engineer",
                img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                id: uuidv4(),
                name: "John",
                role: "PO",
                img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
        ]
    );

    const showEmployees = true;

    const handleUpdateEmployee = (employee) => {
        const updatedEmployees = employees.map(emp => {
            return emp.id === employee.id ? employee : emp;
        });
        setEmployees(updatedEmployees);
    };

    const handleAddEmployee = (name, role, img) => {
        const newEmployee = {
            id: uuidv4(),
            name,
            role,
            img
        };
        setEmployees([...employees, newEmployee]);
    }

    return (
       <>
            {showEmployees ? (
                <>
                    <div className="flex flex-wrap justify-center">
                        {employees.map(employee => {
                            const editEmployee = <EditEmployee employee={employee} handleUpdateEmployee={handleUpdateEmployee}/>
                            return (

                                <Employee 
                                    key={employee.id}
                                    employee={employee}
                                    editEmployee={editEmployee}
                                />
                            )
                        })}
                    </div>

                    <AddEmployee handleAddEmployee={handleAddEmployee}/>
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </>
    );
}

export default Employees;