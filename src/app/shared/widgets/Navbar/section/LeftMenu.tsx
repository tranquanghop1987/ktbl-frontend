'use client';
import React from 'react';
import {Menu} from 'antd';
import {ItemType} from "antd/es/menu/hooks/useItems";
import { items } from '@/app/shared/modules/global';

const LeftMenu = ({ mode, isModal, data }: { mode: any; isModal?: boolean; data: ItemType[] }) => {

  const menuItems = (data === undefined) ? items : items;

  return (
    <Menu
      mode={mode}
      items={menuItems}
      style={{
        backgroundColor: 'transparent',
        color: isModal ? '#262626' : '#ffffff',
      }}
    ></Menu>
  );
};

export default LeftMenu;
