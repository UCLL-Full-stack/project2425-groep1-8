export type Course = {
  id: number;
  name: string;
  description: string;
  phase: number;
  credits: number;
};

export type Lecturer = {
  id: number;
  user: User;
  expertise: string;
  courses: Course[];
};

export type User = {
  firstName?: string;
  lastName?: string;
  fullname?: string;
  email?: string;
  username?: string;
  password?: string;
  role?: string;
};

export interface Kamer {
  kamerID: number;
  beschikbaar: boolean;
  kostPerMaand: number;
}

export interface Gebouw {
  gebouwID: number;
  eigenaar: string;
  locatie: string;
  kamers: Kamer[];
}