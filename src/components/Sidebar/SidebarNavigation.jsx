import './SidebarNavigation.css'
import templates from '../../assets/templates.svg'
import search from '../../assets/search.svg'
import favorite from '../../assets/favorite.svg'
import recent from '../../assets/recent.svg'
import board from '../../assets/board.svg'
import privateImg from '../../assets/private.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SidebarNavigation() {
    const [recentSearch, setRecentSearch] = useState(
        [
            "Software Engeneer",
            "Computer Hardware",
            "Something"
        ]
    )

    const [favoriteSearch, setFavoriteSearch] = useState(
        [
            "Database Administrator",
            "Database Administrator","Database Administrator","Database Administrator","Database Administrator","Database Administrator","Database Administrator","Database Administrator","Database Administrator","Database Administrator","Database Administrator","Database Administrator",
            "Something"
        ]
    )
  return (
    <nav className='sidebar-navigation'>
        <ul>
            <li className='category'>
                <div>
                    <img src={templates}/>
                </div>
                <p>Templates</p>                
            </li>
            <li className='category'>
                <div>
                    <img src={search}/>
                </div>
                <p>Search</p>                
            </li>
            {
                favoriteSearch.map(item=>(
                    <li className='search'>
                        <div>
                            ⭐
                        </div>
                        <p>{item}</p>                
                    </li>
                ))
            }
            {
                recentSearch.map(item=>(
                    <li className='search'>
                        <div>
                            <img src={recent}/>
                        </div>
                        <p>{item}</p>                
                    </li>
                ))
            }
            
            <li className='category'>
                <div>
                    <img src={board}/>
                </div>
                <p>My Boards</p> 
                <div className='add-board'>
                    +
                </div>              
            </li>
            <li className='search'>
                <div className='icon'>
                    🗂️
                </div>
                <p>Board 1</p>                
            </li>
            <li className='search'>
                <div className='icon'>
                    🗂️
                </div>
                <p>Board 2</p>                
            </li>
            <li className='search'>
                <div className='icon'>
                    🗂️
                </div>
                <p>Board 3</p>                
            </li>
            <li className='search'>
                <div className='icon'>
                    🔒
                </div>
                <p>Board agent 1</p>                
            </li>
            <li className='search'>
                <div className='icon'>
                    🔒
                </div>
                <p>Board agent 2</p>                
            </li>
            <li className='search'>
                <div className='icon'>
                    🔒
                </div>
                <p>Board agent 3</p>                
            </li>
        </ul>
    </nav>
  )
}
export default SidebarNavigation