import s from "./style.module.css"
import { FiveStarRating } from "../FiveStarRating/FiveStarRating"

export function TVShowDetail({tvShow}){
    const rating = tvShow.vote_average/2
    const firstDate = new Date(tvShow.first_air_date);

    const day = firstDate.getDate();
    const month = firstDate.toLocaleString('default', { month: 'long' }); 
    const year = firstDate.getFullYear();

    // console.log('***',tvShow)

    return (<div>
        <div className={s.title}>{tvShow.name}</div>
        <div className={s.date}>Première apparition : {day} {month} {year}</div>
        <div className= {s.rating_container}>
            <FiveStarRating rating={rating}/>
            <div className={s.rating}>{rating}/5</div>
        </div>
        <div className={s.overview}>{tvShow.overview}</div>
    </div>)
}
