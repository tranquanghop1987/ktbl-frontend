import styles from './styles.module.scss';
import Link from 'next/link';

const Breadcrumb = ({ items }: { items: { text: string; link?: string }[] }) => {
  return (
    <>
      <div>
        <span>
          <Link href={'/'} className={styles.textCrumb}>
            หน้าแรก
          </Link>
          {items.map((item) => {
            return item.link ? (
              <Link href={item.link} className={styles.textCrumb}>
                <span className={styles.textCrumb}> / {item.text}</span>
              </Link>
            ) : (
              <span className={styles.textCrumb}> / {item.text}</span>
            );
          })}
        </span>
      </div>
    </>
  );
};

export default Breadcrumb;
