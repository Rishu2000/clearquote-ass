import React, {useState} from 'react'
import FormGroup from '../form/FormGroup'

const RegForm = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')

    return (
        <form className="LoginForm">       {/**Purpose of using onSubmit is when we click enter it will triger. */}
            <h2>Register</h2>
            {[
                {
                    Id: 'Name',
                    Type: 'text',
                    Value: name,
                    Desc:'Enter your Name.',
                    onChange:(e) => setName(e.target.value)
                },{
                    Id: 'Email',
                    Type: 'email',
                    Value: email,
                    Desc:'Enter your Email.',
                    onChange:(e) => setEmail(e.target.value)
                },{
                    Id: 'Phone Number',
                    Type: 'tel',
                    Value: phoneNo,
                    Desc:'Enter your Phone Number.',
                    onChange:(e) => setPhoneNo(e.target.value)
                },{
                    Id: 'Password',
                    Type: 'password',
                    Value: password,
                    Desc:'Enter your Password.',
                    onChange:(e) => setPassword(e.target.value)
                }
            ].map((input,key) => (
                <FormGroup {...input} key={key} Label={input.Id}/>
            ))
            }
            <input type="submit" value="Register" className="btn btn-primary"/>
        </form>
    )
}

export default RegForm
