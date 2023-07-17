<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'system'
</script>

<template>
    <div>
        <header class="shadow-sm bg-white dark:bg-gray-900 dark:text-gray-100">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink class="font-bold" to="/">Client Record</NuxtLink>
                <h4>Welcome to Dashboard</h4>

                <div class="flex gap-4">
                    <NuxtLink to="/customers">Customers</NuxtLink>
                    <NuxtLink to="/customers">Logout</NuxtLink>
                </div>
            </nav>
        </header>

        <div class="container mx-auto p-5">
            <slot />
        </div>

        <footer class="bg-white border-t-2 bottom-0 dark:bg-gray-900 dark:text-gray-100">
            <ul class="container mx-auto flex justify-center gap-5 p-5">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/customers">Customers</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<style scoped></style>
