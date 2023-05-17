import Body from "../../molicule/body/body";
import Header from "../../organisam/header/header"
import style from './home.module.css'

const HomePage =()=>{
    return(
        <>
        <div>
            <Header/>
        </div>
        <div className={style.body} >
            <h3>this is home page</h3>
    
    
            <Body/>
        </div>
        </>
    )
};
export default HomePage;