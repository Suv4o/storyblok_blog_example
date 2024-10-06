<script setup>
const { fetchStoriesBySlug } = useStories();
const route = useRoute();
const story = await fetchStoriesBySlug(`${route.path === "/" ? "home" : route.path.replace("/", "")}`);
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>
