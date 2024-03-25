import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ThreeDots } from "react-loader-spinner";
import './loader.scss'
const CustomLoader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        // title="Basic Modal"
        open={true}
        closeIcon={false}
        footer={false}
        centered // Center the modal vertically
        mask={true} // Disable the mask (the background overlay)
        style={{ backgroundColor: 'transparent' }}        
      >

        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="white"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
      </Modal>
    </>
  );
};

export default CustomLoader;
