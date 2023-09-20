<script setup lang="ts">
definePageMeta({
    layout: 'dashboard',
})
const { id } = useRoute().params;


useSeoMeta({
  ogTitle: 'Single Clients',
  description: 'This is my site, let me tell you all about it.',
  ogDescription: 'This is my site, let me tell you all about it.',
});

</script>

<template>
    <div>
        <h2>Client page</h2>
        <p>Client profile page {{ id }}</p>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <!-- <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> -->
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </div>
</template>

<style lang="stylus" scoped></style>
