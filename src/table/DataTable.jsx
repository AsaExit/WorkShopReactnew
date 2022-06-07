import React, { useState } from "react";


export default function DataTable() {
    // the initial state with objects containing the student data/properties.
    const initialData = [
        { id: 1, firstName: "Dart", lastName: "Vader", age: 100, birthDate: "1921-01-01", country: "Imperial", city: "DeathStar" },
        { id: 2, firstName: "Leia", lastName: "Skywalker", age: 51, birthDate: "1971-02-15", country: "Crait", city: "AL" },
        { id: 3, firstName: "Luke", lastName: "Skywalker", age: 51, birthDate: "1971-01-29", country: "USA", city: "AL" },
        { id: 4, firstName: "Han", lastName: "Solo", age:51 , birthDate: "1971-10-07", country: "Hutt Space ", city: "AL" },
        { id: 5, firstName: "Obi-Wan", lastName: "Kenobi", age: 56, birthDate: "1965-03-17", country: "Tatooine", city: "AL" }
    ];

    const [studentList] = useState(initialData);
    // showDetails state for displaying student details with a boolean,the button onclick function displayData returns a true value and the properties
    const [showDetails, setShowDetails] = useState(false);
    const studentDefaultData = { id: 0, firstName: "", lastName: "", age: 0, birthDate: "", country: "", city: "" }
    const [student, setStudent] = useState(studentDefaultData);
    // functionconponent that returns table header
    const TableHeader = () => {
        return (
            <thead className="table-light">
                <td>Id</td>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Age</td>
                <td>Action</td>
            </thead>
        );
    };


    // functionconponent 
    const TableRow = (props) => {
        return (
            <tbody>
                {
                    props.studentList.map((student) => {
                        const { id, firstName, lastName, age } = student;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{age}</td>
                                <td><TableAction student={student} /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }
    
    // functionconponent action 
    const TableAction = ({ student }) => {
        const displayData = () => {
            setShowDetails(true);
            setStudent(student);
        };
        return <button type="button" className="btn btn-primary" onClick={displayData} >Details</button>
    }
    const ShowStudentDetails = () => {
        const { id, firstName, lastName, country, city, birthDate } = student;
        return (
            <>
                {showDetails &&
                    <div className="card" style={{ width: '400px' }} >
                        <div className="card-header bg-info text-dark">
                            Student Information
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"> {country}: {city}</h5>
                            <p className="card-text">ID: {id}</p>
                            <p className="card-text">Name: {firstName} {lastName}</p>
                            <p className="card-text">BirthDate: {birthDate}</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-info" onClick={() => { setShowDetails(false); setStudent(studentDefaultData) }}>Hide info</button>
                        </div>
                    </div >
                }
            </>
        )
    }

    const Table = ({ children }) => <table className="table table-striped">{children}</table>

    return (
        <div className="container">
            <h3>Student List</h3>
            <Table>
                <TableHeader />
                <TableRow studentList={studentList} />
            </Table>
            <br />
            <ShowStudentDetails />
        </div>
    );


    // functionconponent action 


    // functionconponent 
}