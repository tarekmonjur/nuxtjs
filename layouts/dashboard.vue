<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'light'
const capitalized = (val: string): string => {
    const first = val.charAt(0).toUpperCase()
    const remaining = val.slice(1)
    return first + remaining
}

const routeName: string = capitalized((useRoute().name || '') as string)
</script>

<template>
    <div class="min-h-full">
        <DashboardNav></DashboardNav>
        <slot name="header" />

        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <slot name="main" />
                <slot />
            </div>
        </main>
    </div>
</template>

<style scoped></style>
