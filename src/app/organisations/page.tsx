'use client';
import styles from './styles.module.scss';

const OrganisationChart = () => {
  return (
    <>
      <div className="container p-32 text-center mx-auto">
        <h1 className={`${styles.level1} ${styles.rectangle}`}>คณะกรรมการบริษัท</h1>
        <ol className={styles.level2Wrapper}>
          <li>
            <h2 className={`${styles.level2Alone} ${styles.rectangle}`}>สำนักกรรมการผู้จัดการ และกลยุทธ์องค์กร</h2>
          </li>
          <li>
            <h2 className={`${styles.level2} ${styles.rectangle}`}>กรรมการผู้จัดการ</h2>
            <ol className={styles.level3Wrapper}>
              <li>
                <h3 className={`${styles.level3} ${styles.rectangle}`}>
                  สายงาน บริหารเครือข่ายสาขา (Branch Management)
                </h3>
                <ol className={styles.level4Wrapper}>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>สำนักงานเขต ภาคกลาง</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>สำนักงานเขต ภาคเหนือ</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>สำนักงานเขต ภาคใต้</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>สำนักงานเขต ภาคะวันออกเฉียงเหนือ</h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className={`${styles.level3} ${styles.rectangle}`}>สายงาน สินเชื่อธุรกิจ (Commercial Loan)</h3>
                <ol className={styles.level4Wrapper}>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>ฝ่ายสินเชื่อธุรกิจ 1</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>ฝ่ายสินเชื่อธุรกิจ 2</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>
                      ฝ่ายบริหารความสัมพันธ์ลูกค้าสินเชื่อธุรกิจ
                    </h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className={`${styles.level3} ${styles.rectangle}`}>
                  สายงาน บริหารสินเชื่อธุรกิจ (Commercial Loan Management)
                </h3>
                <ol className={styles.level4Wrapper}>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>งานแก้ไขหนี้และ สนับสนุนสินเชื่อธุรกิจ </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>งานติดตามหนี้ รายใหญ่ </h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className={`${styles.level3} ${styles.rectangle}`}>
                  ฝ่ายกลั่นกรองสินเชื่อ และอนุมัติสินเชื่อรายย่อย
                </h3>
              </li>
              <li>
                <h3 className={`${styles.level3} ${styles.rectangle}`}>สายงาน ปฏิบัติการ (Operations)</h3>
                <ol className={styles.level4Wrapper}>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>งานเก็บรักษานิติกรรม สัญญาและกรรมสิทธิ์</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>งานประเมินราคา ทรัพย์สิน </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>งานปฏิบัติการสินเชื่อ ธุรกิจและรายย่อย </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>งานประกันภัย</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>งาน Call Center</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>งานทะเบียน</h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className={`${styles.level3} ${styles.rectangle}`}>สายงาน สินเชื่อรายย่อย (Retail Loan) </h3>
                <ol className={styles.level4Wrapper}>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>ฝ่ายสินเชื่อ รถยนต์</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>ฝ่ายสินเชื่อ ทะเบียนรถยนต์ </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>งานสนับสนุน การตลาด </h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3 className={`${styles.level3} ${styles.rectangle}`}>
                  สายงาน บริหารงาน Outsource (Outsource Management)
                </h3>
                <ol className={styles.level4Wrapper}>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>กลุ่มปฏิบัติการ สินเชื่อ </h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>กลุ่มสนับสนุนความเสี่ยง, การเงินและบัญชี</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>กลุ่มสนับสนุน ติดตามหนี้และ กฎหมาย</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>กลุ่มสนับสนุน เทคโนโลยี สารสนเทศ</h4>
                  </li>
                  <li>
                    <h4 className={`${styles.level4} ${styles.rectangle}`}>กลุ่มสนับสนุนอื่นๆ</h4>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <h2 className={`${styles.level2Alone} ${styles.rectangle}`}>
              สายงานบริหารงาน Outsource (Outsource Management) <br /> - ฝ่ายสอบทานสินเชื่อธุรกิจและสินเชื่อรายย่อย{' '}
              <br /> - งาน Internal Audit
            </h2>
          </li>
        </ol>
      </div>
    </>
  );
};

export default OrganisationChart;
