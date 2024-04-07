import { useState } from "react"
import Modal from "./Modal"
import ModalImage from '../asset/modal-image-1.jpg'
import CreditModal from "./CreditModal";  
import Loading from "./Loading";

export default function CheckoutModal() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [additionalModalOpen, setAdditionalModalOpen] = useState(false); // State for additional modal

  const handleOpen = () => {
    setLoading(true); // Show loading text
    setTimeout(() => {
      setOpen(true); // Open modal after 3 seconds
      setLoading(false); // Hide loading text
    }, 3000);
  };

  const handleAdditionalModalClose = () => {
    setAdditionalModalOpen(false);
  };
  const handleAdditionalModalOpen = () => {
    setOpen(false)
    setAdditionalModalOpen(true);
  };


 


  if (loading) {
    return <Loading/>
  }


  return (
    <main className="App">
      <div className="h-full flex justify-center align-middle mt-10">
      <button className="btn btn-danger" onClick={handleOpen}>
        Open
      </button>

      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="sm:w-[24rem] p-4 text-center pb-10">
          <div className="mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x absolute w-6  cursor-pointer" onClick={()=>setOpen(false)}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <img src={ModalImage} className="w-16 mx-auto" />
            </div>
          </div>
          <section >
            <p className="text-[1.6rem] leading-8 text-black font-bold mt-10">
              Earn 5 points per $ on every order with our digital card
            </p>
            <p className="flex justify-between text-black font-semibold items-center text-sm px-6 bg-[#f5f4f3] h-10 rounded-md mt-10">
              <span>IIR Pay Total</span>
              <span>$183.86</span>
            </p>
            <p className="flex justify-between text-gray-800 font-medium items-center px-6 text-sm bg-[#d6e3e0] h-8 rounded-full mt-5">
              <span>5 points per $ on every order
              </span>
              <span>919 pts</span>
            </p>

            <button className="border-none cursor-pointer mx-auto text-lg font-semibold mt-10"  onClick={handleAdditionalModalOpen}>Learn More & Apply</button>
          </section>
        </div>
      </Modal>

       {/* Render the additional modal */}
       <CreditModal open={additionalModalOpen} onClose={handleAdditionalModalClose} />
       
    </main>
  )
}
