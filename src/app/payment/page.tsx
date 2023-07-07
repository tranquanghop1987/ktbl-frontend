import Image from 'next/image';
import styles from './styles.module.scss';
const PaymentPage = () => {
  return (
    <div className="p-28">
      <section className={styles.bannerWrapper}>
        <header>
          <h1 className={'text-6xl mb-5 '}>Payment Method Page</h1>
        </header>
        {/* <Image fill alt={'banner'} src={'/assets/images/payment-method.jpg'} /> */}
      </section>
      <div className="flex justify-center">
        <div className="container">
          <section className={`${styles.historySection} mt-5`}>
            <div className={'grid grid-cols-1 ms:grid-cols-2 md:grid-cols-2 xl:grid-cols-2'}>
              <div className={styles.imageContainer}>
                <Image width={250} height={250} alt={'banner'} src={'/assets/images/payment-method/transfer.jpg'} />
              </div>
              <div className={'pr-10 p-10 flex-column justify-center'}>
                <h1 className={'text-3xl font-extrabold underline mb-3 color-primary'}>Transfer</h1>
              </div>
            </div>
          </section>
          <section className={`${styles.historySection} mt-5`}>
            <div className={'grid grid-cols-1 ms:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 '}>
              <div className={'pr-10 p-10 flex-column justify-center items-end'}>
                <h1 className={'text-3xl font-extrabold underline mb-3 color-primary'}>Money from Saving Account</h1>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  width={250}
                  height={250}
                  alt={'banner'}
                  src={'/assets/images/payment-method/saving-account.jpg'}
                />
              </div>
            </div>
          </section>
          <section className={`${styles.historySection} mt-5`}>
            <div className={'grid grid-cols-1 ms:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 '}>
              <div className={styles.imageContainer}>
                <Image width={250} height={250} alt={'banner'} src={'/assets/images/payment-method/cheque.jpg'} />
              </div>
              <div className={'pr-10 p-10 flex-column justify-center'}>
                <h1 className={'text-3xl font-extrabold underline mb-3 color-primary'}>Payment by Cheque</h1>
              </div>
            </div>
          </section>
          <section className={`${styles.historySection} mt-5`}>
            <div className={'grid grid-cols-1 ms:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 '}>
              <div className={'pr-10 p-10 flex-column justify-center items-center'}>
                <h1 className={'text-3xl font-extrabold underline mb-3 color-primary'}>Payment Point</h1>
                <ul className={`text-2xl pb-8`}>
                  <li>• ดูแลรักษาคุณภาพสินทรัพย์และหนี้สินของบริษัท</li>
                  <li>• ให้บริการและคำแนะนำที่มีคุณค่าแก่ลูกค้า</li>
                  <li>• ดูแลรักษาผลประโยชน์ให้แก่พนักงาน</li>
                  <li>• สร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น</li>
                  <li>• ดูแลรักษาคุณภาพสินทรัพย์และหนี้สินของบริษัท</li>
                  <li>• ให้บริการและคำแนะนำที่มีคุณค่าแก่ลูกค้า</li>
                  <li>• ดูแลรักษาผลประโยชน์ให้แก่พนักงาน</li>
                  <li>• สร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น</li>
                  <li>• ดูแลรักษาคุณภาพสินทรัพย์และหนี้สินของบริษัท</li>
                  <li>• ให้บริการและคำแนะนำที่มีคุณค่าแก่ลูกค้า</li>
                  <li>• ดูแลรักษาผลประโยชน์ให้แก่พนักงาน</li>
                </ul>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  width={250}
                  height={250}
                  alt={'banner'}
                  src={'/assets/images/payment-method/payment-point.jpg'}
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className={'pb-12'}></div>
    </div>

    // <div className="p-28">
    //   <section>
    //     <header>
    //       <h1 className={'text-4xl mb-5'}>Payment Method Page</h1>
    //     </header>
    //   </section>
    //   <section className="flex justify-evenly">
    //     <div>
    //       <Image width={400} height={450} alt={'banner'} src={'/assets/images/transfer.jpg'} className="rounded-lg" />
    //       <p>Transfer</p>
    //     </div>
    //     <div>
    //       <Image width={400} height={450} alt={'banner'} src={'/assets/images/transfer.jpg'} className="rounded-lg" />
    //       <p>Transfer</p>
    //     </div>
    //     <div>
    //       <Image width={400} height={450} alt={'banner'} src={'/assets/images/transfer.jpg'} className="rounded-lg" />
    //       <p>Transfer</p>
    //     </div>
    //   </section>

    //   <section>
    //     <h1>Bill Payment</h1>

    //   </section>
    // </div>
  );
};

export default PaymentPage;
