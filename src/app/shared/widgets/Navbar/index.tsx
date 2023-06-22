'use client';
import React, { useState } from 'react';
import { Layout, Button, Drawer } from 'antd';
import LeftMenu from './LeftMenu';
import { MenuOutlined } from '@ant-design/icons';

const Navbar = ({ isHome = true }: { isHome?: boolean }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here

  // Upto here

  return (
    <nav className="navbar">
      <Layout style={{ backgroundColor: isHome ? 'transparent' : '#00A6E6' }}>
        <Layout.Header className="nav-header">
          <div className="logo">
            <img src="/assets/images/KTBL-logo2.svg" alt="" />
          </div>
          <div className="navbar-menu">
            <div className="leftMenu">
              <LeftMenu mode={'horizontal'} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>

            <Drawer
              title={'Brand Here'}
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={'inline'} isModal={true} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
