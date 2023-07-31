import st from './style.module.scss'
import { baseUrl } from '../../redux/apiSlice'
import { useForm, Controller } from 'react-hook-form'
import { usePostPhoneNumberForDiscountMutation } from '../../redux/apiSlice'


export const Controler = () => {
    

const  { isError, isLoading, isSuccess } = usePostPhoneNumberForDiscountMutation();
const { handleSubmit, control, setValue } = useForm();

    const onSubmit = async (data) => {
        const response = await fetch(`${baseUrl}sale/send`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        if (response.ok) {
        console.log('response = ok')
    } else {
        console.log('Ooops');
    }
    }

const isPhoneValid = (phone) => {
    return phone.startsWith('') || phone === '+4' || phone === '+'
}

const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setValue('phone', (isPhoneValid(phoneValue)  ? phoneValue : `+49${phoneValue}`).replace(/[^0-9\+]/, ""));
}


    return (
        <form className={st.inputForm} onSubmit={() => () => handleSubmit(onSubmit)}>
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
                    />
                    {error && <span>Phone number is required.</span>}
                    </div>
                )}
                />
            {isSuccess ? (
                <p className={st.answer}>
                    Thank you!!! We will connect with you
                </p>
            ) : (
                <button className={st.button} type="submit">
                    Get a discount
                </button>
            )}
            {isLoading ? (
                <div>Loading</div>
            ) : null}
            {isError ? <div>Error</div> : null}
        </form>
    )
}