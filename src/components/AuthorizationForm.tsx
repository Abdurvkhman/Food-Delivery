import { useForm } from 'react-hook-form';
import { useState } from "react";
import { useAppDispatch, useAppSelector} from '../hooks/hooks';
import { authorization } from '../store/redusers/authorization/UserAction';
import '../css/styles.css';

export const AuthorizationForm = () => {

    const dispatch = useAppDispatch()
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    
    const login = async () => {
        try {
            await dispatch(authorization({ userName, password })).unwrap();
            setUserName("");
            setPassword("");
        } catch (e) {
            return e;
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            login();
        }
    };

    const {
        register,
        formState:{
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode:'onBlur'
    });

    const onSubmit = (data: any) => {
        reset()
    }
    return(
        <div className='authorization-form'>
            <h1>Войти</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='email-block'>    
                    <label>
                        <p className='email'>Электронная почта</p> 
                        <input 
                        className='input-email'
                        type="text"
                        {...register('email',{
                            required:true,
                            minLength:{
                                value:6,
                                message:'минимум 6 символом'
                            },
                        })}
                        />
                    </label>
                    <div className='error'>
                        {  errors?.email && <p>Error</p>}
                    </div>
                </div>

                <div className='password-block'>    
                    <label>
                        <p className='password'>Пароль</p> 
                        <input 
                        onKeyDown={(e) => handleKeyDown(e)}
                        className='input-password'
                        type="password"
                        {...register('password',{
                            required:true,
                            minLength:{
                                value:6,
                                message:'минимум 6 символом'
                            }
                            
                        })}
                        />
                    </label>
                    <div className='error'>
                        {  errors?.password && <p>Error</p>}
                    </div>
                </div>

               <button disabled={!isValid} className='active'>Войти</button> 
            </form>
            
            
            <div className='no-account-and-register'>
                <span className='no-account'>Нет аккаунта?</span>
                <span className='register'>Зарегистрироваться</span>
            </div>
        </div>
    )
}