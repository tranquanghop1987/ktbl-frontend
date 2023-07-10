import ActiveCSS from '@/uikit/atoms/ActiveCss';
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
    <>
      {!isFirst ? <ActiveCSS /> : null}
      <ul className={`${isFirst ? 'menu nav-menu' : 'sub-nav'} ${className}`}>
        {menus?.map((item, index) => {
          return (
            <li key={index} className={isFirst ? 'menu-item  dropdown relative' : ' menu-item'}>
              <Link href={item?.link ?? ''} className={isFirst ? 'nav__link ' : 'sub-nav__link'}>
                {item?.label}
              </Link>
              {isFirst && item?.children ? (
                <img className="icon_image" src="/assets/icons/ep_arrow-down.svg" alt="" />
              ) : null}
              {item?.children ? renderMenu({ menus: item.children, isFirst: false }) : null}
            </li>
          );
        })}
      </ul>
    </>
  );
};
// const LeftMenu = ({ mode, isModal, data }: { mode: any; isModal?: boolean; data: ItemType[] }) => {
//   const menuItems = data === undefined ? items : items;

//   return <>{renderMenu(menuItems)}</>;
// };

// export default LeftMenu;
