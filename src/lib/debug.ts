import { getStoryblokApi } from '@storyblok/react/rsc'

export async function listAllStories() {
  try {
    const storyblokApi = getStoryblokApi()
    const { data } = await storyblokApi.get('cdn/stories', {
      version: 'draft',
      cv: Date.now(),
    })
    console.log('Available stories:', data.stories.map((s: any) => ({
      name: s.name,
      slug: s.slug,
      full_slug: s.full_slug,
      published: s.published_at ? 'published' : 'draft'
    })))
    return data.stories
  } catch (error) {
    console.error('Error listing stories:', error)
    return []
  }
}
