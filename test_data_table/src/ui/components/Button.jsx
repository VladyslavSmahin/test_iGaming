import style from "./Nav/Nav.module.scss";

function Button(props) {
const {children} = props
    return (
        <button className={style.button}>{children}</button>
    )
}

export default Button
