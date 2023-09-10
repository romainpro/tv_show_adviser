import s from "./style.module.css"
import {StarFill,Star as StarEmpty ,StarHalf} from "react-bootstrap-icons"

export function FiveStarRating({rating}){
    const startList =[];

    const starFillCount = Math.floor(rating);

    const hasStarHalf = rating - starFillCount >= 0.5;

    const emptyStarCount = 5- starFillCount -(hasStarHalf ? 1:0);

    for (let i =1 ; i<= starFillCount; i++){
        startList.push(<StarFill key={"star_fill"+i}/>)
    }
    if (hasStarHalf){
        startList.push(<StarHalf key={"star_half"}/>)
    }
    for (let i =1 ; i<= emptyStarCount; i++){
        startList.push(<StarEmpty key={"star_empty"+i}/>)
    }
    return <div>{startList}</div>

}