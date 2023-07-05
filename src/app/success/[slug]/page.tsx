import PrimaryButton from '@/app/shared/widgets/Button';
import './styles.scss';
import Link from 'next/link';
const Success = () => {
  return (
    <div className="w-full flex justify-center success">
      <div className="container text-center center">
        <svg
          className="h-24 w-24 color-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /> <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h1 className="text-2xl">ส่งข้อมูลสำเร็จ</h1>
        <h2>คำขอของคุณได้รับการดําเนินการเรียบร้อยแล้ว</h2>
        <h3> คุณจะได้รับอีเมลยืนยันในไม่ช้า</h3>
        <Link href={'/'}>
          <PrimaryButton text="กลับสู่หน้าหลัก" className="px-12" />
        </Link>
      </div>
    </div>
  );
};
export default Success;
