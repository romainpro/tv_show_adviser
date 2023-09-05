import s from "./style.module.css";
import "./global.css";
import { TVShowAPI } from "./api/tv_show";

TVShowAPI.fetchpopular()
export function App(){
    return (
    <div className={s.main_container}>
        <div className={s.header}>
            <div className="row">
                <div className="col-4">
                    <div>logo</div>
                    <div>subtitles</div>
            </div>
                <div className="col-sm-12 col-md-4">
                    <input style={{width: "100%" }}type="tex"/>
                </div>
            </div>
        </div>
        <div className={s.show_tv_detail}>detail</div>
        <div className={s.recommentation}>recommentation</div>
    </div>
    )
}