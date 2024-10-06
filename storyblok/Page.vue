<script setup>
const props = {
    blok: {
        type: Object,
        default: {},
    },
};
</script>

<template>
    <div>
        <StoryblokComponent v-for="blok in props.blok.body" :key="props.blok._uid" :blok="blok" />
    </div>
</template>
