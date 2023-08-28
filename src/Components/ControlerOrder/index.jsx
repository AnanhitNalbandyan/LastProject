    import st from './style.module.scss'
    import { useForm, Controller } from 'react-hook-form'
    import {  useAddOrderMutation } from '../../redux/apiSlice'
    import { useState } from 'react'
    import { useDispatch } from 'react-redux';
    import {
    cleanBasket,
    countTotalProducts,
    countTotalPrice
    } from '../../redux/basketSlice'
    
    export const ControlerOrder = () => {
    
        const [isOrdering, setIsOrdering] = useState(false)  
        const [phoneEntered, setPhoneEntered] = useState(false)
        const [message, setMessage] = useState('')

        const [addOrder, { isError, isLoading, isSuccess }] = useAddOrderMutation()
    
        const { handleSubmit, control, setValue } = useForm()

        
    const dispatch = useDispatch()

        
    const cleanBasketHandler = () => {
        dispatch(cleanBasket())
        dispatch(countTotalPrice())
        dispatch(countTotalProducts())
    }

    const orderButtonClickHandler = () => {
        setIsOrdering(true)
        setTimeout(() => {
            sendNumberHandler(objToSend)
            setTimeout(() => {
                cleanBasketHandler()
                setIsOrdering(false)
            }, 2000); 
        }, 1000); 

        
    }
    

    const isPhoneValid = (phone) => {
        return phone.startsWith('') || phone === '+4' || phone === '+'
    }


    const handlePhoneChange = (el) => {
    const phoneValue = el.target.value;
    const sanitizedPhoneValue = phoneValue.replace(/[^0-9\+]/g, "");
    
        if (sanitizedPhoneValue.length < 10) {
            setMessage('Other than numbers, no characters can enter number must consist of at least 10 numbers and start with "+"')
            setValue('phone', sanitizedPhoneValue)
            setPhoneEntered(false)
        } else {
            setMessage('')
            setValue('phone', (isPhoneValid(sanitizedPhoneValue)
                ? sanitizedPhoneValue
                : `+49${sanitizedPhoneValue}`).replace(/[^0-9\+]/g, ""));
            setPhoneEntered(true)
    }
}
    const objToSend = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    const sendNumberHandler = (obj) => {
        addOrder(obj).unwrap().then()
    }


        return (
        <form className={st.inputForm} onSubmit={handleSubmit(() => {})}>
        {isSuccess && phoneEntered ? (
                    <div className={st.answer}>
                    Thanks! <br /> Your order is accepted!!
                    </div>
        ) : (
            <>
            <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                <div className={st.inputWrapper}>
                    <input
                    {...field}
                    className={st.input}
                    type="tel"
                    onChange={handlePhoneChange}
                    maxLength={14}
                    placeholder="Phone number"
                    />
                        {error && <span className={st.requiredMessage}>Phone number is required.</span>}
                        {message && <p className={st.requiredMessage}>{message}</p>}
                </div>
                )}
            />
                <button
                        className={isOrdering ? `${st.buttonOrder} ${st.buttonOrderDisabled}` : st.buttonOrder}
                        onClick={orderButtonClickHandler}
                        disabled={isOrdering}
                >
                        {isOrdering ? 'Ordering...' : 'Order'}
                            </button>
                
            </>
        )}
        {isLoading ? <div>Loading</div> : null}
        {isError ? <div>Error</div> : null}
        </form>
        )
    }