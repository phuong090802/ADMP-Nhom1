import React, { useContext } from "react";
import ItemLayout from "../../../component/molecule/item-layout/ItemLayout";
import { adminDepStatusSv } from "../../../service/admin/adminDepartment.sv";
import { AdminDepContext } from "./AdminDepProvider";
import { ToastAndroid } from "react-native";

export const Item = ({ data }) => {
  const { setDeps, setShowUpdateModal, setSelectedDep } =
    useContext(AdminDepContext);

  const onStatus = async () => {
    try {
      const response = await adminDepStatusSv(data._id, {
        isActive: !data.isActive,
      });
      setDeps((prev) => {
        return prev.map((dep) => {
          if (dep._id === data._id) return { ...dep, isActive: !data.isActive };
          else return dep;
        });
      });
      ToastAndroid.show(
        response?.message || "Cập nhật trạng thái khoa thàng công",
        ToastAndroid.SHORT
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = () => {
    setShowUpdateModal(true);
    setSelectedDep(data);
  };

  const onDetail = () => {};

  return (
    <ItemLayout
      text={data?.departmentName}
      status={data?.isActive}
      onStatus={onStatus}
      onEdit={onEdit}
      onDetail={onDetail}
    />
  );
};
