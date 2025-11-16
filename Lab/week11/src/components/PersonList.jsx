import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PersonList() {
    const [persons, setPersons] = useState([]);

    const fetchPersons = () => {
        axios.get("https://randomuser.me/api/?results=10")
            .then(response => {
                console.log(response.data);
                setPersons(response.data.results);
            })
            .catch(error => {
                console.error("There was an error fetching the persons!", error);
            });
    };

    useEffect(fetchPersons, []);

    return (
        <div>
            <h3>Person List</h3>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((p, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img src={p.picture.thumbnail}></img></td>
                            <td>{p.name.first}</td>
                            <td>{p.name.last}</td>
                            <td>{p.email}</td>
                            <td>{p.location.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
