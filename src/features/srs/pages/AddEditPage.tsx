import memberApi from "api/memberApi";
import { Member } from "models";
import React, { useEffect, useState } from "react";
import MemberForm from "../components/MemberForm";

export interface AddEditPageProps {
  editMember: string;
  handleBackButton: () => void;
  handleEditMember: (formValue: Member, isEdit: boolean) => void;
}

export default function AddEditPage({
  editMember,
  handleBackButton,
  handleEditMember,
}: AddEditPageProps) {
  const memberId = editMember;
  const isEdit = Boolean(memberId);
  const [member, setMember] = useState<Member>();

  useEffect(() => {
    if (!memberId) return;
    else {
      // IFFE
      (async () => {
        try {
          const data: Member = await memberApi.getById(memberId);
          setMember(data);
        } catch (error) {
          console.log("Failed to fetch member details", error);
        }
      })();
    }
  }, [memberId]);

  const initialValues: Member = {
    id: "",
    name: "",
    ...member,
  } as Member;

  const handleMemberFormSubmit = async (formValues: Member) => {
    handleEditMember(formValues, isEdit);
  };

  return (
    <div>
      {(!isEdit || Boolean(member)) && (
        <MemberForm
          initialValues={initialValues}
          onSubmit={handleMemberFormSubmit}
          handleBackButton={handleBackButton}
        ></MemberForm>
      )}
    </div>
  );
}
