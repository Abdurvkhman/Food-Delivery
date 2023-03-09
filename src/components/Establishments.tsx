import { FC } from "react"
import { IEstablishments } from "../types/IEstablishments"

export const Establishments:FC<{establishments: IEstablishments}> = ({establishments}) => {
    return(
        <div>
            <div>
                <img src={establishments.image} alt="" />
                <p>{establishments.name}</p>
            </div>
        </div>
    )
}