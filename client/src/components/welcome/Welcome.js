import React from 'react'
import axios from 'axios'

const Welcome = ({user, setUser}) => {

const handleLogout = (e) => {
    e.preventDefault();
    axios.get('http://localhost:4000/logout')
        .then((res) => {
            setUser(null)
            // console.log(res.data);
        })
}

    return (
        <div>
            Welcome {user}   
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
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Welcome
