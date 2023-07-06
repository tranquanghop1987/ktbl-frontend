import styles from './styles.module.scss';
import Image from 'next/image';

const persons = [
  {
    name: 'คุณวิรัช ไพสิฐเศวต\n',
    image: `/assets/images/bod/bod1.png`,
    pos: 'ประธานกรรมการ',
  },
  {
    name: 'คุณชุติเดช ชยุติ\n',
    image: `/assets/images/bod/bod2.png`,
    pos: 'กรรมการ',
  },
  {
    name: 'คุณชนิดาภา สุริยา\n',
    image: `/assets/images/bod/bod3.png`,
    pos: 'กรรมการ',
  },
  {
    name: 'คุณเรือนแก้ว เกษมสวัสดิ์ศรี\n',
    image: `/assets/images/bod/bod4.png`,
    pos: 'กรรมการ',
  },
  {
    name: 'คุณชาญชัย สินสุภรัตน์\n',
    image: `/assets/images/bod/bod5.png`,
    pos: 'กรรมการ',
  },
];

const PersonCard = ({ person }: { person: { image: string; name: string; pos: string } }) => {
  return (
    <div className={styles.cardWraper}>
      <div className={styles.cardImage}>
        <Image src={`${person.image}`} alt={'per'} fill></Image>
      </div>
      <div className={styles.content}>
        <p className={styles.name}>{person.name}</p>
        <p className={styles.pos}>{person.pos}</p>
      </div>
    </div>
  );
};

const StructureLead = () => {
  return (
    <>
      <Image src={`/assets/images/bod/bg.jpg`} fill alt={'bg'} objectFit={'cover'} style={{ zIndex: -1 }} />

      <div className={styles.wrapper}>
        <div className={styles.headTitle}>
          <span>คณะกรรมการ</span>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gl:grid-cols-4 gap-20`}>
          <div className={`col-span-1 sm:col-span-2 md:col-span-4 gl:col-span-4 flex justify-center`}>
            <PersonCard person={persons[0]}></PersonCard>
          </div>
          {persons
            .filter((person, index) => {
              return index > 0;
            })
            .map((per, key) => {
              return (
                <div key={key} className={`flex justify-center`}>
                  <PersonCard person={per}></PersonCard>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default StructureLead;
