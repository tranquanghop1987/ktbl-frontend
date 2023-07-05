import Image from 'next/image';
import './styles.scss';
const BoardOfDirectors = () => {
  const directors = [
    {
      imageUrl: '/assets/images/new-detail-1.png',
      position: 'นายอภิชาติ อรรฆย์ฐากูร​',
      description: 'กรรมการผู้จัดการ',
    },
    {
      imageUrl: '/assets/images/new-detail-1.png',
      position: 'นายสกัญจน์ ปั้นเปี่ยมรัษฎ์​',
      description: 'รองกรรมการผู้จัดการ ผู้บริหารสายงานสินเชื่อธุรกิจ และ รักษาการ ผู้บริหารสายงานเครือข่ายสาขา',
    },
    {
      imageUrl: '/assets/images/new-detail-1.png',
      position: 'นายวรพงศ วงษ์กะพันธ์',
      description: ' ผู้ช่วยกรรมการผู้จัดการ ผู้บริหารสายงานสินเชื่อธุรกิจรายย่อย',
    },
    {
      imageUrl: '/assets/images/new-detail-1.png',
      position: 'นายเกรียงศักดิ์ ฐิติกวิน ',
      description: 'ผู้ช่วยกรรมการผู้จัดการ สายงานบริหารสินเชื่อธุรกิจ',
    },
  ];
  return (
    <div className="mt-28 w-full flex justify-center director">
      <div className="container">
        <h1>ผู้บริหารของบริษัท</h1>
        <div>
          {directors.map((item, index) => {
            return (
              <div key={index} className={`item-director w-full flex p-5 mt-4`}>
                <div className="relative w-56 h-56">
                  <Image
                    // width={400}
                    // height={300}
                    fill
                    src={item.imageUrl}
                    alt=""
                    style={{ aspectRatio: 4 / 3 }}
                  />
                </div>
                <div className="flex flex-column p-5">
                  <h1 className="prose prose-lg">{item.position}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
