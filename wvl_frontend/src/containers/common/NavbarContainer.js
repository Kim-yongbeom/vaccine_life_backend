import React, { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import NavbarComponent from "../../components/common/NavbarComponent";
import AuthContext from "../../context/AuthContext";

function NavbarContainer() {
  const { authInfo } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("accessToken");
    history.go();
  };

  const onClickProfileImg = () => {
    setVisible(!visible);
  };
  console.log(authInfo);
  return (
    <NavbarComponent
      onClickProfileImg={onClickProfileImg}
      logout={logout}
      visible={visible}
      authInfo={authInfo}
    />
  );
}

export default NavbarContainer;
