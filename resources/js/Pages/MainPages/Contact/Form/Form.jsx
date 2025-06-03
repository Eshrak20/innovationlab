import { useForm } from '@inertiajs/react';
import { motion } from "framer-motion";

const ContactInputField = ({
    type,
    name,
    value,
    onChange,
    placeholder,
    required,
    errors
}) => (
    <div className="w-full">
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-success bg-white"
            required={required}
        />
        {errors && errors[name] && (
            <p className="text-success text-sm mt-1">{errors[name]}</p>
        )}
    </div>
);

const Form = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/form', {
            preserveScroll: true,
            onSuccess: () => {
                alert("Submitted From successfully")
            },
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="container md:px-8 mb-10"
        >
            <div className="p-6 md:p-8 rounded-lg max-w-4xl mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-wrap text-gray-900"
                >
                    <div className="mb-4 w-full md:w-1/2 md:pr-2">
                        <ContactInputField
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Name"
                            required
                            errors={errors}
                        />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pl-2">
                        <ContactInputField
                            type="text"
                            name="company"
                            value={data.company}
                            onChange={(e) => setData('company', e.target.value)}
                            placeholder="Company"
                            required
                            errors={errors}
                        />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pr-2">
                        <ContactInputField
                            type="tel"
                            name="phone"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            placeholder="Phone"
                            required
                            errors={errors}
                        />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 md:pl-2">
                        <ContactInputField
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Email"
                            required
                            errors={errors}
                        />
                    </div>
                    <div className="mb-6 w-full">
                        <div className="w-full">
                            <textarea
                                name="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Describe what you want!"
                                rows="8"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-success bg-white"
                                required
                            ></textarea>
                            {errors && errors.description && (
                                <p className="text-success text-sm mt-1">{errors.description}</p>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full mt-14 px-3 md:px-8 py-3 bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white text-xs md:text-lg font-bold uppercase rounded-xl shadow-lg hover:shadow-blue-500/50 transition duration-300 ease-in-out disabled:opacity-50"
                    >
                        {processing ? 'Submitting...' : 'Contact Us'}
                    </button>
                </form>

                <p className="text-gray-600 text-sm mt-4 text-center">
                    By clicking Contact Us, you agree to our{" "}
                    <a href="#" className="text-success hover:underline">
                        Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </motion.div>
    );
};

export default Form;