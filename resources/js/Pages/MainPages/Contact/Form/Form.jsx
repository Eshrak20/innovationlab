import { useState } from "react";
// Reusable Input Field Component
const ContactInputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-success bg-white"
    required={required}
  />
);

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const email = import.meta.env.VITE_APP_EMAIL_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data:", formData);

    const apiUrl = email;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Contact Form Submission",
          message: `
            Name: ${formData.name}\n
            Company: ${formData.company}\n
            Phone: ${formData.phone}\n
            Email: ${formData.email}\n
            Message: ${formData.message}
          `,
        }),
        // mode: "no-cors",  // Remove if you want to handle the response
      });

      if (!response.ok) throw new Error("Network response was not ok");

      alert("Form submitted successfully! Please check the log for details.");
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <>
      <div>
        <div className="container md:px-8 mb-10">
          <div className="p-6 md:p-8  rounded-lg max-w-4xl mx-auto ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap text-gray-900"
            >
              <div className="mb-4 w-full md:w-1/2 md:pr-2">
                <ContactInputField
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 md:pl-2">
                <ContactInputField
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  required
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 md:pr-2">
                <ContactInputField
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="mb-4 w-full md:w-1/2 md:pl-2">
                <ContactInputField
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6 w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe what you want!"
                  rows="8"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-success bg-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-success text-white py-3 rounded-lg font-semibold hover:bg-opacity-60 transition-colors duration-300"
              >
                Contact Us
              </button>
            </form>

            <p className="text-gray-600 text-sm mt-4 text-center">
              By clicking Contact Us, you agree to our{" "}
              <a href="#" className="text-success hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-success hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
