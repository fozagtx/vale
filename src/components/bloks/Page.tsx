import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

interface PageBlokProps {
  blok: {
    _uid: string;
    component: string;
    body?: any[];
    [key: string]: any;
  };
}

export default function Page({ blok }: PageBlokProps) {
  return (
    <main {...storyblokEditable(blok)} className="min-h-screen">
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
