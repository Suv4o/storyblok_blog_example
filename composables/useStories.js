export function useStories() {
    async function fetchStoriesBySlug(slug) {
        try {
            const story = await useAsyncStoryblok(slug, {
                version: "draft",
            });

            return story;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        fetchStoriesBySlug,
    };
}
