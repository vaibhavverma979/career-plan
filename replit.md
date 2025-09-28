# Overview

CareerPath is an AI-powered career guidance platform built as a React-based web application. The platform serves multiple user types including students, teachers, counselors, NGOs, colleges, and administrators, each with dedicated dashboards and functionality. The core purpose is to provide personalized career guidance through AI-powered recommendations, scholarship matching, college search capabilities, and professional counseling services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for consistent, accessible interfaces
- **Styling**: Tailwind CSS with custom design system featuring educational theme colors (primary blues, secondary purples, accent oranges, success greens)
- **Routing**: React Router for client-side navigation with role-based route protection
- **State Management**: TanStack Query for server state management, React hooks for local state

## Component Architecture
- **Design System**: Custom CSS variables and utility classes for consistent theming across user roles
- **UI Components**: Modular component library using Radix UI primitives (dialogs, dropdowns, forms, etc.)
- **Layout Structure**: Responsive design with sticky header, main content area, and footer
- **Role-Based UI**: Different dashboard layouts and navigation based on user roles (student, teacher, counselor, NGO, admin)

## Application Structure
- **Multi-Role System**: Separate dashboards and workflows for 6 user types (Student, Teacher, Counselor, NGO, College, Admin)
- **AI Integration**: Dedicated chat interfaces for career guidance and scholarship recommendations
- **Content Management**: Upload and management systems for study materials, lectures, and resources
- **Communication**: Built-in messaging system between users (students-counselors, etc.)

## Key Features Architecture
- **AI Career Chat**: Interactive chatbot for personalized career recommendations
- **Scholarship AI**: AI-powered scholarship matching and recommendation system
- **College Search**: Comprehensive search and filtering system for educational institutions
- **Stream Information**: Educational pathway guidance and career options
- **Resource Management**: File upload and sharing capabilities for educational content

## Authentication & Authorization
- **Role-Based Access Control**: Different login flows and permissions for each user type
- **Registration System**: Multi-step registration with role-specific fields and verification
- **Admin Controls**: Administrative approval system for new registrations (colleges, counselors, teachers, NGOs)

## Data Flow Patterns
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **File Management**: Upload capabilities for study materials, lectures, and documents
- **Real-time Features**: Chat interfaces with message persistence and notification systems
- **Search & Filter**: Advanced filtering capabilities across colleges, scholarships, and counselors

# External Dependencies

## UI & Styling
- **Radix UI**: Complete set of accessible UI primitives (dialogs, dropdowns, navigation, forms)
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Modern icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant API for component styling

## Development Tools
- **Vite**: Fast development server and build tool with React SWC plugin
- **TypeScript**: Type safety with relaxed configuration for rapid development
- **ESLint**: Code linting with React-specific rules

## Data Management
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performant form handling with minimal re-renders
- **Date-fns**: Date manipulation and formatting utilities

## Potential Backend Integration
- The application is structured to integrate with AI services for career guidance and scholarship matching
- Database integration may be added for user management, content storage, and messaging
- File storage services for educational materials and user uploads
- Authentication services for secure user management across multiple roles

## Development Environment
- **Replit Integration**: Configured for Replit development with proper host allowances
- **Lovable Platform**: Connected to Lovable for AI-assisted development workflow
- **Component Tagging**: Development-mode component identification for easier debugging