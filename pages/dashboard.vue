<script setup lang="ts">
definePageMeta({
    layout: 'dashboard',
})
const routeName = useRoute().name
</script>

<template>
    <section id="main">
        <h2>Dashboard</h2>
        <p>Meta: {{ routeName }}</p>
    </section>
</template>



<style lang="stylus" scoped></style>
