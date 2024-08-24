import React, { useEffect, useState } from "react";
import logo from "../Asset/Tripwanderer_Logo.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {
  faSearch,
  faEdit,
  faComment,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0;
  height: 65px;
`;

const NavbarBrand = styled.div`
  width: 260px;
  display: flex;
  align-items: center;
  max-height: 100%;
  padding: 10px 20px;
`;

const Logo = styled.a`
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1bc;
  border-radius: 50px;
  padding: 0px 10px;
  width: 400px;
  height: 45px;

  input {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    padding: 5px;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 5px 10px;
    border-left: #666 solid;
    padding-left: 20px;
  }
`;

const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;

  a {
    color: black;
    text-decoration: none;
    background-color: white;
    margin-left: 20px;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 47.67px;
  }

  svg {
    stroke-width: 30;
  }
`;

const NavbarUser = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-right: 30px;
  cursor: pointer;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    background-color: #666;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  .user-name {
    font-weight: bold;
    font-size: 16px;
    color: #666;
  }

  .user-role {
    font-size: 14px;
    color: #046cb8;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 150px;
  z-index: 10;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 8px 10px;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const NavbarButton = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
`;

const NavbarButtonItem = styled.a`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
  background-color: #046cb8;
  margin: 10px;
  &.active {
    background-color: #046cb8;
    color: white;
    border-radius: 5px;
  }
  &:hover {
    background-color: #00518c;
    color: white;
  }
`;

const Nav = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setUser({ ...userDoc.data(), id: user.uid });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth); // Logs the user out from Firebase Authentication
    setDropdownOpen(false); // Closes the dropdown menu
  };
  console.log(user);
  return (
    <NavbarContainer>
      <NavbarHeader>
        <NavbarBrand>
          <Logo href="/">
            <img src={logo} alt="TripWanderer Logo" />
          </Logo>
        </NavbarBrand>
        <NavbarSearch>
          <input type="text" placeholder="Search for stocks and more" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </NavbarSearch>
        <NavbarMenu>
          <a href="#">
            <FontAwesomeIcon icon={faEdit} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faComment} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faBell} />
          </a>
        </NavbarMenu>

        {user ? (
          <NavbarUser onClick={() => setDropdownOpen(!dropdownOpen)}>
            <UserAvatar>
              <img src={user.avatar} alt="User Avatar" />
            </UserAvatar>
            <UserInfo>
              <div className="user-name">{user.username}</div>
              <div className="user-role">Trip maker</div>
            </UserInfo>
            {dropdownOpen && (
              <DropdownMenu>
                <DropdownItem href="/profile">Profile</DropdownItem>
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            )}
          </NavbarUser>
        ) : (
          <NavbarButton>
            <NavbarButtonItem href="/login">Đăng nhập</NavbarButtonItem>
            <NavbarButtonItem href="/signup">Đăng Ký</NavbarButtonItem>
          </NavbarButton>
        )}
      </NavbarHeader>
    </NavbarContainer>
  );
};

export default Nav;
