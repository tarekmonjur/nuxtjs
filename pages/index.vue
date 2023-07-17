<script setup lang="ts">
// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
</script>

<template>
    <div>
        <h2>Home page</h2>
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
