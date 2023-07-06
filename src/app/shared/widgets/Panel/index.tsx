import React from 'react';
import './styles.scss';
import ActiveCSS from '@/uikit/atoms/ActiveCss';

export type ItemProps = {
  label: string;
  key: string | number;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export type PanelProps = {
  items: Array<ItemProps>;
};
const Panel = ({ items }: PanelProps) => {
  return (
    <div className="panel">
      {items.map((item) => {
        return (
          <div className="panel-item relative" key={item.key}>
            <h3>{item.label}</h3>
            <ActiveCSS />
            <div className="content p-4">{item.children}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Panel;
