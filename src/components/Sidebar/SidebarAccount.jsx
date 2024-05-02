import './SidebarAccount.css'
import profilPicture from '../../assets/49074d9fe7b7bc166a052d452a5445c9.png'
import settings from '../../assets/settings.svg'

function SidebarAccount() {
  return (
    <div className="sidebar-account">
        <img src={profilPicture} className='profil-picture'/>
        <p>Carla</p>
        <img src={settings}/>
    </div>
  )
}
export default SidebarAccount