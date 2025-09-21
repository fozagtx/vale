import { storyblokEditable } from "@storyblok/react";

interface FeatureBlokProps {
  blok: {
    _uid: string;
    component: string;
    title?: string;
    description?: string;
    icon?: string;
    name?: string;
    [key: string]: any;
  };
}

export default function Feature({ blok }: FeatureBlokProps) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="group relative overflow-8hidden rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg m-4xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {blok.icon && (
          <div className="text-6xl mb-6 filter drop-shadow-lg">{blok.icon}</div>
        )}

        {blok.name && (
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            {blok.name}
          </h2>
        )}

        {blok.title && (
          <h3 className="text-xl font-semibold mb-4 text-slate-700">
            {blok.title}
          </h3>
        )}

        {blok.description && (
          <p className="text-slate-600 leading-relaxed text-lg">
            {blok.description}
          </p>
        )}

        {/* Decorative bottom border */}
        <div className="mt-8 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-2xl"></div>
    </div>
  );
}
