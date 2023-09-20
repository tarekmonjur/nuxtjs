<script setup lang="ts">
definePageMeta({
    layout: false,
});
const routeName = useRoute().name;

useSeoMeta({
  ogTitle: 'My Clients',
  description: 'This is my site, let me tell you all about it.',
  ogDescription: 'This is my site, let me tell you all about it.',
});

// const { data, pending, error }  = useFetch('/api/clients', {lazy: true, server: false});

const { data, pending, error }  = useAsyncData('myClients', () => {
    return $fetch('/api/clients').catch(err => {
        console.log('error', err);
        throw createError({ statusCode: 500, statusMessage: 'Oop! Internal Server Error!!!' })
    });
}, {lazy: true, server: false});

// if (!pending && error) {
//     console.log('error', error);
//     throw createError({ statusCode: 500, statusMessage: 'Oop! Internal Server Error!!!' })
// }

// const clients = useState(() => data);
</script>


<template>
    <div>
        <NuxtLayout name="dashboard">
            <template #header>
                <header class="bg-white shadow">
                    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 relative">
                        <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ routeName }}</h1>
                        <button class="btn absolute bottom-5 right-0">Add New Client</button>
                    </div>
                </header>
            </template>

            <template #main>
            
                <div v-if="error">Error : {{ error }}</div>        
            <div v-if="pending">Loading....</div>    
            <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Client ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Client Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Client Address
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="client in data" :key="client.id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <NuxtLink :to="`clients/${client.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{{ client.id }}</NuxtLink>
                            </th>
                            <td class="px-6 py-4">
                                {{ client.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ client.address }}
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            

            </template>
        
        </NuxtLayout>
    </div>
</template>

<style lang="stylus" scoped></style>
