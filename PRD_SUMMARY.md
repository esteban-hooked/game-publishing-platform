# PRD Summary: Game Content Management System

**Author:** Tatum  
**Date:** July 2, 2026  
**Status:** Draft  
**Source:** PRD-Game-CMS.md.pdf

---

## 🎯 Core Vision

Enable non-technical content creators to build, manage, and publish question-based learning games without engineering involvement. Games run on a shared engine with interchangeable skins and are delivered via iframe embed.

---

## 📋 Key Requirements by Priority

### P0 (Must Have - Launch Blockers)

| ID | Requirement | Description |
|----|-------------|-------------|
| R1 | **Single-object content model** | Questions live inside Question Engines (no separate Pools) |
| R2 | **Configurable randomization** | "Questions served per session" setting with automatic randomization |
| R3 | **Frictionless image support** | Attach images to prompts/answers in ≤2 clicks |
| R4 | **Audio upload & playback** | Upload audio files with in-editor preview |
| R5 | **Central asset library** | Upload, bulk upload, search, tags, preview for images & audio |
| R6 | **Question Engine actions** | Create, Edit, Copy, Delete, Link |
| R7 | **Question types** | Multiple question types with multiple correct answers supported |
| R8 | **Taxonomy selection** | Domain, Skill, Map selection on Question Engines |
| R9 | **Publishing workflow** | Skin selection + copy-iframe-URL |

### P1 (Important - Post-Launch)

| ID | Requirement |
|----|-------------|
| R10 | Asset usage tracking + safe delete warnings |
| R11 | Replace asset everywhere it's used |
| R12 | Bulk import from existing image/audio banks |

### P2 (Nice to Have)

| ID | Requirement |
|----|-------------|
| R13 | Skin preview thumbnails at publish |

---

## 🏗️ Data Model

### Question Engine (Main Content Object)

```
Question Engine
├── Metadata
│   ├── Domain (dropdown)
│   ├── Skill (dropdown based on domain)
│   ├── Map (dropdown)
│   └── Questions served per session (integer, must be ≤ total questions)
├── Questions (embedded, not linked)
│   └── Question
│       ├── Type (dropdown)
│       ├── Prompt
│       │   ├── Text (optional)
│       │   ├── Image (optional)
│       │   └── Audio (optional)
│       └── Answers (array)
│           └── Answer
│               ├── Text (optional)
│               ├── Image (optional)
│               ├── Audio (optional)
│               └── Is Correct (boolean)
└── Actions: Create, Edit, Copy, Delete, Link
```

**Key Design Decision:** Merged model (no separate Pools). Question Engine contains questions directly.

---

## 🎨 Asset Library

### Core Features

- **Upload**: Single file or bulk upload
- **File Types**:
  - Images: PNG, JPG, SVG, WebP
  - Audio: MP3 (recommended from ElevenLabs), WAV
- **Organization**: 
  - Search by filename
  - Filter by type (image/audio)
  - Tag assets (skill, character, game, etc.)
- **Preview**:
  - Image thumbnails + full-size view
  - In-browser audio playback
- **Management**:
  - Replace asset everywhere it's used
  - See usage before deleting
  - Warn/block deletion if asset is in use

### Bulk Import

Must support importing existing image and audio banks efficiently at launch.

---

## ✏️ Question Authoring UX

### Creation Workflow

1. **Select Question Type** → Opens question editor
2. **Compose Question**:
   - Add prompt (text/image/audio in any combination)
   - Add answers (each can have text/image/audio)
   - Mark correct answers (multiple allowed)
3. **Attach Media** (≤2 clicks):
   - Click "Add Image/Audio" → Asset picker opens
   - Select from library OR upload new
   - New uploads auto-saved to library
4. **Save & Add Another** → Continue flow without leaving editor

### Media Requirements

- **≤2 clicks** to attach media from question editor
- **In-editor preview**:
  - Images: thumbnail + full-size option
  - Audio: play button with inline player
- **Inline uploads**: Can upload new files without leaving question editor

---

