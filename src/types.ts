/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number; // Percentage
  category: "frontend" | "backend" | "workflow";
  description: string;
}

export interface Experience {
  id: string;
  years: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}
