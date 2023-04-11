import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter, GiHamburgerMenu } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

export default function Sidebar() {
  return (
    < >
    <Section>
      <div className="top">
        <div className="brand">
          <FaTaxi />
          <span>MY TAXI</span>
        </div>
        <div className="toggle"></div>
        <div className="links">
          <ul>
            <li>
              <a href="#">
              <MdSpaceDashboard />
              <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
              <RiDashboard2Fill />
              <span>Riders</span>
              </a>
            </li>
            <li>
              <a href="#">
              <FaAddressCard />
              <span>Payment Details</span>
              </a>
            </li>
            <li>
              <a href="#">
              <GiTwirlCenter />
              <span>Learning Center</span>
              </a>
            </li>
            <li>
              <a href="#">
              <BsFillChatTextFill />
              <span>FAQs</span>
              </a>
            </li>
            <li>
              <a href="#">
              <IoSettings />
              <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="logout">
        <a href="#">
          <FiLogOut />
          <span className='logout'>Logout</span>
        </a>
      </div>
    </Section>
    </>
  );
}

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
