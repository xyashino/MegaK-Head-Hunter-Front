import { useState } from "react";

interface Props {
  confirmMessage: string;
  doAfterConfirm: () => void;
  showModal?: boolean;
}

export const useConfirm = ({
  doAfterConfirm,
  confirmMessage,
  showModal: propsShowModal = false,
}: Props) => {
  const [isOpenConfirm, setIsOpenConfirm] = useState(propsShowModal);
  const hideModal = () => setIsOpenConfirm(false);
  const showModal = () => setIsOpenConfirm(true);

  return {
    isOpenConfirm,
    hideModal,
    showModal,
    doAfterConfirm,
    confirmMessage,
  };
};
