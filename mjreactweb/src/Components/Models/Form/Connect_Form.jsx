
import Validations from "@/Utils/FormValidations"
import { useForm } from "react-hook-form";
import { getCountryDataList } from 'countries-list'
import Custom_Centered_DynamicDialog from "@/Components/Models/Dialog/Center_Dialog";
import { contactFormApi } from "@/Utils/api"
import { useEffect, useState } from "react";
import "./styles.scss"
import { Calendar } from 'primereact/calendar';

import { Button as PrimeButtton } from 'primereact/button';

const {
    email,
    phoneNumber,
} = Validations

const countries = getCountryDataList()


const Connect_Form = ({ modelState = false, setModelState }) => {

    const [datetime12h, setDateTime12h] = useState(null);
    const [visible, setVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false);

    const submitForm = async (data) => {
        if (loading) return
        try {
            setLoading(true)
            const names = data.fullName.split(" ")
            data.firstName = names[0] ? names[0] : ""
            data.lastName = names[1] ? names[1] : ""
            if (datetime12h) {
                const { time, date } = getFormattedDateTime(datetime12h);
                data.time = time
                data.date = date
            }
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
                <i onClick={() => setModelState(false)} className={`pi pi-times closeBtn`}> </i>
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
                                <select  {...register("service")} name="service" id="service">
                                    <option value="">Choose Service</option>
                                    <option value="Customer Insight">Customer Insight</option>
                                    <option value="Design">Design</option>
                                    <option value="Consulting">Consulting</option>
                                    <option value="Details">Details</option>
                                    <option value="Digital">Digital</option>
                                    <option value="Content Services">Content Services</option>
                                    <option value="Marketing Services">Marketing Services</option>
                                </select>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="field time">
                                {visible && <div className={`time-model ${visible ? "active" : ""} `}>
                                    <i onClick={() => setVisible(false)} className="pi pi-times closeBtn closeTime" />
                                    <Calendar className="pr" showIcon id="calendar-12h" value={datetime12h}
                                        inline
                                        onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
                                </div>}
                                <div className="p-inputgroup flex-1" style={{ display: "flex" }} >
                                    <input type="text" value={datetime12h === null ? "" : datetime12h} readOnly />
                                    <PrimeButtton className="timeIcon" onClick={() => setVisible(pre => !pre)} icon="pi pi-clock" severity={visible ? "warning" : "primary"} />
                                </div>

                            </div>
                            <div className="field">
                                <textarea {...register("subject")} name="subject" id="subject" placeholder="Your Message"></textarea>
                            </div>
                        </div>
                        <div className="centered">
                            <button className="text-24 star button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </Custom_Centered_DynamicDialog >
    )
}

export default Connect_Form

function getFormattedDateTime(dateString) {
    // Create a new Date object from the provided date string
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date)) {
        return 'Invalid date';
    }

    // Extract the components
    const optionsDate = { day: '2-digit', month: 'short', year: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false };

    // Format the date and time
    const formattedDate = date.toLocaleDateString('en-GB', optionsDate); // "24 Sep 2024"
    const formattedTime = date.toLocaleTimeString('en-GB', optionsTime); // "18:27"

    return {
        date: formattedDate,
        time: formattedTime
    };
}