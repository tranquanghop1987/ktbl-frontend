import RichText from '@/uikit/atoms/RichText';
import ImageSlider from '@/uikit/atoms/ImageSlider';
import Quote from '@/uikit/atoms/Quote';
import Media from '@/uikit/atoms/Media';
import VideoEmbed from '@/uikit/atoms/VideoEmbed';

export function articleRenderer(section: any, index: number) {
  switch (section.__component) {
    case 'shared.rich-text':
      return <RichText key={index} data={section} />;
    case 'shared.slider':
      return <ImageSlider key={index} data={section} />;
    case 'shared.quote':
      return <Quote key={index} data={section} />;
    case 'shared.media':
      return <Media key={index} data={section} />;
    case 'shared.video-embed':
      return <VideoEmbed key={index} data={section} />;
    default:
      return null;
  }
}
