import { Link } from 'react-router-dom'
import AccountDelete from './AccountType/AccountDelete'
import AccountForm from './AccountType/AccountForm'
import AccountOption from './AccountType/AccountOption'
import AccountType from './AccountType/AccountType'
import './PersonnalPage.css'
import Footer from './AccountType/Footer'

function PersonnalPage() {
  return (
    <main>
        <AccountType />
        <AccountForm />
        <AccountOption />
        <AccountDelete />
        <div style={{width:"100%"}}>
          <Link style={{color:"#1688FE",textDecoration:"none"}}>Get in touch with our support team</Link> if you have any question or want to leave some feedback.
          We’ll be happy to hear from you.
        </div>
        <Footer />
    </main>
  )
}
export default PersonnalPage