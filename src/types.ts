
// Тип для города
export interface City {
  id: number;
  name: string;
}

// Тип для цеха
export interface Workshop {
  id: number;
  name: string;
}

// Тип для сотрудника
export interface Employee {
  id: number;
  name: string;
}

// Тип для бригады
export interface Brigade {
  id: number;
  name: string;
}

// Тип для смены
export interface Shift {
  id: number;
  name: string;
}

// Тип для состояния стора
export interface FormState {
  city: number | null;
  workshop: number | null;
  employee: number | null;
  brigade: number | null;
  shift: number | null;
  cities: City[];
  workshops: Record<number, Workshop[]>;
  employees: Record<number, Employee[]>;
  brigades: Brigade[];
  shifts: Shift[];
}
