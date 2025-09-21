import { StoryblokComponent } from "@storyblok/react";
import { fetchStory } from "../src/lib/storyblok";
import Layout from "../src/components/Layout";

export default async function Home() {
  const story = await fetchStory("intro");

  if (!story) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center bg-white rounded-2xl shadow-xl p-12">
            <h1 className="text-3xl font-bold mb-6 text-slate-800">
              Welcome to The Vale
            </h1>
            <p className="text-slate-600 mb-4">
              No story found. Check your token and story configuration.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={story.name}>
      <div className="space-y-8">
        <StoryblokComponent blok={story.content} />
      </div>
    </Layout>
  );
}
