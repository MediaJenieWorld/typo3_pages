import { contactFormApi } from "@/Utils/api"
import { useState } from "react"
import { useForm } from "react-hook-form"
Validations

import Validations from "@/Utils/FormValidations"

const {
    firstName,
    email,
    phoneNumber,
    subject,
} = Validations

const icons = [
    {
        imgUrl: "/assets/Contact/Group.png",
        label: "Consulting"
    },
    {
        imgUrl: "/assets/Contact/Icon.png",
        label: "Media"
    },
    {
        imgUrl: "/assets/Contact/_x34_.png",
        label: "Production"
    },
    {
        imgUrl: "/assets/Contact/Group (1).png",
        label: "Design"
    },
    {
        imgUrl: "/assets/Contact/Group 17.png",
        label: "Digital"
    }
]


const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)

    const interestHandler = (label) => {
        let type = category.includes(label) ? "pull" : "push"
        console.log("type", type);
        if (type === "push") {
            setCategory(pre => {
                const x = [...pre];
                x.push(label);
                return x;
            });
        } else {
            setCategory(pre => {
                const x = [...pre];
                const filteredArray = x.filter(val => val !== label);
                return filteredArray;
            });
        }
    }

    const submitForm = async (data) => {
        if (loading) return
        try {
            setLoading(true)
            data.categories = category;

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
        <form onSubmit={handleSubmit(submitForm)} className='Form'>
            <h2 className='text-42 text-600'>Drop a line and we will get in touch with you.</h2>
            <div className="fields">
                <div className="field">
                    <input {...register("firstName", firstName)} type="text" placeholder="First Name" />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div className="field">
                    <input {...register("lastName")} type="text" placeholder="Last Name" />
                </div>
                <div className="field">
                    <input {...register("email", email)} type="email" placeholder="Email Address" />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="field">
                    <input {...register("phoneNumber", phoneNumber)} type="number" placeholder="Phone Number" />
                    {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                </div>
                <div className="field">
                    <input {...register("organization")} type="text" placeholder="Organization" />
                </div>
                <div className="field">
                    <input {...register("designation")} type="text" placeholder="Designation" />
                </div>
            </div>
            <h2 className='text-42 text-600'>Interested in....</h2>
            <div className="flex-icons">
                {icons.map((icon, i) => {
                    return <div
                        onClick={() => interestHandler(icon.label)}
                        key={i} className={`item ${category.includes(icon.label) ? "active" : ""}`}>
                        <img loading="lazy" className="icon" height={80} width={120} src={icon.imgUrl} alt={icon.label} />
                        <p className="text-28 text-400">{icon.label}</p>
                        <svg className="check" width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.7682 6.64018C14.1218 6.21591 14.0645 5.58534 13.6402 5.23178C13.2159 4.87821 12.5853 4.93554 12.2318 5.35982L7.9328 10.5186L5.70711 8.29289C5.31658 7.90237 4.68342 7.90237 4.29289 8.29289C3.90237 8.68342 3.90237 9.31658 4.29289 9.70711L7.29289 12.7071L8.0672 13.4814L8.76822 12.6402L13.7682 6.64018Z" fill="#018235" />
                        </svg>
                    </div>
                })}
            </div>
            {/* {errors.subject && <p>{errors.subject.message}</p>} */}
            <textarea {...register("subject")} name="subject" id="subject" placeholder="Your Subject"></textarea>

            <div className="submit">
                <button className="button">Submit</button>
            </div>
        </form>
    )
}

export default ContactForm