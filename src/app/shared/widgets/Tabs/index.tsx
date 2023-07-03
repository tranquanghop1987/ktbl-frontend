'use client';

import React, { useState } from 'react';

export type TabsProps = { key: string; label: string; children?: React.ReactNode };
const Tab = ({ items = [] }: { items: Array<TabsProps> }) => {
  const [active, setActive] = useState('');
  const handelClick = (key: string) => () => {
    setActive(key);
  };

  return (
    <>
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
        {items.map((item) => {
          return (
            <li className="mr-2" key={item.key} onClick={handelClick(item.key)}>
              <button
                className={
                  active === item.key
                    ? 'my-2 block border-x-0 border-b-2 border-t-0  px-7 pb-3.5 pt-4  font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate  data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 border-indigo-500'
                    : 'inline-block p-4 border-b-2 rounded-t-lg'
                }
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
      {items.map((item, index) => {
        return (
          <div key={index} className={active === item.key ? 'container' : 'hidden'}>
            {item.children ?? null}
          </div>
        );
      })}
    </>
  );
};
export default Tab;
