 //import style from './list.module.css'

 import {Link} from 'react-router-dom'

// const List = () => {
//     const lists = ["Home","Resister ", "Login", "About Us"]

//     return (
       
// lists.map((value)=>{
//     return(
//     <nav className={style.list}>{value}</nav>
//     )
// })
//     )
// };
// export default List;
//<Link to="/home">Home</Link>

//---------------------------------------------------------------

const List =()=>{
    return(
        <nav  >
            <ul  >
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/resister">Resister</Link>
                </li>
                <li>
                    <Link to ="/login">Login</Link>
                </li>
                <li>
                    <Link to ="/about">About</Link>
                </li>
                
            </ul>
        </nav>
    )
};
export default List;