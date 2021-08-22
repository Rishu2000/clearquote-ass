import React, {useState} from 'react'
import FormGroup from '../form/FormGroup'

const LoginForm = ({setUser}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className="LoginForm">       {/**Purpose of using onSubmit is when we click enter it will triger. */}
            <h2>Login</h2>
            {[
                {
                    Id: 'Email',
                    Type: 'email',
                    Value: email,
                    Desc:'Enter your Email.',
                    onChange:(e) => setEmail(e.target.value)
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
            <input type="submit" value="Login" className="btn btn-primary"/>
        </form>
    )
}

export default LoginForm
