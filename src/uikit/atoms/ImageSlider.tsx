'use client';
import { Fade } from 'react-slideshow-image';
import Image from 'next/image';
import { getBackendSeoMedia } from '@/lib/api-helper';

interface Image {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    url: string;
  };
}

interface SlidShowProps {
  files: {
    data: Image[];
  };
}

const Slideshow = ({ data }: { data: SlidShowProps }) => {
  return (
    <div className="slide-container">
      <Fade>
        {data.files.data.map((fadeImage: Image, index) => {
          const imageUrl = getBackendSeoMedia(fadeImage.attributes.url);
          return (
            <div key={index}>
              {imageUrl && (
                <Image
                  className="w-full h-96 object-cover rounded-lg"
                  height={400}
                  width={600}
                  alt="alt text"
                  src={imageUrl}
                />
              )}
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default Slideshow;
