import PageHeader from "@/Components/PageHeader";
import PrimaryButton from "@/Components/PrimaryButton";
import Weidgs from "@/Components/Weidgs";


const Contact = () => {
  return (
    <div className="contact-section py-10">
      <Weidgs
        customClass={"leftWeidgs md:w-[400px !important] md:h-[400px !important] w-28 h-28 bg-[var(--main-color)]"}
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
        <div className="py-10 px-5">
          <div className="md:flex items-center mt-8">
            <div className="w-full flex flex-col">
              <label className="font-semibold leading-none dark:text-gray-300 text-stone-500">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                style={{ border: "1px solid rgba(255, 255, 255, 0.125)" }}
                className="leading-none dark:text-gray-50 p-3  mt-4 bg-transparent focus:outline-0"
                
              />
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
                style={{ border: "1px solid rgba(255, 255, 255, 0.125)" }}
                className="leading-none dark:text-gray-50 p-3  mt-4 bg-transparent focus:outline-0"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="w-full flex flex-col">
              <label className="font-semibold leading-none dark:text-gray-300 text-stone-500 ">
                Message
              </label>
              <textarea
                type="text"
                placeholder="Message"
                style={{ border: "1px solid rgba(255, 255, 255, 0.125)" }}
                className="leading-none dark:text-gray-50 p-3  mt-4 bg-transparent focus:outline-0"
                rows={"10"}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="mt-5">
              <PrimaryButton text={"send"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
