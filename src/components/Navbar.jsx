import { Button, Dropdown, Flex, Image, Input, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import Profile from "./Profile";
import DropdownMenu from "./Profile";
import { FileImageFilled, ProfileFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = ()=>{

  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  const items = [
    {
      key: "1",
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={'/profile'}
        >
         <ProfileFilled/> My Profile
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLogOut}
        >
         Log Out
        </Button>
      ),
    },
    
  ];
  
  return (
    <div>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Flex
          style={{
            width: "100%",
            height: "40%",
            display: "flex",
            justifyContent: "space-between",
            margin: "15px",
          }}
        >
          <Input type="Search" placeholder="Search" style={{ width: "20%" }} />

          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Image
              style={{
                cursor: "pointer",
                display: "block",
                marginBottom: "4",
                borderRadius: "50%",
                height: "150%",
                backgroundColor: "white",
              }}
              preview={false}
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            />
          </Dropdown>
        </Flex>
      </Header>
    </div>
  );
};

export default Navbar;
