import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

interface GridBlokProps {
  blok: {
    _uid: string;
    component: string;
    columns?: any[];
    [key: string]: any;
  };
}

export default function Grid({ blok }: GridBlokProps) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.columns?.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
