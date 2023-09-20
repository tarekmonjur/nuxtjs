<template>
    <div>
        <header class="shadow-sm bg-white dark:bg-gray-900 dark:text-gray-100">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink class="text-2xl text-black dark:text-white" to="/">Client Record</NuxtLink>
                <NuxtLink class="text-xl" to="/dashboard">My Dashboard</NuxtLink>
                <ul class="flex gap-4 text-lg">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/gallary">Gallary</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/singup">SignUp</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <div class="container p-4 mx-auto">
            <slot />
        </div>

        <footer class="bg-white border-t-2 bottom-0 dark:bg-gray-900 dark:text-gray-100">
            <ul class="container mx-auto flex justify-center gap-5 p-5">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/gallary">Gallary</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/clients">Clients</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/car">Car APP</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script lang="js" setup>
const colorMode = useColorMode()
colorMode.preference = 'dark'
</script>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
    transition: all 0.4s;
}

.rotate-enter-from,
.rotate-leave-to {
    opacity: 0;
    transform: rotate3d(1, 1, 1, 15deg);
}
</style>
