    import st from './style.module.scss'
    import { baseUrl } from '../../redux/apiSlice'
    import { useForm, Controller } from 'react-hook-form'
    import { usePostPhoneNumberForDiscountMutation } from '../../redux/apiSlice'
    import { useState } from 'react'
    import { useDispatch } from 'react-redux';
    import {
    cleanBasket,
    countTotalProducts,
    countTotalPrice
    } from '../../redux/basketSlice'
    
    import { ToastContainer, toast } from 'react-toastify'
    import 'react-toastify/dist/ReactToastify.css'

    export const ControlerOrder = () => {
        
    const [phoneEntered, setPhoneEntered] = useState(false)
    const [postNumberForDiscount, { isError, isLoading, isSuccess }] = usePostPhoneNumberForDiscountMutation()
    const { handleSubmit, control, setValue } = useForm()
    const [isOrdering, setIsOrdering] = useState(false)
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
            }, 2000); // Задержка в 2000 миллисекунд (2 секунды) перед очисткой корзины
        }, 1000); // Задержка в 2000 миллисекунд (2 секунды) перед отправкой данных

        
    }
        
        const onSubmit = async (data) => {
            const response = await fetch(`${baseUrl}sale/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
            if (response.ok) {
                toast.success('Your application has been accepted, we will contact you!!!')
            } else {
                toast.error('Oops, something went wrong.')
            }
        }

    const isPhoneValid = (phone) => {
        return phone.startsWith('') || phone === '+4' || phone === '+'
    }


    const handlePhoneChange = (el) => {
    const phoneValue = el.target.value;
    const sanitizedPhoneValue = phoneValue.replace(/[^0-9\+]/g, "");
    
        if (sanitizedPhoneValue.length < 10) {
        toast.warn('You must enter at least 10 characters.')
        setValue('phone', sanitizedPhoneValue);
        setPhoneEntered(false)
    } else {
        setValue('phone', (isPhoneValid(sanitizedPhoneValue) ? sanitizedPhoneValue : `+49${sanitizedPhoneValue}`).replace(/[^0-9\+]/g, ""));
        setPhoneEntered(true);
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
        postNumberForDiscount(obj).unwrap().then()
    }


        return (
        <form className={st.inputForm} onSubmit={handleSubmit(onSubmit)}>
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
                    {error && <span>Phone number is required.</span>}
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
        <ToastContainer/>
        </form>
        )
    }