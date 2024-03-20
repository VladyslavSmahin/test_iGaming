import img18 from '../../assets/Component_18.png';
import style from './Nav.module.scss'
function NavElement(props) {
    const { text, src } = props;

    return (
        <div className={style.navElement}>
            <img className={style.icon} src={src} alt='img' />
            <p>{text}</p>
            <img className={style.icon} src={img18} alt='img' />
        </div>
    );
}

export default NavElement;
