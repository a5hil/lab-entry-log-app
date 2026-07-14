import React from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ViewLabEntries = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get('http://localhost:3000/view-entries').then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Error fetching data")
            }
        )
    }

    useEffect(
        () => {
            fetchData()
        },[]
    )

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">View Logs</h2>
            <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Semester</th>
                        <th scope="col">Course</th>
                        <th scope="col">System Number</th>
                        <th scope="col">Login Time</th>
                        <th scope="col">Logout Time</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{value.name}</th>
                                    <td>{value.department}</td>
                                    <td>{value.semester}</td>
                                    <td>{value.course}</td>
                                    <td>{value.systemNumber}</td>
                                    <td>{value.loginTime}</td>
                                    <td>{value.logoutTime}</td>
                                    <td>{value.date}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ViewLabEntries