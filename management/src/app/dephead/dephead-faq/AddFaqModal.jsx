import React, { useContext } from "react";
import ModalLayout from "../../../component/molecule/modal-layout";
import { DepheadFaqContext } from "./DepheadFaqProvider";

export const AddFaqModal = () => {
  const { showAddFaqModal, setShowAddFaqModal } = useContext(DepheadFaqContext);
  return (
    <ModalLayout
      visible={showAddFaqModal}
      onClose={() => setShowAddFaqModal(false)}
      title={"Thêm Faq"}
    ></ModalLayout>
  );
};
