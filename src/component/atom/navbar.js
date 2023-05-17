


import { GiHamburgerMenu } from 'react-icons/gi';
//import { useState } from 'react';
import style from './navbar.module.css';

//   GiHamburgerMenu

const Navbar = () => {
// const [isMobile , setIsMobile ]  = useState(false!)
//     const menuHandler=()=>{
//         return(
//             <div>
//                 <List/>
//             </div>
//         )
//     }

    return (
        <div className={style.navbar}>
            <GiHamburgerMenu/>
        </div>
    )
};
export default Navbar;