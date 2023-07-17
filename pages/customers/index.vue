<script setup lang="ts">
definePageMeta({
    layout: 'dashboard',
})
const name = useRoute().name
</script>

<template>
    <div>
        <h2>Customers page</h2>
        <p>Meta: {{ name }}</p>
        <button class="btn">Add Customer</button>
    </div>
</template>

<style lang="stylus" scoped></style>
