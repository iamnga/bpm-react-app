import memberApi from "api/memberApi";
import { Member } from "models";
import { useState } from "react";
import { toast } from "react-toastify";
import AddEditPage from "./pages/AddEditPage";
import ListPage from "./pages/ListPage";

export default function MemberFeature() {
  const [editMember, setEditMember] = useState("");
  const [isAddEdit, setIsAddEdit] = useState(false);

  const handleSetEditMember = (meber: string) => {
    setEditMember(meber);
    setIsAddEdit(true);
  };

  const handleEditMember = (formValue: Member, isEdit: boolean) => {
    console.log(formValue);
    console.log(isEdit);
    if (isEdit) {
      (async () => {
        await memberApi.update(formValue);
        toast.info("Cập nhật thành công!");
        setEditMember("");
        setIsAddEdit(false);
      })();
    } else {
      (async () => {
        await memberApi.add(formValue);
        toast.success("Thêm mới thành công!");
        setIsAddEdit(false);
      })();
    }
  };

  const handleBackButton = () => {
    setIsAddEdit(false);
  };

  return (
    <div>
      {!isAddEdit ? (
        <ListPage handleSetEditMember={handleSetEditMember} />
      ) : (
        <AddEditPage
          editMember={editMember}
          handleEditMember={handleEditMember}
          handleBackButton={handleBackButton}
        ></AddEditPage>
      )}
    </div>
  );
}
