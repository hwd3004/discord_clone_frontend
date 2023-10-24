import { Modal } from "@mantine/core";
import useModal from "../../hooks/useModal";

const CreateServerModal = () => {
  const { isOpen, closeModal } = useModal("CreateServer");
  return (
    <Modal opened={isOpen} onClose={closeModal}>
      CreateServerModal
    </Modal>
  );
};

export default CreateServerModal;
