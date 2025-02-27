import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Canvas3D from '../components/Canvas3D';

const Contact = () => {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dopk1am', 'template_h50vzxs', formRef.current, {
        publicKey: 'JcReAQC-7wse0LsXH',
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Have a project in mind? Let's connect!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

            <div className="space-y-6 mb-12">
              {[
                { icon: MapPin, label: 'Location', value: 'Bhopal' },
                { icon: Mail, label: 'Email', value: 'peyanshu.verma.10@gmail.com' },
                { icon: Phone, label: 'Phone', value: '9926017622' },
                { icon: Clock, label: 'Working Hours', value: 'Mon - Fri, 9am - 5pm PST' },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }} className="flex items-start">
                  <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">{item.label}</h3>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
   {/* <ThreeModel/> */}
            <div className="h-[300px] relative rounded-lg overflow-hidden">
              <Canvas3D modelPath="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/earth/model.gltf" scale={1.5} position={[0, 0, 0]} environmentPreset="city" cameraPosition={[0, 0, 4]} />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2 className="text-2xl font-bold text-white mb-8">Send Me a Message</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 bg-gray-800 p-6 rounded-lg">
              <div>
                <label className="text-white block mb-2">Name</label>
                <input type="text" name="user_name" required className="w-full p-3 rounded-lg bg-gray-700 text-white" />
              </div>

              <div>
                <label className="text-white block mb-2">Email</label>
                <input type="email" name="user_email" required className="w-full p-3 rounded-lg bg-gray-700 text-white" />
              </div>

              <div>
                <label className="text-white block mb-2">Message</label>
                <textarea name="message" required className="w-full p-3 rounded-lg bg-gray-700 text-white"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">Send Message</button>

              {success && <p className="text-green-400 mt-4">Message sent successfully!</p>}
              {error && <p className="text-red-400 mt-4">Failed to send message. Try again later.</p>}
            </form>
          </motion.div>
        </div>
      </div>

      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: 'What services do you offer?',
                answer: 'I specialize in 3D web development, interactive experiences, and frontend development using modern technologies like React, Three.js, and WebGL.'
              },
              {
                question: 'How much do your services cost?',
                answer: 'Project costs vary based on scope, complexity, and timeline. I offer custom quotes after discussing your specific requirements.'
              },
              {
                question: 'What is your typical project timeline?',
                answer: 'Timelines depend on project scope. Small projects may take 2-4 weeks, while larger ones can take 2-3 months or more.'
              },
              {
                question: 'Do you work with clients internationally?',
                answer: 'Yes, I work with clients worldwide. Remote collaboration is efficient through video calls, email, and project management tools.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
    </div>
  );
};

export default Contact;
