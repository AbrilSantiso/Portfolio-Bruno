import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import { about2 } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        "service_39y62ge", // paste your ServiceID here (you'll get one when your service is created).
        "template_gvk7j3q", // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: "Bruno", // put your name here.
          from_email: form.email,
          to_email: "carzeddabruno@gmail.com", //put your email here.
          message: form.message,
        },
        "t7wpvmI8vPH9OLlr9" //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Gracias por tu mensaje! Voy a estar contactándome a la brevedad."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Algo salió mal. Intentalo de nuevo.");
        }
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[100] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contacto.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Tu email"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Mensaje</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tu mensaje"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector(".contact-btn")
                .setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn").setAttribute("src", send);
            }}
          >
            {loading ? "Enviando" : "Enviar"}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <img
          src={about2}
          alt={"Conjunto de fotos"}
          style={{ marginLeft: '20px' }}
          
        />
            <h6           style={{ marginLeft: '22px', marginTop:"20px" }}
        >Video: Belgrano</h6>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
