<script setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => ({}),
    },
});
</script>

<template>
    <div>
        <StoryblokComponent v-for="blok in props.blok.body" :key="props.blok._uid" :blok="blok" />
    </div>
</template>
