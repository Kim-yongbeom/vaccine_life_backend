import React from "react";
import { useState } from "react";
import { useContext } from "react";
import EditProfile from "../../../components/auth/profile/EditProfile";
import AuthContext from "../../../context/AuthContext";

function EditProfileContainer() {
  const { authInfo, setAuthInfo } = useContext(AuthContext);
  const defaultOption = authInfo;

  const onChangeDropDown = (payload) => {
    setAuthInfo({
      ...authInfo,
      gender: payload.value,
      type: payload.value,
      degree: payload.value,
    });
  };

  const [profile, setProfile] = useState({
    imgBase64: "",
    imgFile: null,
    imgUrl: "",
  });

  const onClickAvatar = () => {
    console.log("??");
  };

  return (
    <EditProfile
      defaultOption={defaultOption}
      onChangeDropDown={onChangeDropDown}
      onClickAvatar={onClickAvatar}
    />
  );
}

export default EditProfileContainer;
