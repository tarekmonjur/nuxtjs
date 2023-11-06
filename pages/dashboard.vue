<script setup lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';
import { Bar, Line } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

definePageMeta({
    layout: 'dashboard',
});
const routeName = useRoute().name;

const barData = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: ['#f87979', '#f88999'],
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
        },
        {
            label: 'Data Two',
            backgroundColor: ['#f87979', '#f88999'],
            data: [44, 25, 22, 33, 11, 49, 39, 70, 20, 40, 22, 11],
        },
    ],
};

const LineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40],
        },
    ],
};
</script>

<template>
    <section id="main">
        <h2>Meta: {{ routeName }}</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="">
                <h3 class="text-center">Bar Chart</h3>
                <Bar :data="barData" />
            </div>
            <div class="">
                <h3 class="text-center">Bar Chart</h3>
                <Bar :data="barData" :options="{ indexAxis: 'y' }" />
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <div class="">
                <h3 class="text-center">Line Chart</h3>
                <Line :data="LineData" />
            </div>
            <div class="">
                <h3 class="text-center">Line Chart</h3>
                <Line :data="LineData" />
            </div>
        </div>
    </section>
</template>

<style lang="stylus" scoped></style>
