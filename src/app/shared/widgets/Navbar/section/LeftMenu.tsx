import Link from 'next/link';

export const renderMenu = ({
  menus = [],
  isFirst = true,
  className,
}: {
  menus: Array<any>;
  isFirst?: boolean;
  className?: string;
}): any => {
  return (
    <ul className={`${isFirst ? 'menu nav-menu' : 'sub-nav'} ${className}`}>
      {menus?.map((item, index) => {
        return (
          <li key={index} className={isFirst ? 'menu-item  dropdown' : ' menu-item'}>
            <Link href={''} className={isFirst ? 'nav__link' : 'sub-nav__link'}>
              {item?.label} {item?.children ? renderMenu({ menus: item.children, isFirst: false }) : null}
            </Link>
            {isFirst ? <div className="icon_image" /> : null}
          </li>
        );
      })}
    </ul>
  );
};
// const LeftMenu = ({ mode, isModal, data }: { mode: any; isModal?: boolean; data: ItemType[] }) => {
//   const menuItems = data === undefined ? items : items;

//   return <>{renderMenu(menuItems)}</>;
// };

// export default LeftMenu;