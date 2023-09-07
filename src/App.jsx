import s from "./style.module.css";
import "./global.css";
import { TVShowAPI } from "./api/tv_show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import {Logo} from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";

export function App(){
    const [currentTVShow, setCurrentTVShow] =useState();

    async function fetchpopulars(){
        const popular = await TVShowAPI.fetchpopular();
        if(popular.length>0){
            setCurrentTVShow(popular[0]);
        }
    }
    useEffect(()=>{
        fetchpopulars();
    },[]);

    console.log("***",currentTVShow)

    return (
    <div className={s.main_container}
    style={{background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
    :"black",}}>
        <div className={s.header}>
            <div className="row">
                <div className="col-4">
                    <Logo  image={logo} 
                    title="Watowatch" 
                    subtitle="Find a show you may like"/>
            </div>
                <div className="col-sm-12 col-md-4">
                    <input style={{width: "100%" }}type="tex"/>
                </div>
            </div>
        </div>
        <div className={s.show_tv_detail}>
           { currentTVShow && <TVShowDetail tvShow={currentTVShow}/>}
                </div>
        <div className={s.recommentation}>recommentation</div>
    </div>
    )
}