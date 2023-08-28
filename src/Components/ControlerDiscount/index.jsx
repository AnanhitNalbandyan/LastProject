import st from './style.module.scss'
import { useForm, Controller } from 'react-hook-form'
import { usePostPhoneNumberForDiscountMutation } from '../../redux/apiSlice'
import { useState } from 'react'



export const ControlerDiscount = () => {
    
    const [phoneEntered, setPhoneEntered] = useState(false)
    const [postNumberForDiscount, { isError, isLoading, isSuccess }] = usePostPhoneNumberForDiscountMutation()
    const [message, setMessage] = useState('')

    const { handleSubmit, control, setValue } = useForm()



const isPhoneValid = (phone) => {
    return phone.startsWith('+49') || phone === '+4' || phone === '+'
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
            : `+49${sanitizedPhoneValue}`).replace(/[^0-9\+]/g, ""))
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
    postNumberForDiscount(obj).unwrap().then()
}


        return (
        <form className={st.inputForm} onSubmit={handleSubmit(() => {})}>
        {isSuccess && phoneEntered ? (
                    <div className={st.answer}>
                    Your application has been accepted, <br /> we will contact you!!!
                    </div>
        ) : (
            <>
            <Controller
                name="phone"
                control={control}
                defaultValue="+49"
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
            <button className={st.button} onClick={() => sendNumberHandler(objToSend)}>
                Get discount
            </button>
            </>
        )}
        {isLoading ? <div>Loading</div> : null}
        {isError ? <div>Error</div> : null}
        </form>
    )
    }
