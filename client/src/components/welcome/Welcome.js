import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Welcome = ({user, setUser}) => {

const [users, setUsers] = useState([]);

const handleLogout = (e) => {
    e.preventDefault();
    axios.get('http://localhost:4000/logout')
        .then((res) => {
            setUser(null)
            // console.log(res.data);
        })
}

useEffect(() => {
    axios.get('http://localhost:4000/users')
        .then((res) => {
            setUsers([...res.data]);
        })
}, [])

    return (
        <div>
            Welcome {user}   
            {users? (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,key) => (
                        <tr key={key}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            ): (
                <div className="alert alert-info">Please data are fetching.</div>
            )}
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Welcome
