import Modal from "./Modal";
import ModalImage from '../asset/modal-image-1.jpg'
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { IoFlash } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { useState } from "react";
import CredentialModal from "./CredentialModal";
import { RiHomeSmile2Fill } from "react-icons/ri";





export default function CreditModal({ open, onClose }) {
    const [additionalModalOpen, setAdditionalModalOpen] = useState(false); // State for additional modal

  
    const handleCredentialModalClose = () => {
        setAdditionalModalOpen(false);
      };
      const handleCredentialModalOpen = () => {
        onClose()
        setAdditionalModalOpen(true);
      };
  return (
    <main>

    <Modal open={open} onClose={onClose}>
    <div className="sm:w-[24rem] h-[80vh] pt-4  text-center overflow-x-scroll scrollbar-hidden ">
      <div className=" px-2 sm:px-5">
      <div className="mx-auto ">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x absolute w-6  cursor-pointer" onClick={onClose}>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <img src={ModalImage} className="w-16 mx-auto" />
        </div>
      </div> 
      <section className="text-black">
        <p className="text-[1.4rem] sm:text-[1.6rem] leading-8 text-black font-bold mt-10">
        A digital credit or debit card with best-in-class rewards

        </p>
        <ul className="mt-6  text-[0.85] sm:text-[1rem] text-start  font-medium">
            {/* List of images and text */}
            <li className="flex items-start space-x-1 sm:space-x-3">
              <FaHandHoldingUsd className="w-5 h-5" />
              <p>Earn 5 points per $ on every order</p>
            </li>
            <li className="flex items-start space-x-1 sm:space-x-3 mt-4">
              <IoLockClosedSharp className="w-5 h-5" />
              <p>Connect your bank for secure repayment
</p>
            </li>
            <li className="flex items-start space-x-1 sm:space-x-3 mt-4">
              <FaUnlockKeyhole  className="w-5 h-5" />
              <p>Support Import Image Racing

</p>
            </li>
            <li className="flex items-start space-x-1 sm:space-x-3 mt-4">
              <IoFlash  className="w-5 h-5" />
              <p>Get a decision with no hard credit pull
</p>
            </li>
          </ul>
         {/* Two boxes */}
         <div className="flex gap-2 sm:gap-5 mt-6 text-black w-full">
  {/* Box 1 */}
  <div className={boxCss} onClick={handleCredentialModalOpen}>
    <div className="p-4">
      <div className="flex items-center space-x-2">
        <FaCreditCard className="w-5 h-5 text-green-500" />
        <h3 className="text-lg font-semibold">Credit</h3>
      </div>
      <p className="text-base sm:text-[1.1rem] text-start mt-2">Pay over time. Credit lines up to $5,000, subject to approval.</p>
    </div>
    <button className="mt-4 bg-black rounded-b-lg font-bold text-white py-2 text-sm">Apply Now</button>
  </div>

  {/* Box 2 */}
  <div className={boxCss}
  onClick={handleCredentialModalOpen}>
    <div className="p-4">
      <div className="flex items-center space-x-2">
        <RiHomeSmile2Fill fontSize={22} className=" text-yellow-500" />
        <h3 className="text-lg font-semibold">Debit </h3>
      </div>
      <p className="text-base sm:text-[1.1rem] mt-2">Connect your bank and pay all at once up to $10,000.</p>
    </div>
    <button className="mt-4 bg-black rounded-b-lg font-bold text-white py-2 text-sm">Sign Up</button>
  </div>
</div>
      </section>

      </div>  

<div className="flex items-center justify-center py-3 space-x-3 mt-4 rounded-b-xl" style={{backgroundImage: 'linear-gradient(to right, #d6e4e2, #ffceb2)'}}>
  <IoFlash className="w-5 h-5" />
  <p><span className="font-semibold">$80</span> on your first order of <span className="font-semibold">$800 </span> or more</p>
</div>
    </div>
  </Modal>


  <CredentialModal open={additionalModalOpen} onClose={handleCredentialModalClose} />

  </main>

  );
}

const boxCss =" border border-black text-left rounded-lg flex flex-col justify-between w-1/2 cursor-pointer"