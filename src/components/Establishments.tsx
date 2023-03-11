import { FC } from "react";
import { IEstablishments } from "../types/IEstablishments";
import '../css/styles.css'

export const Establishments:FC<{establishments: IEstablishments}> = ({establishments}) => {

    
    return(
        <div>
            <div className="g">
                <img src={establishments.image} alt="" />
            </div>
        </div>
    )
}