import { notFound } from "next/navigation";
import { StoryblokComponent } from "@storyblok/react";
import { fetchStory } from "../../src/lib/storyblok";
import Layout from "../../src/components/Layout";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ? resolvedParams.slug.join("/") : "intro";

  const story = await fetchStory(slug);

  if (!story) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center bg-white rounded-2xl shadow-xl p-12">
            <h1 className="text-3xl font-bold mb-6 text-slate-800">
              Story not found
            </h1>
            <p className="text-slate-600 mb-4">
              Could not find story with slug:{" "}
              <code className="bg-slate-100 px-2 py-1 rounded">{slug}</code>
            </p>
            <p className="text-sm text-slate-500">
              Available stories: <strong>intro</strong>,{" "}
              <strong>lessons</strong>
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

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ? resolvedParams.slug.join("/") : "lessons";

  const story = await fetchStory(slug);

  if (!story) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: story.content.seo_title || story.name,
    description: story.content.seo_description || story.content.description,
  };
}
