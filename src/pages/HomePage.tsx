import '../css/styles.css'
import { Establishments } from '../components/Establishments'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import {useEffect} from 'react'
import { uploadEstablishments } from '../store/redusers/establishments/establishmentsAction'
import { DeliveryTerms } from '../components/DeliveryTerms'

export const HomePage = () => {
    const establishments = useAppSelector((state) => state.establishments.establishments);
    console.log(establishments);
    

    const dispatch = useAppDispatch();

   useEffect(() => {
    dispatch(uploadEstablishments())
   },[dispatch])
    
    return(
        <div className='wrapper'>
            <div className='green-block-and-text'>
                <div className='green-block'></div>
                <div>
                    <p>топ заведений по отзывам</p>
                </div>
            </div>
            <div className='establishments'>
                {establishments.map((item) => (
                 <Establishments key={item._id} establishments={item}/>
                ))}
            </div>
        </div>
    )
}