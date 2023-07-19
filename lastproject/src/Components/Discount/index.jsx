import st from './style.module.scss'
import litleman from '../../Images/litleman.png'
import { useForm, Controller } from 'react-hook-form'
import { baseUrl } from '../../redux/apiSlice'



export const Discount = () => {
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
    return phone.startsWith('+49') || phone === '+4' || phone === '+'
}

const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setValue('phone', (isPhoneValid(phoneValue)  ? phoneValue : `+49${phoneValue}`).replace(/[^0-9\+]/, ""));
};
    

    return (
        <div className={st.container}>

            <img className={st.litleMan} src={litleman} alt="" />
        
            <div className={st.textInput}>

                    <div className={st.text}>
                        <p>5% off <br /> <span>on the first order</span> </p>  
                    </div>
                
                    <form className={st.inputForm} onSubmit={() => handleSubmit(onSubmit)}>
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
                <button className={st.button} type="submit">
                Gate a discount
                </button>
            </form>

            </div>
        
        </div>
    )
}