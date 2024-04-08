import { useRef, useState } from 'react';
import Modal from "./Modal";
import ModalImage from '../asset/modal-image-1.jpg'

import LogoImage from '../asset/tandym-logo.jpg'
import { IoFlash } from "react-icons/io5";
import FlagImage from '../asset/american-flag.png'
import { PiCursorClickFill } from "react-icons/pi";
import { CiLock } from "react-icons/ci";


export default function CredentialModal({ open, onClose }) {
  const [isInputFocused, setInputFocused] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = () => {
    const value = inputRef?.current.value;
    console.log('Input Value:', value);
    if (value.length >= 10) {
      setShowButton(true);
    } 
     else {
      setShowButton(false);
    }
  };
  

  return (
    <Modal open={open} onClose={onClose}>
      <div className="sm:w-[24rem] h-[80vh] pt-4  text-center overflow-x-scroll scrollbar-hidden ">
          <div className="mx-auto px-3">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x absolute w-6  cursor-pointer" onClick={onClose}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <img src={ModalImage} className="w-16 mx-auto" />
            </div>
          </div> 
          <div className='border-y border-gray-200 mt-5 text-xs font-medium text-gray-500 py-1 flex justify-center items-center gap-1'>
            <span>
          <CiLock fontSize={15}/>
            </span>
          LockSecured and powered by {" "}<img src={LogoImage} className='h-3' />
</div>
          <section className="text-black px-3">
            <p className="text-[1.5rem]  sm:text-[1.6rem] leading-8 text-black font-bold  mt-8 text-left">
              Your phone number is your digital card
            </p>
            <p className="mt-6 text-left text-base font-medium w-[90%]">We use your phone number to securely identify you only when you log in and pay.</p>

            <div className="relative h-10 w-full mt-6">
              <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${isInputFocused ? 'opacity-100' : 'opacity-0'}`}>
                <img src={FlagImage} className="w-5 h-5"/>
              </span>
              <input 
  type="number" 
  className="peer h-full w-full bg-[#f9f9f9] rounded-t-md focus:bg-[#eeeeee] px-10 py-[1.30rem] font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all border-b  border-gray-500 focus:border-b-2 focus:border-black appearance-none" 
  placeholder=" " 
  onFocus={() => setInputFocused(true)}
  onBlur={() => setInputFocused(false)}
  onKeyDown={handleInputChange}
  ref={inputRef} 
/>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Mobile Phone Number
              </label>
            </div>
        
        <div className="mt-6 text-[1rem] text-start border border-gray-500 rounded-lg">
            {/* List of images and text */}
            <ul className='pl-1 sm:pl-3 mt-5 font-medium text-[15px] sm:text-base'>

            <li className="flex items-center space-x-1 sm:space-x-3">
              <IoFlash className="w-5 h-5" />
              <p>Get a decision with no hard credit pull
</p>
            </li>
            <li className="flex items-center space-x-1 sm:space-x-3 mt-4">
              <PiCursorClickFill  className="w-5 h-5" />
              <p>Connect your bank for secure repayment
</p>
            </li> 
            </ul>
        <div className="flex items-center justify-center py-3 space-x-3 mt-4 rounded-b-lg" style={{backgroundImage: 'linear-gradient(to right, #d6e4e2, #ffceb2)'}}>
          <IoFlash className="w-5 h-5" />
          <p><span className="font-semibold">$80</span> on your first order of <span className="font-semibold">$800 </span> or more</p>
        </div>
          </div>

{showButton?
          <button onClick={onClose}className="bg-black  cursor-pointer border-none  mx-auto text-lg font-semibold mt-8 w-full text-white rounded-3xl py-2  mb-8">Get a Decision Now</button>
        :   <button className="bg-[#bdbebe]  cursor-default border-none  mx-auto text-lg font-semibold mt-8 w-full text-white rounded-3xl py-2  mb-8">Get a Decision Now</button>
        }
          </section>
        </div>  
    </Modal>
  );
}
