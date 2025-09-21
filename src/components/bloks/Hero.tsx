import { storyblokEditable } from "@storyblok/react";

interface HeroBlokProps {
  blok: {
    _uid: string;
    component: string;
    headline?: string;
    subheading?: string;
    background_color?: string;
    text_color?: string;
    [key: string]: any;
  };
}

export default function Hero({ blok }: HeroBlokProps) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="py-20 px-4"
      style={{
        backgroundColor: blok.background_color || "#f8f9fa",
        color: blok.text_color || "#333",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {blok.headline && (
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {blok.headline}
          </h1>
        )}
        {blok.subheading && (
          <p className="text-xl md:text-2xl text-gray-600">{blok.subheading}</p>
        )}
      </div>
    </section>
  );
}
