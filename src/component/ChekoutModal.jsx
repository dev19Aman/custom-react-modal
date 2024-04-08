import { useState } from "react"
import Modal from "./Modal"
import ModalImage from '../asset/modal-image-1.jpg'
import CreditModal from "./CreditModal";
import Loading from "./Loading";
import { IoFlash } from "react-icons/io5";

export default function CheckoutModal() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [additionalModalOpen, setAdditionalModalOpen] = useState(false); 

  const handleOpen = () => {
    setLoading(true); 
    setTimeout(() => {
      setOpen(true); 
      setLoading(false); 
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
    return <Loading />
  }


  return (
    <main className="">

      <div className="w-full pt-10 px-4">
        <div className="border w-full sm:max-w-fit cursor-pointer mx-auto border-gray-200 rounded-lg py-4 px-3  relative"
          onClick={handleOpen}>
          <img src={ModalImage} className="w-12" />
          <p className="text-xs text-gray-700 mt-1"><strong className="underline">Save $80</strong> on your first purchase of <strong >$800 or more</strong> paid with our digital card</p>

          <div className="flex items-center justify-center py-2 px-2 rounded-2xl absolute w-fit -top-2 -right-4" style={{ backgroundImage: 'linear-gradient(to right, #d6e4e2, #ffceb2)' }}>
            <IoFlash className="w-3 h-3" />
            <p className="text-xs text-black font-semibold">$80 Limited Offer</p>
          </div>
        </div>

      </div>

      <Modal open={open} onClose={() => setOpen(false)}>

        <div className=" sm:w-[24rem] p-4 text-center pb-10 ">
          <div className="mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x absolute w-6  cursor-pointer" onClick={() => setOpen(false)}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <img src={ModalImage} className="w-16 mx-auto" />
            </div>
          </div>
          <section >
            <p className="text-[1.3rem] text-left sm:text-[1.6rem] leading-8 text-black font-bold mt-10">
              Earn 5 points per $ on every order with our digital card
            </p>
            <p className="flex justify-between text-black font-semibold items-center text-sm px-2 sm:px-6 bg-[#f5f4f3] h-10 rounded-md mt-7">
              <span>IIR Pay Total</span>
              <span>$183.86</span>
            </p>
            <p className="flex justify-between text-gray-800 font-medium items-center px-2 sm:px-6 text-sm bg-[#d6e3e0] h-8 rounded-full mt-5">
              <span>5 points per $ on every order</span>
              <span>919 pts</span>
            </p>

            <button className="border-none cursor-pointer mx-auto text-lg font-semibold mt-10" onClick={handleAdditionalModalOpen}>Learn More & Apply</button>
          </section>
        </div>

      </Modal>

      {/* Render the additional modal */}
      <CreditModal open={additionalModalOpen} onClose={handleAdditionalModalClose} />

    </main>
  )
}
