import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            return toast.error("Merci de compléter le formulaire entièrement");
        }

        setLoading(true);

        const data = {
            name,
            email,
            subject,
            message,
        };

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                data,
                process.env.REACT_APP_EMAILJS_PUBLIC_API
            )
            .then(
                (result) => {
                    setLoading(false);
                    toast.success(`Email envoyé avec succes !`);
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error(error.text);
                }
            );
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Contact</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Dites moi tout !</h3>
                    <p className="contact__details">
                        Vous n'aimez pas les formulaires ? Envoyez moi un mail à remy.moruchon@gmail.com. 👋
                    </p>
                </div>

                <form onSubmit={submitHandler} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="Votre nom"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder="Votre email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            placeholder="Que puis-je faire pour vous ?"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Dites m'en plus !"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">
                        {loading ? "Sending..." : "Envoyer"}
                    </button>
                </form>
                <ToastContainer position="bottom-right" theme={props.theme} />
            </div>
        </section>
    );
};

export default Contact;