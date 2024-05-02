import './AccountOption.css'
import { Link } from 'react-router-dom'
function AccountOption() {
  return (
    <div className="account-option">
        <input type="checkbox" className="option-checkbox"/>
        Show my profile to serious employers on <Link style={{color:"#1688FE",textDecoration:"none"}}>hirethesbest.io</Link> for free
    </div>
  )
}
export default AccountOption