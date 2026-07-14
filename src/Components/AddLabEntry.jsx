import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import axios from 'axios'

const AddLabEntry = () => {

    const [input, changeInput] = useState(
        {
            name: "",
            department: "",
            semester: "",
            course: "",
            systemNumber: "",
            loginTime: "",
            logoutTime: "",
            date: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post('http://localhost:3000/add-entry', input).then(
            (response) => {
                console.log(response.data)
                alert("Lab entry added successfully")
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Error adding lab entry")
            }
        )
    }

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">Lab Entry Log</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Department</label>
                                <input type="text" className="form-control" name="department" value={input.department} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Semester</label>
                                <input type="text" className="form-control" name="semester" value={input.semester} onChange={inputHandler} />
                            </div>                         
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control" name="course" value={input.course} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">System Number</label>
                                <input type="number" className="form-control" name="systemNumber" value={input.systemNumber} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Login Time</label>
                                <input type="time" className="form-control" name="loginTime" value={input.loginTime} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Logout Time</label>
                                <input type="time" className="form-control" name="logoutTime" value={input.logoutTime} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date</label>
                                <input type="date" className="form-control" name="date" value={input.date} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-dark" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AddLabEntry