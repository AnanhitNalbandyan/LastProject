import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import st from './style.module.scss';

export const DiscountForm = ({ control })=> {
    const {
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Здесь вы должны добавить вашу логику для отправки данных на сервер
            // Например, вызов вашей мутации или API запроса
            // Примечание: Вам может потребоваться использовать async/await
            // Я использовал здесь setTimeout как заглушку
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Заглушка для "запроса"

            reset({
                phone: '',
            });

            toast.success('Thank you. Wait for a message with a discount code.');
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={st.form}>
            <Controller
                name="phone"
                control={control}
                defaultValue="+49"
                rules={{
                    required: 'Phone number is required.',
                    pattern: {
                        value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/,
                        message: 'Invalid phone number',
                    },
                }}
                render={({ field }) => (
                    <div className={st.inputWrapper}>
                        <input
                            {...field}
                            className={st.input}
                            type="tel"
                            maxLength={14}
                            placeholder="Phone number"
                        />
                        {errors.phone?.type === 'required' && (
                            <span className={st.alarm}>This field is required</span>
                        )}
                        {errors.phone?.type === 'pattern' && (
                            <span className={st.alarm}>Invalid phone number</span>
                        )}
                    </div>
                )}
            />
            <input type="submit" value="Get a discount" className={st.btn} />
        </form>
    )
}