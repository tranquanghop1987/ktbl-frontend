import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface RichTextProps {
  data: {
    body: string;
  };
}

const RichText = ({ data }: RichTextProps) => {
  // TODO: STYLE THE MARKDOWN
  return (
    <section className="rich-text py-6 dark:bg-black dark:text-gray-50 ">
      {/* eslint-disable-next-line react/no-children-prop */}
      <Markdown children={data.body} remarkPlugins={[remarkGfm]} />
    </section>
  );
};

export default RichText;
