import React from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons";
import useStore from "../Zustand";

const SidebarNav = styled.nav`
  width: 220px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-image: linear-gradient(75deg, white, white);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  transition: transform 0.4s ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(-100%)"};
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

const OpenButton = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1100;
  font-size: 32px;
  color: #333;
  cursor: pointer;
  background: white;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: #f0f0f0;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 28px;
  color: gray;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Sidebar = () => {
  const { isSidebarVisible, isModalOpen, toggleSidebar } = useStore();

  return (
    <>
      <IconContext.Provider value={{ color: "gray" }}>
        {!isSidebarVisible && (
          <OpenButton onClick={toggleSidebar}>☰</OpenButton>
        )}

        <SidebarNav isVisible={isSidebarVisible && !isModalOpen}>
          <CloseButton onClick={toggleSidebar}>✖</CloseButton>
          <SidebarWrapper>
            {SidebarData.map((item, index) => (
              <SubMenu item={item} key={index} />
            ))}
          </SidebarWrapper>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
