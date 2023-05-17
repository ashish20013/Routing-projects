import Logo from '../../atom/logo';
import List from '../../atom/list';
import Navbar from '../../atom/navbar';

import style from './header.module.css';

const Header =()=>{

  

    
    return(
        <div className={style.header}>
        <div className={style.logoss}><Logo/></div>
        <div className={style.lists}><List/></div>
        <div className={style.nav}><Navbar /></div>
        </div>
    )
};
export default Header;