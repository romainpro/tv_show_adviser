import s from "./style.module.css";
import "./global.css";

export function App(){
    return (
    <div className={s.main_container}>
        <div className={s.header}>header</div>
        <div className={s.show_tv_detail}>detail</div>
        <div className={s.recommentation}>recommentation</div>
    </div>
    )
}