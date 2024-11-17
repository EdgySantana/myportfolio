//components
import Circles from '/components/Circles';

//icons
import {BsArrowRight} from 'react-icons/bs';

// framer
import {motion} from 'framer-motion';

//variants
import { fadeIn } from '../../variants';
import { useRef, useState } from 'react';

//email js
import emailjs from '@emailjs/browser';


const Contact = () => {

  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
   });

  const handleChange = ({target: { name, value }}) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "", // serviceID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "", // templateID
        {
          from_name: form.name,
          to_name: 'Edmundo',
          from_email: form.email,
          to_email: 'portfolioprojectsxyz@gmail.com',
          message: form.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        )

      setLoading(false);

      alert('Your message has been sent!')

      setForm({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setLoading(false);

      console.log(error);

      alert('Something went wrong!')
    }
  }


  return (
    <div className='h-full bg-primary/30 id="contact"'>
      <Circles />
      <div className='contact-container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[800px]'>
          {/* text */}
          <motion.h2  
            variants={fadeIn('up', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className='h2 text-center mb-12'>

            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <form ref={formRef} onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className='flex-1 flex flex-col gap-8 w-full mx-auto'>
            {/* input group */}
            <div className='flex gap-x-8 w-full'>
              <input type='text' placeholder='name' className='input' name='name' value={form.name} onChange={handleChange} required/>
              <input type='text' placeholder='email' className='input' name='email' value={form.email} onChange={handleChange} required/>
            </div>
           
            <textarea name='message' placeholder='Your message' className='textarea' value={form.message} onChange={handleChange} required/>
            <button className='field-btn rounded-full border border-white/50 max-w-[220px]
            px-8 py-2 transition-all duration-300 flex items-center justify-center
            overflow-hidden hover:border-accent group' type='submit' value='send' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <span className='group-hover:-trasition-y-[120%] group-hover:opacity-0
              transition-all duration-500'/>
                <div><BsArrowRight className='-translate-y-[50%] opacity-0 group-hover:flex
                group-hover:-translate-y-2  translate-x-2 group-hover:opacity-100 transition-all
                duration-300 absolute text-[18px]' />
                </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;