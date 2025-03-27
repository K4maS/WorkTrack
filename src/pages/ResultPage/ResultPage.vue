<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Результаты</h5>
                <p class="card-text"><strong>Город:</strong> {{ cityName }}</p>
                <p class="card-text"><strong>Цех:</strong> {{ workshopName }}</p>
                <p class="card-text"><strong>Сотрудник:</strong> {{ employeeName }}</p>
                <p class="card-text"><strong>Бригада:</strong> {{ brigadeName }}</p>
                <p class="card-text"><strong>Смена:</strong> {{ shiftName }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '../../app/store/form';

const formStore = useFormStore();

// Вычисляемые свойства для получения имен на основе выбранных идентификаторов
const cityName = computed(() => {
    const city = formStore.cities.find(c => c.id === formStore.city);
    return city ? city.name : '';
});

const workshopName = computed(() => {
    const workshop = formStore.workshops[formStore.city ?? 0]?.find(w => w.id === formStore.workshop);
    return workshop ? workshop.name : '';
});

const employeeName = computed(() => {
    const employee = formStore.employees[formStore.workshop ?? 0]?.find(e => e.id === formStore.employee);
    return employee ? employee.name : '';
});

const brigadeName = computed(() => {
    const brigade = formStore.brigades.find(b => b.id === formStore.brigade);
    return brigade ? brigade.name : '';
});

const shiftName = computed(() => {
    const shift = formStore.shifts.find(s => s.id === formStore.shift);
    return shift ? shift.name : '';
});
</script>

<style scoped>
 
</style>