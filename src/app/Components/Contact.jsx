import PageHeader from "./PageHeader";

const Contact = () => {
  return (
    <div className="contact-section py-10">
      <div className="max-w-screen-lg mx-auto">
        <PageHeader
          title="Contact Me"
          description="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        />
        <div className="py-10 px-5">
          <div class="md:flex items-center mt-8">
            <div class="w-full flex flex-col">
              <label class="font-semibold leading-none dark:text-gray-300 text-stone-500">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                class="leading-none dark:text-gray-50 p-3 focus:outline-none dark:focus:border-blue-700 mt-4 border-0 bg-gray-100 dark:bg-gray-800 rounded py-4 text-stone-500"
              />
            </div>
          </div>
          <div class="md:flex items-center mt-8">
            <div class="w-full flex flex-col">
              <label class="font-semibold leading-none dark:text-gray-300 text-stone-500">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                class="leading-none dark:text-gray-50 p-3 focus:outline-none dark:focus:border-blue-700 mt-4 border-0 bg-gray-100 dark:bg-gray-800 rounded py-4 text-stone-500"
              />
            </div>
          </div>
          <div class="md:flex items-center mt-8">
            <div class="w-full flex flex-col">
              <label class="font-semibold leading-none dark:text-gray-300 text-stone-500">
                Message
              </label>
              <textarea
                type="text"
                placeholder="Message"
                class="leading-none dark:text-gray-50 p-3 focus:outline-none dark:focus:border-blue-700 mt-4 border-0 bg-gray-200 dark:bg-gray-800 rounded"
                rows={"20"}
                
              />
            </div>
            tex
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
