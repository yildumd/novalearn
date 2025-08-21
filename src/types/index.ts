export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin' | 'instructor';
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: number;
  progress: number;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  completed: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  completed: boolean;
  content: string;
}

export interface Grade {
  courseId: string;
  scores: number[];
  gpa: number;
  cgpa: number;
}