import Button from "../Button.jsx";
import NavElement from "./NavElement.jsx";
import img2 from '../../assets/Component_2.png';
import Component_1 from '../../assets/Component_1.png';
import style from "./Nav.module.scss";

function Nav() {

    return (
        <div className={style.nav}>
            <div className={style.flex}>
                <div>
                    <p>Welcome back, Drax</p>
                </div>
                <Button ><img src={Component_1} alt='img'/></Button>
            </div>
            <NavElement src={img2} text={'Data Table'}/>
            <div>

            </div>
        </div>
    )
}

export default Nav
