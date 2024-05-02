import './AccountForm.css'
import profilePicture from '../../assets/49074d9fe7b7bc166a052d452a5445c9.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import checked from '../../assets/check.svg'
function AccountForm() {
    const [data, setData] = useState(
        {
            firstname : "Petter",
            lastname : "Cetera",
            city: "London",
            postalcode: "E2 4XF",
            adress: "123 Example",
            email: "petter@gmail.com",
            phone: "+4223334444",
            password: "Password"
        }
    )
    const [isValide, setIsValide] = useState(false)

    function checkEmail(email){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email)
    }

    useEffect(()=>{
        
        if(checkEmail(data.email)){
            setIsValide(true)
        }
        else{
            setIsValide(false)
        }
    },[data.email])
  return (
    <form className='account-container'
    onSubmit={(e)=>{
        e.preventDefault()
    }}>
        <h2>Personal Information</h2>
        <form className='account-form'>
            <div className='account-input'>
                <label htmlFor='firstname'>First Name</label>
                <input 
                    type='text'
                    value={data.firstname}
                    onChange={(e)=>setData({...data, firstname:e.target.value})}
                />
            </div>
            <div className='account-input'>
                <label htmlFor='lastname'>Last Name</label>
                <input 
                    type='text'
                    value={data.lastname}
                    onChange={(e)=>setData({...data, lastname:e.target.value})}
                />
            </div>
            <div className='account-input'>
                <label htmlFor='city'>City</label>
                <input 
                    type='text'
                    value={data.city}
                    onChange={(e)=>setData({...data, city:e.target.value})}
                />
            </div>
            <div className='account-input'>
                <label htmlFor='postalcode'>Postal Code</label>
                <input 
                    type='text'
                    value={data.postalcode}
                    onChange={(e)=>setData({...data, postalcode:e.target.value})}
                />
            </div>
            <div className='account-input account-input-full'>
                <label htmlFor='adress'>Adress</label>
                <input 
                    type='text'
                    value={data.adress}
                    onChange={(e)=>setData({...data, adress:e.target.value})}
                />
            </div>
            <div className='account-input'>
                <label htmlFor='email'>Email</label>
                <input 
                    type='text'
                    value={data.email}
                    onChange={(e)=>setData({...data, email:e.target.value})}
                />
                {isValide ? <img className='checked-email' src={checked}/> : ""}
            </div>
            <div className='account-input'>
                <label htmlFor='phone'>Phone</label>
                <input 
                    type='text'
                    value={data.phone}
                    onChange={(e)=>setData({...data, phone:e.target.value})}
                />
            </div>
            <div className='account-input'>
                <label htmlFor='name'>Password</label>
                <input 
                    type='text'
                    value={data.password}
                    onChange={(e)=>setData({...data, password:e.target.value})}
                />
                
            </div>
        </form>
        <div className='profile-picture'>
            <img src={profilePicture}/>
        </div>
        <div style={{width:"100%"}}>
            Use this email to log in to your <Link style={{color:"#1688FE",textDecoration:"none"}}>resumedone.io</Link> account and receive notifications.
        </div>
        <button className='account-submit'>
            Save
        </button>
        
    </form>
  )
}
export default AccountForm