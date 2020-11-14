import React from 'react'
import Link from 'next/link'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {useData} from '../Context'
import {auth} from '../fireConfig'

const Nav = () => {
  const [{basket,user},dispach] = useData()
  const logOut = () => {
    auth.signOut()
    dispach({
      type: 'user',
      user: null
    })
  }
    return (
        <div>
            <div className='nav'>
                <Link href='/'>
                <div >
                    <img className="nav-img" src="elyes.png" alt="Amazon logo" />
                </div>
                </Link>
                <div className="input">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search ..."/>
                </div>
                <div className="options">
                  {
                    user ? (<p style={{color: 'white',padding: '3px 5px',borderRadius: '5px', background: 'grey', cursor: 'pointer'}} onClick={logOut}>Log out</p>) : (<Link href='login'>
                    <div className='account'>
                        <p>Hello</p>
                        <p>Sign In</p>
                    </div>
                    </Link>)
                  }



                    <Link href='/cart'>
                    <div className='cart'>
                        <ShoppingCartOutlinedIcon style={{color:'white', margin: '0px 5px'}} />
                        <span><strong>{basket.length}</strong></span>
                    </div>
                    </Link>
                </div>
            </div>
    <style jsx>{`
    .nav {
        width: 100%;
        height: 50px;
        background: #071a52;
        position: fixed;
        top: 0;
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;
    }

    .nav img {
        height: 45px;
        margin-top: 5px;
        padding-right: 5px;
        cursor: pointer;
    }

    .input {
        display: flex;
        align-items: center;
        background-color: rgba(255,255,255,0.6);
        height: 65%;
        width: 60%;
        padding: 0px 10px;
        border-radius: 20px;
        flex: 1;
    }

    input {
        background-color: transparent;
        border: none;
        outline: none;
        height: 100%;
        font-size: 15px;
        padding: 10px;
        width: 100%;
    }

    span {
        color: white;
    }

    .options {
        display: flex;
        margin: 0px 5px
    }

    .cart {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
    }

    .cart span {
        background: red;
        line-height: 15px;
        padding: 0px 2px;
        border-radius: 5px;
        font-size: 13px;
        position: absolute;
        text-align: center;
        top: -1px;
        right: -5px;
    }

    .account {
        color: white;
        font-size: 15px;
        line-height: 17px;
        margin: 0px 10px;
        cursor: pointer;
    }

    `}</style>
        </div>
    )
}

export default Nav
