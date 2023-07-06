'use client';
import { TextField } from '@mui/material';
import './styles.scss';
import Upload from '../shared/widgets/UploadFile';
import PrimaryButton from '../shared/widgets/Button';
import { scrollToTargetAdjusted } from '@/lib/common';

const JoinUs = () => {
  const onJoin = () => {
    scrollToTargetAdjusted('joinUs', 66);
  };
  return (
    <main className="join-us flex align-center flex-column">
      <div className="banner-join flex justify-center">
        <div className="container my-auto">
          <div>
            <h1>สนใจร่วมเป็นส่วนหนึ่ง</h1>
            <h1>ในพลังขับเคลื่อนขององค์กร</h1>
            <h3>ธนาคารกรุงไทยกำลังมองหาบุคลากรที่มีศักยภาพ เพื่อเข้าทำงานในตำแหน่งต่างๆ</h3>
            <PrimaryButton text="ค้นหาตำแหน่งงานว่าง" className="mt-6" onClick={onJoin} />
          </div>
        </div>
      </div>

      <div className="container pt-6" id="joinUs">
        <section className="w-full grid md:grid-cols-2 gap-4 p-2">
          <div className="">
            <h2 className="text-2xl">เข้าร่วมกับเรา</h2>
            <form className=" flex flex-column gap-4 w-full">
              <TextField label="ชื่อ-นามสกุล" variant="outlined" type="text" className="  w-full" />
              <TextField label="ตำแหน่งงานที่ต้องการ" variant="outlined" type="text" className="  w-full " />
              <TextField label="เบอร์โทรศัพท์" variant="outlined" type="text" className="  w-full " />
              <TextField label="อีเมล" variant="outlined" type="email" className="  w-full " />
              <Upload lable="เรซูเม่" className=" w-full" />
              <div className="w-full">
                <PrimaryButton text="ส่ง" className="w-40 mt-4" />
              </div>
            </form>
          </div>
          <div className="m-auto border-r rounded-md">
            <img src="/assets/images/join-us/growing-together-sustainability.jpg" className="rounded-md" alt="" />
          </div>
        </section>
      </div>
    </main>
  );
};
export default JoinUs;
