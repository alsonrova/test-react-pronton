import './SidebarTitle.css'
import logo from '../../assets/react.svg'
function SidebarTitle() {
  return (
    <div className='sidebar-title-container'>
          <img src={logo}/>
          <h1>
            Resumizeme
          </h1>
    </div>
  )
}
export default SidebarTitle