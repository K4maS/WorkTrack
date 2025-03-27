<template>
  <div class="container mt-5">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="city" class="form-label">Город:</label>
        <select v-model="form.city" @change="loadWorkshops" class="form-select" id="city" required>
          <option value="" disabled>Выберите город</option>
          <option v-for="city in cities" :key="city.id" :value="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label for="workshop" class="form-label">Цех:</label>
        <select v-model="form.workshop" @change="loadEmployees" class="form-select" id="workshop" required>
          <option value="" disabled>Выберите цех</option>
          <option v-for="workshop in workshops" :key="workshop.id" :value="workshop.id">
            {{ workshop.name }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label for="employee" class="form-label">Сотрудник:</label>
        <select v-model="form.employee" class="form-select" id="employee" required>
          <option value="" disabled>Выберите сотрудника</option>
          <option v-for="employee in employees" :key="employee.id" :value="employee.id">
            {{ employee.name }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label for="brigade" class="form-label">Бригада:</label>
        <select v-model="form.brigade" class="form-select" id="brigade" required>
          <option value="" disabled>Выберите бригаду</option>
          <option v-for="brigade in brigades" :key="brigade.id" :value="brigade.id">
            {{ brigade.name }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label for="shift" class="form-label">Смена:</label>
        <select v-model="form.shift" class="form-select" id="shift" required>
          <option value="" disabled>Выберите смену</option>
          <option v-for="shift in shifts" :key="shift.id" :value="shift.id">
            {{ shift.name }}
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFormStore } from '../../app/store/form';
import { useRouter } from 'vue-router';

const formStore = useFormStore();
const router = useRouter();

const form = ref({
  city: null as number | null,
  workshop: null as number | null,
  employee: null as number | null,
  brigade: null as number | null,
  shift: null as number | null,
});

const cities = computed(() => formStore.cities);
const workshops = computed(() => formStore.workshops[form.value.city ?? 0] || []);
const employees = computed(() => formStore.employees[form.value.workshop ?? 0] || []);
const brigades = computed(() => formStore.brigades);
const shifts = computed(() => formStore.shifts);

const loadWorkshops = () => {
  form.value.workshop = null;
  form.value.employee = null;
};

const loadEmployees = () => {
  form.value.employee = null;
};

const handleSubmit = () => {
  formStore.saveFormData({
    city: form.value.city!,
    workshop: form.value.workshop!,
    employee: form.value.employee!,
    brigade: form.value.brigade!,
    shift: form.value.shift!,
  });
  router.push('/result');
};
</script>

<style scoped>
 
</style>
