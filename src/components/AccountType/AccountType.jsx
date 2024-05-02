import './AccountType.css'
import premium from '../../assets/premium.svg'
function AccountType() {
  return (    
    <section className='accountcontainer'>
        <div className='box-icon'>
          <img src={premium}/>
        </div>
        <div className='box-information'>
            <h1>Premium account</h1>
            <p>You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.</p>      
        </div>
    </section>
  )
}


export default AccountType