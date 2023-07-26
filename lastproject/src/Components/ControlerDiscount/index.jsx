import st from './style.module.scss'
import { baseUrl } from '../../redux/apiSlice'
import { useForm, Controller } from 'react-hook-form'
import { usePostPhoneNumberForDiscountMutation } from '../../redux/apiSlice'


export const ControlerDiscount = () => {
    

const [postNumberForDiscount, { isError, isLoading, isSuccess }] = usePostPhoneNumberForDiscountMutation();
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
        <form className={st.inputForm} onSubmit={() => () => handleSubmit(onSubmit)}>
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
            <button className={st.buttonOrder}
                onClick={() => sendNumberHandler(objToSend)}>
                Order
            </button>
        </form>
    )
}