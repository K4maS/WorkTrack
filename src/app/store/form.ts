import { defineStore } from 'pinia';
import type { FormState } from '../../types';

export const useFormStore = defineStore('form', {
  state: (): FormState => ({
    city: null,
    workshop: null,
    employee: null,
    brigade: null,
    shift: null,
    cities: [
      { id: 1, name: 'Москва' },
      { id: 2, name: 'Санкт-Петербург' },
      { id: 3, name: 'Новосибирск' }
    ],
    workshops: {
      1: [{ id: 1, name: 'Цех А' }, { id: 2, name: 'Цех Б' }],
      2: [{ id: 3, name: 'Цех В' }, { id: 4, name: 'Цех Г' }],
      3: [{ id: 5, name: 'Цех Д' }, { id: 6, name: 'Цех Е' }]
    },
    employees: {
      "1": [
        { "id": 1, "name": "Алексей Иванов" },
        { "id": 2, "name": "Мария Петрова" }
      ],
      "2": [
        { "id": 3, "name": "Дмитрий Сидоров" },
        { "id": 4, "name": "Екатерина Кузнецова" }
      ],
      "3": [
        { "id": 5, "name": "Иван Смирнов" },
        { "id": 6, "name": "Ольга Васильева" }
      ],
      "4": [
        { "id": 7, "name": "Анна Николаева" },
        { "id": 8, "name": "Сергей Павлов" }
      ],
      "5": [
        { "id": 9, "name": "Елена Соколова" },
        { "id": 10, "name": "Андрей Морозов" }
      ],
      "6": [
        { "id": 11, "name": "Виктория Захарова" },
        { "id": 12, "name": "Роман Лебедев" }
      ]
    },
    brigades: [
      { id: 1, name: 'Бригада 1' },
      { id: 2, name: 'Бригада 2' },
      { id: 3, name: 'Бригада 3' }
    ],
    shifts: [
      { id: 1, name: 'Утренняя' },
      { id: 2, name: 'Дневная' },
      { id: 3, name: 'Ночная' }
    ]
  }),
  actions: {
    saveFormData(data: { 
      city: number | null; 
      workshop: number | null;
      employee: number | null;
      brigade: number | null;
      shift: number | null;
     }) {
 
      this.city = data.city;
      this.workshop = data.workshop;
      this.employee = data.employee;
      this.brigade = data.brigade;
      this.shift = data.shift;
    }
  }
});