## 🚀 Publishing & Embedding

### Workflow

1. Content creator builds Question Engine with questions
2. Publisher selects skin (if multiple available)
3. System generates iframe embed URL
4. One-click "Copy URL" for pasting into website

### Output

- Games delivered via `<iframe>` embed
- Run on shared game engine
- Interchangeable skins (visual themes)

---

## 👥 User Personas

| Role | Description | Primary Needs |
|------|-------------|---------------|
| **Content Creator** | Builds questions and games daily | Fast question entry, easy media attachment, duplication |
| **Curriculum Lead** | Defines domains, skills, coverage | Confidence games map to correct skill taxonomy |
| **Producer/PM** | Publishes games, hands off URLs | Skin selection, reliable iframe URLs, status visibility |

---

## 📊 Success Metrics

1. **Speed**: 50%+ faster than reference design's two-object workflow
2. **Self-Service**: Zero engineering tickets for attaching images/audio post-launch
3. **Asset Reuse**: Percentage of library usage vs. fresh uploads trending up over 90 days
4. **Satisfaction**: Positive feedback from content creators at 2 and 6 weeks post-launch

---

## 🔍 Design Lessons from Reference System

### What Didn't Work

1. **Two-object model** (Pool + Question Engine) was confusing
   - Created duplicate work
   - Unclear ownership of settings
   - High onboarding friction

2. **Image support** was restrictive and unreliable
   - Difficult to add images
   - Poor UX for media management

3. **Audio added after the fact**
   - Retrofitting audio was a major engineering effort
   - Should have been built-in from day one

### What This Build Fixes

✅ **Single-object model**: Questions inside Question Engines  
✅ **First-class image support**: Frictionless, ≤2 clicks  
✅ **Audio from day one**: Non-negotiable for pre-reader literacy games

**Why Audio is Critical:** Hooked on Phonics teaches pre-readers and early readers who cannot yet read instructions or answer choices. Spoken prompts and answers are essential.

---

## ❓ Open Questions (To Clarify with Team)

1. What is the final list of **question types** for v1?
2. What are the **Domain, Skill, and Map taxonomies**, and who maintains them?
3. What are the **max file sizes** and audio format standards?
4. Do we need **roles and permissions** (creator vs. publisher), or single role for v1?
5. Should deleting a live Question Engine be **blocked or warned**?
6. How much of the reference design's codebase can be **reused vs. rebuilt**?

---

## 🎯 Implementation Phases

### Phase 1: Core Infrastructure (P0)
- Question Engine CRUD
- Question authoring UI
- Asset library (upload, browse, search, tag)
- Basic media attachment workflow

### Phase 2: Publishing (P0)
- Skin selection
- Iframe URL generation
- Copy URL action

### Phase 3: Advanced Features (P1)
- Asset usage tracking
- Replace everywhere
- Bulk import tools

### Phase 4: Polish (P2)
- Skin preview thumbnails
- Additional UX refinements

---

## 🛠️ Technical Considerations

### Media Handling
- Enforce file size limits
- Recommend compressed formats (MP3, WebP)
- Lazy-load previews to avoid editor slowdown

### Asset Organization
- Require at least one tag on upload
- Establish naming conventions before bulk import
- Prevent library chaos at scale

### Content Model
- Treat as fresh build (not constrained by reference design)
- Question Engine contains questions (no linking to separate Pools)
- Automatic randomization built-in

---

## 📝 Non-Goals (Out of Scope)

- ❌ Audio generation in CMS (audio produced externally via ElevenLabs)
- ❌ Game engine changes or gameplay mechanics
- ❌ End-user (player) accounts and analytics
- ❌ Data migration (greenfield deployment)

---

## 🔗 Related Documents

- **CONTEXT.md** - Full project context and business requirements
- **DESIGN_SYSTEM.md** - Hooked on Phonics brand design system
- **PROJECT_SETUP.md** - Technical setup and dependencies

---

**Last Updated:** July 7, 2026  
**Next Steps:** Clarify open questions, design data schema, begin implementation
