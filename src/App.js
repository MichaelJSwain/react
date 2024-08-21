import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [role, setRole] = useState('dev');
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

    return (
        <div className="App">
            {showEmployees ? (
                <>
                    <input
                        type="text"
                        onChange={(e) => {
                            console.log(e.target.value);
                            setRole(e.target.value);
                        }}
                    />
                    <div className="flex flex-wrap justify-center">
                        {employees.map(employee => {
                            return (
                                <Employee 
                                    key={employee.id}
                                    employee={employee}
                                    handleUpdateEmployee={handleUpdateEmployee}
                                />
                            )
                        })}
                    </div>
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    );
}

export default App;