import Image from 'next/image';
import './styles.scss';
const Promotion = () => {
  return (
    <main className="py-14 w-full justify-center flex baohiem">
      <div className="container pt-3 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full  rounded	">
          <Image
            className="rounded	shadow-black"
            src={'/assets/images/mobie_product.png'}
            alt="king"
            fill
            style={{ aspectRatio: 4 / 3 }}
          />
        </div>
        <div className="w-full px-4 flex flex-column justify-center ">
          <h1>บริการด้านประกันภัย</h1>
          <h2 className="text-xl">การทำประกันภัยรถยนต์ ภาคสมัครใจและภาคบังคับ </h2>
          <p>
            ประกันภัยรถยนต์ คือ การประกันความสูญเสียหรือเสียหายที่เกิดกับรถยนต์
            รวมถึงความสูญเสียหรือเสียหายที่รถยนต์ก่อให้เกิดขึ้นแก่ชีวิตร่างกายหรืออนามัย และ ทรัพย์สินของบุคคลภายนอก
            ตลอดจนบุคคลที่โดยสารที่อยู่ในรถยนต์นั้นด้วย
            โดยบริษัทประกันจะชดใช้ค่าสินไหมทดแทนให้แก่ผู้เอาประกันภัยเมื่อเกิดความ
            เสียหายขึ้นตามเงื่อนไขที่ระบุไว้ในกรมธรรม์ประกันรถยนต์
          </p>
          <p className="my-4 font-semibold	">
            แม้การทำประกันภัยรถยนต์จะไม่ใช่หนทางที่จะลดความเสี่ยงในการเกิดอุบัติเหตุ
            แต่ก็เป็นสิ่งที่ช่วยลดภาระค่าใช้จ่ายให้ทางผู้เอาประกันภัย หากเกิดอุบัติเหตุทางรถยนต์ ขึ้นได้นะค่ะ{' '}
          </p>
          <span className="text-primary font-black	">
            สนใจติดต่อ เจ้าหน้าที่ 0-2407-1500 ต่อ 7092 – 7093 ดำเนินการภายใต้โครงสร้างการดำเนินงานที่บริษัทกำหนด
            (อยู่ระหว่างดำเนินการ)
          </span>
        </div>
      </div>
    </main>
  );
};
export default Promotion;
