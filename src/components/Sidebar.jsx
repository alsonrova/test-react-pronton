import './Sidebar.css';
import SidebarTitle from './Sidebar/SidebarTitle';
import SidebarNavigation from './Sidebar/SidebarNavigation';
import SidebarAccount from './Sidebar/SidebarAccount';

function Sidebar() {
  return (
    <aside>
        <SidebarTitle />
        <SidebarNavigation />
        <SidebarAccount />
    </aside>
  )
}
export default Sidebar