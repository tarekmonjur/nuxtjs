<script setup lang="ts">
definePageMeta({
    layout: 'dashboard',
})
const { id } = useRoute().params
</script>

<template>
    <div>
        <h2>Customers page</h2>
        <p>Customer profile page {{ id }}</p>
    </div>
</template>

<style lang="stylus" scoped></style>
