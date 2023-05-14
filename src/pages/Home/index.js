import React, { useState } from 'react'
import Showcase from '../../components/Showcase';
import Modal from '../../components/Modal';

const Home = () => {
     
    const [showModal , setShowModal] = useState(false);
    const openModal = ()=> {
      setShowModal(true);
    }

   const closeModal = ()=> {
    setShowModal(false);
   }

  return (
    <div>
      
      <Modal closeModal={closeModal}  showModal={showModal}>Та мөрөөдөлдөө хүрэхдээ итгэлтай байна уу?</Modal>
        <Showcase openModal={openModal}/>
    </div>
  )
}

export default Home;