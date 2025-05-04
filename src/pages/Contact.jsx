// import React, { useEffect, useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import Dog from "../models/Dog";
// import Loader from "../components/Loader";
// import useAlert from "../hooks/useAlert";
// import Alert from "../components/Alert";
// import { socialLinks } from "../constants";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const { alert, showAlert, hideAlert } = useAlert();
//   const [loading, setLoading] = useState(false);
//   const [currentAnimation, setCurrentAnimation] = useState("idle");

//   const handleChange = ({ target: { name, value } }) => {
//     setForm({ ...form, [name]: value });
//   };

//   const handleFocus = () => setCurrentAnimation("walk");
//   const handleBlur = () => setCurrentAnimation("idle");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setCurrentAnimation("hit");

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "Mehak Mattoo",
//           from_email: form.email,
//           to_email: "mehakmattoo.info@gmail.com",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           showAlert({
//             show: true,
//             text: "Message Sent",
//             type: "success",
//           });

//           setTimeout(() => {
//             hideAlert();
//             setCurrentAnimation("idle");
//             setForm({
//               name: "",
//               email: "",
//               message: "",
//             });
//           }, 2000);
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);
//           setCurrentAnimation("idle");

//           showAlert({
//             show: true,
//             text: "I didn't receive your message",
//             type: "danger",
//           });
//         }
//       );
//   };

//   return (
//     <section className="relative flex lg:flex-row flex-col max-container">
//       {alert.show && <Alert {...alert} />}
//       <div className="flex-1 min-w-[50%] flex flex-col">
//         <h1 className="head-text">Get in Touch</h1>
//         <div className="flex items-center gap-4 mt-4">
//           <div className="mt-6 flex flex-wrap gap-8">
//             {socialLinks.map((skill) => (
//               <div
//                 className="block-container cursor-pointer w-14 h-14"
//                 key={skill.name}
//               >
//                 <div className="btn-back rounded-xl" />
//                 <div className="btn-front rounded-xl flex justify-center items-center">
//                   <img
//                     src={skill.iconUrl}
//                     alt={skill.name}
//                     className="w-1/2 h-1/2 object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="w-full flex flex-col gap-7 mt-10"
//         >
//           <label className="text-black-500 font-semibold">
//             Name
//             <input
//               type="text"
//               name="name"
//               className="input"
//               placeholder="Your Name"
//               required
//               value={form.name}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//             />
//           </label>
//           <label className="text-black-500 font-semibold">
//             Email
//             <input
//               type="email"
//               name="email"
//               className="input"
//               placeholder="Your Email"
//               required
//               value={form.email}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//             />
//           </label>
//           <label className="text-black-500 font-semibold">
//             Your Message
//             <textarea
//               name="message"
//               rows="4"
//               className="textarea"
//               placeholder="Write your thoughts here..."
//               value={form.message}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//             />
//           </label>

//           <button
//             type="submit"
//             disabled={loading}
//             className="btn"
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           >
//             {loading ? "Sending..." : "Submit"}
//           </button>
//         </form>
//       </div>

//       <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
//         <Canvas
//           camera={{
//             position: [0, 0, 5],
//             fov: 75,
//             near: 0.1,
//             far: 1000,
//           }}
//           style={{ background: "transparent" }}
//         >
//           <directionalLight intensity={2.4} position={[0, 0, 1]} />
//           <ambientLight intensity={0.6} />
//           <spotLight
//             position={[0, 15, 0]}
//             angle={0.3}
//             penumbra={1}
//             intensity={2}
//             castShadow
//           />
//           <Suspense fallback={<Loader />}>
//             <Dog
//               currentAnimation={currentAnimation}
//               position={[0, 0, 0]}
//               rotation={[2, 0, 1]}
//             />
//           </Suspense>
//         </Canvas>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Dog from "../models/Dog";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { socialLinks } from "../constants";

// Error boundary for handling Three.js errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D Model Error:", error);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-red-50 rounded-lg p-4">
          <h3 className="text-red-600 font-medium text-lg">
            Something went wrong with the 3D model
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Please check the console for details
          </p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mehak Mattoo",
          from_email: form.email,
          to_email: "mehakmattoo.info@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Message Sent",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 2000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex lg:flex-row flex-col gap-3 max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col ">
        <h1 className="head-text">Get in Touch</h1>
        <div className="flex items-center gap-4 mt-4">
          <div className="mt-6 flex flex-wrap gap-8">
            {socialLinks.map((skill) => (
              <div
                className="block-container cursor-pointer w-14 h-14"
                key={skill.name}
              >
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-10"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] ">
        <ErrorBoundary>
          <Canvas
            camera={{
              position: [0, 0, 7],
              fov: 60,
              near: 0.2,
              far: 1000,
            }}
            style={{ background: "transparent" }}
          >
            <directionalLight intensity={2.6} position={[0, 0, 1]} />
            <ambientLight intensity={0.6} />
            <spotLight
              position={[0, 12, 3]}
              angle={0.3}
              penumbra={1}
              intensity={2}
              castShadow
            />
            <Suspense fallback={<Loader />}>
              <Dog
                currentAnimation={currentAnimation}
                position={[0, 0, 0]}
                scale={[0.8, 1.2, 1]}
              />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default Contact;