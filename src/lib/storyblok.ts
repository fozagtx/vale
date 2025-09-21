import {
  apiPlugin,
  storyblokInit,
  getStoryblokApi,
} from "@storyblok/react/rsc";

import Page from "../components/bloks/Page";
import Hero from "../components/bloks/Hero";
import RichText from "../components/bloks/RichText";
import Grid from "../components/bloks/Grid";
import Feature from "../components/bloks/Feature";
import Teaser from "../components/bloks/Teaser";

const components = {
  page: Page,
  hero: Hero,
  richtext: RichText,
  grid: Grid,
  feature: Feature,
  teaser: Teaser,
};

console.log("Storyblok components registered in lib:", Object.keys(components));

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "eu",
  },
});

export async function fetchStory(
  slug: string,
  version: "draft" | "published" = "published",
) {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version,
      cv: Date.now(),
    });
    return data.story;
  } catch (error) {
    console.error("Error fetching story:", error);
    return null;
  }
}

export async function fetchStories(
  params: {
    starts_with?: string;
    version?: "draft" | "published";
    per_page?: number;
    page?: number;
    sort_by?: string;
    filter_query?: Record<string, any>;
  } = {},
) {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories", {
      version: "published",
      cv: Date.now(),
      ...params,
    });
    return data.stories;
  } catch (error) {
    console.error("Error fetching stories:", error);
    return [];
  }
}

export async function fetchGlobal(slug: string) {
  return fetchStory(slug);
}

export function getStoryblokApiUrl() {
  return "https://api.storyblok.com/v2/cdn";
}
