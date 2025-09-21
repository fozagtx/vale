import { storyblokEditable } from "@storyblok/react";

interface TeaserBlokProps {
  blok: {
    _uid: string;
    component: string;
    headline?: string;
    subheading?: string;
    description?: string;
    background_color?: string;
    text_color?: string;
    [key: string]: any;
  };
}

export default function Teaser({ blok }: TeaserBlokProps) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative overflow-hidden rounded-3xl shadow-2xl backdrop-blur-sm"
      style={{
        backgroundColor: blok.background_color,
        color: blok.text_color,
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 p-16 text-white text-center">
        {blok.headline && (
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
              {blok.headline}
            </span>
          </h1>
        )}

        {blok.subheading && (
          <h2 className="text-2xl md:text-4xl font-light mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed">
            {blok.subheading}
          </h2>
        )}

        {blok.description && (
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            {blok.description}
          </p>
        )}

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
    </div>
  );
}
