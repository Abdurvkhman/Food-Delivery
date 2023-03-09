import '../css/styles.css'
import { Establishments } from '../components/Establishments'
import { useAppSelector } from '../hooks/hooks'
export const HomePage = () => {
    const establishments = useAppSelector((state) => state.establishments.establishments)
    return(
        <div className='main-unit'>
            <div className='green-block-and-text'>
                <div className='green-block'></div>
                <div>
                    <p>топ заведений по отзывам</p>
                </div>
            </div>
            <div>
                {establishments.map((item) => (
                <Establishments establishments={item}/>
                ))}
            </div>
        </div>
    )
}