"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "./bloks/Page";
import Hero from "./bloks/Hero";
import RichText from "./bloks/RichText";
import Grid from "./bloks/Grid";
import Feature from "./bloks/Feature";
import Teaser from "./bloks/Teaser";

const components = {
  page: Page,
  hero: Hero,
  richtext: RichText,
  grid: Grid,
  feature: Feature,
  teaser: Teaser,
};

console.log("Storyblok components registered:", Object.keys(components));

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "eu",
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
