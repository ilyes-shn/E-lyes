import React from 'react'
import Link from 'next/link'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


const Login = () => {
    

    return (
        <div style={{background:"url('amazon.jpg')", backgroundSize: 'cover' ,height:'100vh',width:'100%' ,display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            <img className='log-img' src="elyes.png" alt="amazon logo"/>
            <Link href='/'>
            <ArrowBackOutlinedIcon style={{color: 'white', fontSize: '40px', position: 'absolute', left: '30px', top: '20px', cursor: 'pointer'}}/>
            </Link>
            <form >
            <AccountCircleOutlinedIcon style={{fontSize: '30px'}}/>
            <TextField required id="standard-basic" label="Email" style={{marginTop:'15px'}} />
            <TextField required id="standard-basic" label="Password" type="password" style={{marginTop:'15px'}}/>
            <p>By continuing, you agree to Elyes's Conditions of Use and Privacy Notice. </p>
            <div className="btn">
            <Button style={{margin: '0px 20px'}} variant="contained">Sign up</Button>
            <Button style={{margin: '0px 20px'}} variant="contained" color="primary">Log in</Button>
            </div>
            </form>
            

            <style jsx>{`
            .log{
                backgound: #071a52;
            }

            h1 {
                width: 100%;
            }

            form {
                display: flex;
                flex-direction: column;
                width: 300px;
                background: rgba(255,255,255,0.5);
                padding: 20px;
                border-radius: 10px;
                margin-top: 50px;
            }
            
            img {
                position: absolute;
                top: 30px;
                width: 250px;
            }

            .btn {
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 40px;
            }

            p {
                margin-top: 30px;
                opacity: 0.6;
            }

            
            }
            `}
            </style>
        </div>
    )
}




export default Login
