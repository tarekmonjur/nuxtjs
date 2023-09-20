<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - About` : 'About Page' 
  }
});

useSeoMeta({
  ogTitle: 'Client Site Gallary',
  description: 'This is my site, let me tell you all about it.',
  ogDescription: 'This is my site, let me tell you all about it.',
});
</script>

<template>
    <div>
        <h2>Gallary page</h2>
        <p>
            The app.config.ts file, located in the source directory (by default the root of the project), is used to
            expose public variables that can be determined at build time. Contrary to the runtimeConfig option, these
            can not be overridden using environment variables.
        </p>
    </div>
</template>

<style scoped>
h2 {
    margin-bottom: 20px;
}
</style>
