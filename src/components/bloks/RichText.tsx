import { storyblokEditable, renderRichText } from "@storyblok/react";

interface RichTextBlokProps {
  blok: {
    _uid: string;
    component: string;
    content?: any;
    [key: string]: any;
  };
}

export default function RichText({ blok }: RichTextBlokProps) {
  const renderedRichText = renderRichText(blok.content);

  return (
    <div {...storyblokEditable(blok)} className="max-w-4xl mx-auto px-8 py-12">
      <div
        className="prose prose-lg prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: renderedRichText || "" }}
      />
    </div>
  );
}
