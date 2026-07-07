# Project Context: Hooked on Phonics Game Publishing Platform

## Overview

This is a game publishing platform and CMS built for **Hooked on Phonics** (www.hookedonphonics.com), designed to manage educational games and interactive content for their mobile app and learning platform.

## About Hooked on Phonics

**Company Profile:**
- 35+ years in educational market
- 5 million+ families and teachers served
- Core products: Reading, Math, Spelling programs
- Ages served: Preschool (3-4) through 2nd Grade

**Educational Approach:**
Based on the "science of reading" with five pillars:
1. Phonemic Awareness
2. Phonics
3. Fluency
4. Vocabulary
5. Comprehension

**Content Delivery:**
- Mobile app with interactive games, videos, and songs
- Monthly physical workbook subscriptions
- Custom storybooks
- Parent resources and support materials

## Project Goals

### Primary Objectives

1. **Scalable Game Management**
   - Support multiple educational games across subjects (reading, math, spelling)
   - Enable rapid game creation through configurable templates
   - Manage game metadata, assets, and configurations

2. **Content Organization**
   - Multi-dimensional taxonomy:
     - Grade level (Preschool, K, 1st, 2nd)
     - Skill area (phonemic awareness, phonics, fluency, vocabulary, comprehension)
     - Content type (game, activity, story)
     - Learning objectives
     - Difficulty/sequence order

3. **Publishing Workflow**
   - Administrative interface for content managers
   - Asset management (images, audio, videos)
   - Version control and publishing states
   - Integration with mobile app delivery

4. **Template-Based Game Framework**
   - Reusable game templates for common educational mechanics
   - Configuration-driven content rather than custom development per game
   - Minimize development overhead for new titles

### Technical Requirements

**Backend Infrastructure:**
- AWS cloud services
- PostgreSQL database
- Microsoft Entra ID for authentication
- RESTful API architecture

**Frontend (This Repository):**
- React SPA with Vite
- Modern component library (shadcn/ui)
- Form management (React Hook Form + Zod)
- Integration with existing backend services

## Content Structure Needs

### Game Metadata
- Title, description, learning objectives
- Target grade level(s)
- Skill focus areas
- Prerequisite games/skills
- Estimated duration
- Difficulty rating

### Asset Management
- Game graphics (characters, backgrounds, UI elements)
- Audio files (instructions, sound effects, music)
- Video tutorials or demonstrations
- Printable worksheets/activities

### Configuration Data
- Game mechanics and rules
- Difficulty levels and progression
- Vocabulary lists (for reading games)
- Math problems (for math games)
- Reward systems and achievements

### Publishing States
- Draft (in development)
- Review (ready for QA)
- Approved (ready to publish)
- Published (live in app)
- Archived (no longer active)

## Integration Points

### Existing Hooked on Phonics Infrastructure
- WordPress main website
- Mobile app (iOS/Android)
- Subscription management system
- User dashboard and progress tracking
- Physical fulfillment system for workbooks

### Backend Services (To Be Built/Integrated)
- Authentication API (Entra ID)
- Content delivery API
- Asset storage and CDN
- Analytics and reporting

## User Roles

**Content Managers:**
- Create and edit games
- Upload and organize assets
- Configure game templates
- Manage publishing workflow

**Reviewers/Approvers:**
- Review game content for quality
- Approve for publication
- Provide feedback on submissions

**Administrators:**
- User management
- System configuration
- Access control

## Design Principles

1. **Editor-Friendly Interface**
   - Intuitive forms and workflows
   - Visual asset management
   - Clear publishing pipeline
   - Helpful validation and feedback

2. **Scalability**
   - Support growing content library
   - Handle multiple simultaneous editors
   - Efficient asset storage and delivery

3. **Flexibility**
   - Accommodate various game types and mechanics
   - Support future product expansion
   - Extensible template system

4. **Maintainability**
   - Align with Engineering's existing AWS/PostgreSQL stack
   - Clear separation of concerns
   - Well-documented codebase

## Success Metrics

- Reduce time to publish new games
- Enable non-technical staff to create content
- Support reusable game framework
- Minimize ongoing maintenance burden
- Integrate seamlessly with existing platform

## Technical Stack Summary

**Frontend:**
- Vite + React (JavaScript)
- Tailwind CSS
- shadcn/ui components
- React Hook Form + Zod
- React Router

**Backend (Existing Infrastructure):**
- AWS services
- PostgreSQL
- Microsoft Entra ID
- RESTful APIs

## Next Steps

1. Design data models for games, templates, and assets
2. Implement authentication with Entra ID
3. Build core CMS pages (Dashboard, Games, Assets, Templates)
4. Create publishing workflow UI
5. Develop API integration layer
6. Design and implement game template system
