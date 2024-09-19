
import Validations from "@/Utils/FormValidations"
import { useForm } from "react-hook-form";
import { getCountryDataList } from 'countries-list'
import Custom_Centered_DynamicDialog from "@/Components/Models/Dialog/Center_Dialog";
import { contactFormApi } from "@/Utils/api"
import { useEffect, useState } from "react";
import "./styles.scss"

import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Button as PrimeButtton } from 'primereact/button';
import JigglyButton from "@/Components/JigglyButton/JigglyButton";

const {
    email,
    phoneNumber,
} = Validations

const countries = getCountryDataList()


const Connect_Form = ({ modelState = false, setModelState }) => {

    const [datetime12h, setDateTime12h] = useState(null);
    const [visible, setVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [selectedServices, setSelectedServices] = useState("");
    const [countryState, setCountryState] = useState("");
    const [loading, setLoading] = useState(false);

    const submitForm = async (data) => {
        if (loading) return
        try {
            setLoading(true)
            const names = data.fullName.split(" ")
            data.firstName = names[0] ? names[0] : ""
            data.lastName = names[1] ? names[1] : ""
            if (datetime12h) {
                const { time, date } = formatDate(datetime12h);
                data.time = time
                data.date = date
            }
            data.country = countryState
            data.service = data?.service ? data?.service.join(", ") : ""

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
    const serviceList = ["Customer Insight", "Design", "Consulting", "Details", "Digital", "Content Services", "Marketing Services"]

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div>{`(+${option.phone}) ${option.name}`} </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div>{`(+${option.phone}) ${option.name}`} </div>
        );
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
                                {/* <select {...register("country")} defaultValue={"India"} placeholder="Country Code" >
                                    {countries.map((country, i) => <option value={country.name} key={i}>{country.name} {` (+${country.phone})`}</option>)}
                                </select> */}
                                <Dropdown filter filterBy="name" value={countryState}
                                    defaultValue={"India"}
                                    onChange={(e) => setCountryState(e.value)} options={countries} optionLabel={"name"}
                                    optionValue="name"
                                    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate}
                                    placeholder="Select Country Code" className="w-full pr " />
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
                                <MultiSelect {...register("service")} options={serviceList}
                                    value={selectedServices} onChange={(e) => setSelectedServices(e.value)}
                                    placeholder="Choose Service" className="pr w-full" />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="field time">
                                {visible && <div className={`time-model ${visible ? "active" : ""} `}>
                                    <i onClick={() => setVisible(false)} className="pi pi-times closeBtn closeTime" />
                                    <Calendar className="pr"
                                        showTime
                                        showIcon
                                        id="calendar-12h"
                                        inline
                                        value={datetime12h}
                                        dateFormat="dd/mm/yy"
                                        onChange={(e) => setDateTime12h(e.value)}
                                        hourFormat="24" />
                                </div>}
                                <div className="p-inputgroup flex-1" style={{ display: "flex" }} >
                                    <input type="text" value={datetime12h === null ? "" : formatDate(datetime12h).input} readOnly />
                                    <PrimeButtton className="timeIcon" onClick={() => setVisible(pre => !pre)} icon="pi pi-clock" severity={visible ? "warning" : "primary"} />
                                </div>

                            </div>
                            <div className="field">
                                <textarea {...register("subject")} name="subject" id="subject" placeholder="Your Message"></textarea>
                            </div>
                        </div>
                        <div className="centered">
                            <JigglyButton label="Submit" type="submit" />
                        </div>
                    </form>
                </div>
            </div >
        </Custom_Centered_DynamicDialog >
    )
}

export default Connect_Form

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM'
    return {
        input: `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`,
        date: `${day}/${month}/${year}`,
        time: `${hours}:${minutes} ${ampm}`
    };
}