<template>
    <div>
        <header class="text-5xl flex gap-4">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </header>
        <main class="my-4">
            <slot />
        </main>
        <footer class="text-5xl">Footer 1</footer>
    </div>
</template>
