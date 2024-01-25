"use client";
import PageHeader from "@/Components/PageHeader";
import PrimaryButton from "@/Components/PrimaryButton";
import Weidgs from "@/Components/Weidgs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";


const Contact = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isClick, setClick] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Process form data here
    // Example: console.log(data);
    setClick(!isClick);
    // Clear form after submission
    reset();
    setIsValidEmail(false); // Reset email validation state

    // email js setup
    emailjs.send(
      "service_3ybke42",
      "template_v8bsu1m",
      data,
      "Fo9Ub2oH2KVZCh_n5"
    );

    // success message
    Swal.fire({
      title: "Success",
      text: "Thank you for your message",
      icon: "success",
      confirmButtonText: "OK",
    }).then((res) => res.isConfirmed && Swal.close);
  };

  return (

   <>

    
    <section className="contact pb-5 pt-12 h-screen">
      <Weidgs
        customClass={
          "leftWeidgs md:w-[400px !important] md:h-[400px !important] w-28 h-28 bg-[var(--main-color)]"
        }
        position={{
          bottom: "10%",
          left: "20%",
          backgroundColor: "#111927",
          backgroundImage:
            "radial-gradient(at 47% 33%, hsl(358.85, 76%, 51%) 0, transparent 59%),radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%)",
        }}
      />
      <Weidgs
        customClass={"rightWeidgs hidden md:block"}
        position={{
          right: "20%",
          bottom: "10%",
          background: "var(--main-color)",
          width: "200px",
          height: "200px",
        }}
      />
      <div className="max-w-screen-lg mx-auto">
        <PageHeader
          title="Contact Me"
          description="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        />
        <form className="py-10 px-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex items-center mt-8">
            <div className="w-full flex flex-col">
              <label className="font-semibold leading-none dark:text-gray-300 text-stone-500">
                Name
              </label>
              <input
                type="text"
                required
                {...register("userName")}
                placeholder="Enter Your Name"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.125)",
                  backgroundColor: "transparent",
                }}
                className="leading-none dark:text-gray-50 p-3 mt-4 bg-transparent focus:outline-0"
              />
              {errors.name && (
                <p className="text-red-500 mt-1">Please enter your name.</p>
              )}
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="w-full flex flex-col">
              <label className="font-semibold leading-none dark:text-gray-300 text-stone-500">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                {...register("userEmail")}
                onChange={(e) => {
                  const enteredEmail = e.target.value;
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                  setIsValidEmail(emailRegex.test(enteredEmail));
                }}
                style={{
                  border: `1px solid ${
                    isValidEmail ? "green" : "rgba(255, 255, 255, 0.125)"
                  }`,
                  backgroundColor: "transparent",
                }}
                className="leading-none dark:text-gray-50 p-3 mt-4 bg-transparent focus:outline-0"
              />
              {errors.email && (
                <p className="text-red-500 mt-1">Please enter a valid email.</p>
              )}
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="w-full flex flex-col">
              <label className="font-semibold leading-none dark:text-gray-300 text-stone-500 ">
                Message
              </label>
              <textarea
                type="text"
                required
                placeholder="Message"
                {...register("message")}
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.125)",
                  backgroundColor: "transparent",
                }}
                className="leading-none dark:text-gray-50 p-3 mt-4 bg-transparent focus:outline-0"
                rows={"10"}
              />
              {errors.message && (
                <p className="text-red-500 mt-1">Please enter a message.</p>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <div className="mt-5">
              <PrimaryButton
                text={"send"}
                type={"submit"}
                isLinkNeeded={false}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
   </>
  );
};

export default Contact;
