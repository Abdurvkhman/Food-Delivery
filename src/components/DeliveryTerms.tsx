import map from '../assets/img/map.png'; 
import '../css/styles.css'

export const DeliveryTerms = () => {
    return(
        <div className="delivery-terms">
            <div className='green-second-block-and-text'>
                <div className='green-block'></div>
                <div>
                    <p>Условия доставки</p>
                </div>
            </div>
           <div className='accordion-and-map'>
                <div className='delivery-terms-accordion'>

                    <div className="accordion">
                        <input id="toggle1" type="radio" className="accordion-toggle" name="toggle" />
                        <label htmlFor="toggle1">У наших курьеров всегда должна быть сдача!</label>
                        <section>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate sint enim saepe eum similique maiores, unde, ea quod excepturi adipisci, expedita provident sit. Expedita nihil architecto optio pariatur aut!</p>
                        </section>
                    </div>

                    <div className="accordion">
                        <input id="toggle2" type="radio" className="accordion-toggle" name="toggle" />
                        <label htmlFor="toggle2">Вам что-то не довезли?</label>
                        <section>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate sint enim saepe eum similique maiores, unde, ea quod excepturi adipisci, expedita provident sit. Expedita nihil architecto optio pariatur aut!</p>
                    </section>
                    </div>

                    <div className="accordion">
                        <input id="toggle3" type="radio" className="accordion-toggle" name="toggle" />
                        <label htmlFor="toggle3">Не понравился продукт?</label>
                        <section>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate sint enim saepe eum similique maiores, unde, ea quod excepturi adipisci, expedita provident sit. Expedita nihil architecto optio pariatur aut!</p>
                        </section>
                    </div>

                    <div className="accordion">
                        <input id="toggle4" type="radio" className="accordion-toggle" name="toggle" />
                        <label htmlFor="toggle4">Если появились замечания</label>
                        <section>
                        <p>Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
                        </section>
                    </div>

                    <div className="accordion">
                        <input id="toggle5" type="radio" className="accordion-toggle" name="toggle" />
                        <label htmlFor="toggle5">Оплата Visa, MasterCard и МИР</label>
                        <section>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate sint enim saepe eum similique maiores, unde, ea quod excepturi adipisci, expedita provident sit. Expedita nihil architecto optio pariatur aut!</p>
                        </section>
                    </div>

                    <div className="accordion">
                        <input id="toggle6" type="radio" className="accordion-toggle" name="toggle" />
                        <label htmlFor="toggle6">Реквизиты</label>
                        <section>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate sint enim saepe eum similique maiores, unde, ea quod excepturi adipisci, expedita provident sit. Expedita nihil architecto optio pariatur aut!</p>
                        </section>
                    </div>

                </div>

                <div className='delivery-terms-map'>
                    <img className='map' src={map} alt="" />
                </div>
           </div>

           <div className='schedule'>
                <div className='delivery-work-schedule'>
                    <p className='delivery-work-schedule-text'>График работы доставки:</p>
                    <p className='delivery-work-schedule-time'>с 10:00-21:00</p>
                </div>
                <div className='cafe-opening-hours'>
                    <p className='cafe-opening-hours-text'>График работы кафе:</p>
                    <p className='cafe-opening-hours-time'>с 08:00-21:00</p>
                </div>
           </div>

           <div className='minimum-order-and-delivery'>
                <p className='minimum-order'>Минимальный заказ:</p>
                <p className='free-shipping'>Бесплатная доставка пешим курьером при сумме заказа от 400 ₽  Доставка оператором такси от любой суммы заказа - по тарифам  перевозчика.</p>
           </div>
        </div>
    )
}