import Navbar from '@/app/shared/widgets/Navbar';
import styles from './styles.module.scss';
import ArticleCardList from '@/app/shared/widgets/ArticleCardList';
import Breadcrumb from '@/app/shared/widgets/Breadcrumb';

const NewDetail = ({ params }: { params: { type: string; slug: string } }) => {
  console.log(params); // load news detail from params
  const content = `<p style="text-align: center;">
\t\t\t<img alt="" class="w100p" src="/ktb/imgUpload/news/20230628_anithin-W700-2.jpg" style="max-width: 700px;"></p>
\t\t<p>
\t\t\t<br>
\t\t\t<strong>รองนายกรัฐมนตรี เยี่ยมชมบูธ “กรุงไทย” ในงานมหกรรมสมุนไพรแห่งชาติ ครั้งที่ 20</strong></p>
\t\t<br>
\t\t<p>
\t\t\t<strong>นายอนุทิน ชาญวีรกูล รองนายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงสาธารณสุข (สธ.)</strong> ให้เกียรติเยี่ยมชม <strong>บูธธนาคารกรุงไทย ในงาน “มหกรรมสมุนไพรแห่งชาติ ครั้งที่ 20” </strong>จัดโดย กรมการแพทย์แผนไทยและการแพทย์ทางเลือก กระทรวงสาธารณสุข ระหว่างวันที่ 28 มิถุนายน - 2 กรกฎาคม 2566 ที่ฮอลล์ 11 – 12 ณ ศูนย์แสดงสินค้าและการประชุม อิมแพ็ค เมืองทองธานี โดยมี <strong>นายธนบัตร รักสุจริต ผู้อำนวยการฝ่ายธุรกิจภาครัฐ ธนาคารกรุงไทย</strong> ให้การต้อนรับ</p>
\t\t<br>
\t\t<p>
\t\t\tธนาคารกรุงไทย ในฐานะธนาคารพาณิชย์ของรัฐ มุ่งมั่นนำเทคโนโลยีและนวัตกรรมทางการเงินมาใช้ในการยกระดับการให้บริการ เพื่อให้คนไทยเข้าถึงสิทธิและสวัสดิการด้านสุขภาพอย่างทั่วถึง เท่าเทียม สะดวก รวดเร็ว ผ่านกระเป๋าสุขภาพ บนแอปพลิเคชันเป๋าตัง โดยภายในงานมหกรรมสมุนไพรแห่งชาติ ครั้งที่ 20 นี้ที่บูธของธนาคาร ลูกค้าประชาชนจะได้เรียนรู้วิธีการใช้งาน ทำความรู้จักกับบริการ และสิทธิสวัสดิการด้านสุขภาพต่าง ๆ บนกระเป๋าสุขภาพ พร้อมรับของสมนาคุณพิเศษ ฟรี นอกจากนี้ ธนาคารได้ร่วมกับสำนักงานหลักประกันสุขภาพแห่งชาติ (สปสช.) จัดให้บริการฉีดวัคซีนไข้หวัดใหญ่แก่ประชาชน 7 กลุ่มเสี่ยง ตามเงื่อนไขของสปสช. โดยไม่เสียค่าใช้จ่าย ประกอบด้วย</p>
\t\t<br>
\t\t<p>
\t\t\t1. หญิงตั้งครรภ์ อายุครรภ์ 4 เดือนขึ้นไป<br>
\t\t\t2. เด็กอายุ 6 เดือน ถึง 2 ปี<br>
\t\t\t3. ผู้ป่วยโรคปอดอุดกั้นเรื้อรัง หอบหืด หัวใจ หลอดเลือดสมอง ไตวาย ผู้ป่วยมะเร็งที่อยู่ระหว่างการได้รับเคมีบำบัด และเบาหวาน<br>
\t\t\t4. บุคคลที่มีอายุ 65 ปีขึ้นไป<br>
\t\t\t5. โรคธาลัสซีเมียและผู้ที่มีภูมิคุ้มกันบกพร่อง (รวมผู้ติดเชื้อ HIV ที่มีอาการ)<br>
\t\t\t6. โรคอ้วน (น้ำหนัก &gt; 100 กิโลกรัม หรือ BMI &gt; 35 กิโลกรัมต่อตารางเมตร)<br>
\t\t\t7. ผู้พิการทางสมองที่ช่วยเหลือตนเองไม่ได้</p>
\t\t<br>
\t\t<p>
\t\t\tประชาชนที่สนใจเข้ารับการฉีดวัคซีนไข้หวัดใหญ่ สามารถลงทะเบียนเพื่อรับสิทธิ์ได้ง่ายๆ เพียงเปิดใช้งาน กระเป๋าสุขภาพ บนแอปพลิเคชัน เป๋าตัง</p>
\t\t<div class="dttxt ktfast-normal aos-init aos-animate" data-aos="fade-down" data-aos-delay="300">
\t\t\t<div>
\t\t\t\t<br>
\t\t\t\t<strong>ทีม&nbsp;</strong><strong>Marketing Strategy&nbsp;</strong><br>
\t\t\t\t<strong>28 มิถุนายน 2566</strong></div>
\t\t</div>`;

  const news = {
    content,
    title: `รองนายกรัฐมนตรี เยี่ยมชมบูธ “กรุงไทย” ในงานมหกรรมสมุนไพรแห่งชาติ ครั้งที่ 20`,
    createDate: `อัพเดทวันที่ 28 มิ.ย. 2566`,
    type: 'ข่าวกิจกรรม',
  };
  return (
    <>
      <Navbar isHome={false}></Navbar>
      <div className={styles.newsWrapper}>
        <div className={styles.block1}>
          <Breadcrumb
            items={[
              { text: params.type == 'news' ? 'ข่าวประชาสัมพันธ์' : 'บทความ', link: `/articles/${params.type}` },
              { text: `รองนายกรัฐมนตรี เยี่ยมชมบูธ “กรุงไทย” ในงานมหกรรมสมุนไพรแห่งชาติ ครั้งที่ 20` },
            ]}
          ></Breadcrumb>
        </div>
        <div className={styles.block2}>
          <div className={styles.bodyWraper}>
            <h1 className={styles.newTitle}>{news.title}</h1>
            <p className={styles.createDate}>{news.createDate}</p>
            <div>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                {news.type}
              </span>
            </div>
            <div className={styles.contentWraper}>
              <img src="https://krungthai.com/ktb/imgUpload/news/20230628_anithin-W700-2.jpg" alt="" />
              <p className={styles.content} dangerouslySetInnerHTML={{ __html: news.content }}></p>
            </div>
          </div>
        </div>
        <div className={styles.block3}>
          <div className={styles.wrapper}>
            <div className={styles.header}>แนะนำสำหรับคุณ</div>
            <div className={styles.slideWraper}>
              <ArticleCardList articleType="news" hideTitle={true} hideSeeAll={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDetail;
