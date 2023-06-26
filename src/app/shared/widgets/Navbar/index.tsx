'use client';
import React, { useState } from 'react';
import { Layout, Button, Drawer } from 'antd';
import LeftMenu from './section/LeftMenu';
import { MenuOutlined } from '@ant-design/icons';
import {ItemType} from "antd/es/menu/hooks/useItems";

const Navbar = ({ isHome = true, data }: { isHome?: boolean, data: ItemType[] }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

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
              <LeftMenu mode={'inline'} isModal={true} data={data} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
