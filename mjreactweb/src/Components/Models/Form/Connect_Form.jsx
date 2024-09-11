
import Validations from "@/Utils/FormValidations"
import { useForm } from "react-hook-form";
import { getCountryDataList } from 'countries-list'
import Custom_Centered_DynamicDialog from "@/Components/Models/Dialog/Center_Dialog";
import { contactFormApi } from "@/Utils/api"
import { useState } from "react";
import "./styles.scss"

const {
    email,
    phoneNumber,
} = Validations

const countries = getCountryDataList()
const Connect_Form = ({ modelState = false, setModelState }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false);

    const submitForm = async (data) => {
        if (loading) return
        try {
            setLoading(true)
            const names = data.fullName.split(" ")
            data.firstName = names[0] ? names[0] : ""
            data.lastName = names[1] ? names[1] : ""

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };

            const response = await fetch(contactFormApi, requestOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            alert("Form submitted successfully!");
            console.log("Response data:", responseData);
        } catch (error) {
            alert("Form Submission Failed")
            console.error("Error submitting form:", error || error.message);
        }
        setLoading(false)
    };

    return (
        <Custom_Centered_DynamicDialog modelWidth={"100%"} modelHeight={"calc(100vh - var(--header-h) - 30px)"} state={modelState} setModelState={setModelState}>
            <div className="model">
                <span onClick={() => setModelState(false)} className={"closeBtn"}>
                    X
                </span>
                <div className="model-container">
                    <h1 className="text-42">Please share your contact details & requirement for a free quotes</h1>
                    <form onSubmit={handleSubmit(submitForm)} className="form">
                        <div className="fields">
                            <div className="field">
                                <input {...register("fullName")} type="text" placeholder="Full Name" />
                                {errors?.fullName && <p>{errors?.fullName.message}</p>}
                            </div>
                            <div className="field">
                                <input {...register("email", email)} type="email" placeholder="Email Address" />
                                {errors?.email && <p>{errors?.email.message}</p>}
                            </div>
                            <div className="field">
                                <select {...register("country")} defaultValue={"India"} placeholder="Country Code" >
                                    {countries.map((country, i) => <option value={country.name} key={i}>{country.name} {` (+${country.phone})`}</option>)}
                                </select>
                                {errors?.code && <p>{errors?.code.message}</p>}
                            </div>
                            <div className="field">
                                <input {...register("phoneNumber", phoneNumber)} type="number" placeholder="Phone Number" />
                                {errors?.phoneNumber && <p>{errors?.phoneNumber.message}</p>}
                            </div>
                            <div className="field">
                                <input {...register("company")} type="text" placeholder="company" />
                            </div>
                            <div className="field">
                                <textarea {...register("subject")} name="subject" id="subject" placeholder="Your Message"></textarea>
                            </div>
                        </div>
                        <div className="centered">
                            <button className="text-24 button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Custom_Centered_DynamicDialog>
    )
}

export default Connect_Form