# Game CMS UI Wireframes

**Version:** 1.0  
**Date:** July 7, 2026  
**Based on:** PRD-Game-CMS.md.pdf

---

## Navigation Structure

```
┌─────────────────────────────────────────────────────────────┐
│  [Hooked on Phonics Logo]                    [User Menu ▼]  │
├─────────────────────────────────────────────────────────────┤
│  Dashboard | Question Engines | Asset Library               │
└─────────────────────────────────────────────────────────────┘
```

---

## 1. Dashboard (Home Screen)

```
┌───────────────────────────────────────────────────────────────────────┐
│  Dashboard                                                             │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Welcome back, [User Name]                                            │
│                                                                        │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐      │
│  │                 │  │                 │  │                 │      │
│  │       42        │  │       156       │  │       12        │      │
│  │  Question       │  │   Total         │  │  Published      │      │
│  │  Engines        │  │   Questions     │  │  Games          │      │
│  │                 │  │                 │  │                 │      │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘      │
│                                                                        │
│  Recent Activity                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ • "Phonics Quiz 1" updated 2 hours ago by Jane               │   │
│  │ • "Math Basics" published 1 day ago by John                  │   │
│  │ • "Vowel Sounds" created 3 days ago by Sarah                 │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                        │
│  Quick Actions                                                         │
│  [+ New Question Engine]  [📁 Asset Library]  [📊 View Reports]      │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 2. Question Engines List

```
┌───────────────────────────────────────────────────────────────────────┐
│  Question Engines                                   [+ New Engine]    │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [Search.....................] [Filter ▼] [Sort by: Recent ▼]        │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐│
│  │ Phonics: Short Vowel Sounds              [Draft]     [⋮]         ││
│  │ Domain: Reading | Skill: Vowel Recognition | Map: Level 1        ││
│  │ 24 questions | Serves 10 per session                             ││
│  │ Last edited: 2 hours ago by Jane                                 ││
│  │ [Edit] [Copy] [Preview] [Publish]                                ││
│  └──────────────────────────────────────────────────────────────────┘│
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐│
│  │ Math: Addition 1-10                    [Published]   [⋮]         ││
│  │ Domain: Math | Skill: Addition | Map: Kindergarten               ││
│  │ 40 questions | Serves 15 per session                             ││
│  │ Published: 3 days ago | 🔗 iframe: https://...                   ││
│  │ [Edit] [Copy] [Unpublish]                                        ││
│  └──────────────────────────────────────────────────────────────────┘│
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐│
│  │ Spelling: Common Words                 [Published]   [⋮]         ││
│  │ Domain: Spelling | Skill: Sight Words | Map: Grade 1             ││
│  │ 50 questions | Serves 20 per session                             ││
│  │ Published: 1 week ago | 🔗 iframe: https://...                   ││
│  │ [Edit] [Copy] [Unpublish]                                        ││
│  └──────────────────────────────────────────────────────────────────┘│
│                                                                        │
│  Showing 1-10 of 42          [← Previous] [1] [2] [3] [4] [Next →]  │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

**[⋮] Menu Options:**
- Edit
- Copy
- Delete
- View Details
- Publish/Unpublish
- View iframe URL

---

## 3. Question Engine Editor (New/Edit)

```
┌───────────────────────────────────────────────────────────────────────┐
│  ← Back to Question Engines                                           │
│                                                                        │
│  New Question Engine                                    [Save Draft]  │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Basic Information                                                     │
│  ┌──────────────────────────────────────────────────────────────────┐│
│  │ Title *                                                           ││
│  │ [.......................................................]         ││
│  │                                                                   ││
│  │ Domain *              Skill *               Map *                ││
│  │ [Reading        ▼]    [Vowel Recognition ▼] [Level 1       ▼]   ││
│  │                                                                   ││
│  │ Questions per Session *                                          ││
│  │ [10....] (Must be ≤ total questions in engine)                  ││
│  │                                                                   ││
│  │ Description (optional)                                           ││
│  │ [..........................................]                     ││
│  │ [..........................................]                     ││
│  └──────────────────────────────────────────────────────────────────┘│
│                                                                        │
│  Questions (0)                                   [+ Add Question]     │
│  ┌──────────────────────────────────────────────────────────────────┐│
│  │                                                                   ││
│  │              No questions yet. Click "Add Question" to start.    ││
│  │                                                                   ││
│  └──────────────────────────────────────────────────────────────────┘│
│                                                                        │
│                              [Cancel] [Save Draft] [Save & Publish]   │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

**With Questions:**

```
┌───────────────────────────────────────────────────────────────────────┐
│  Questions (24)                                  [+ Add Question]     │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐│
│  │ 1. Multiple Choice                                        [⋮]    ││
│  │ Prompt: "What sound does 'A' make in 'cat'?"                     ││
│  │ 🖼️ [Image] 🔊 [Audio]                                            ││
│  │ Answers: 4 (1 correct)                                           ││
│  │ [Edit] [Duplicate] [Delete]                                      ││
│  └──────────────────────────────────────────────────────────────────┘│
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐│
│  │ 2. Image Selection                                        [⋮]    ││
│  │ Prompt: "Which picture shows a 'bat'?"                           ││
│  │ 🔊 [Audio]                                                        ││
│  │ Answers: 3 images (1 correct)                                    ││
│  │ [Edit] [Duplicate] [Delete]                                      ││
│  └──────────────────────────────────────────────────────────────────┘│
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐│
│  │ 3. True/False                                             [⋮]    ││
│  │ Prompt: "The word 'cat' starts with 'C'"                         ││
│  │ Answers: 2 (1 correct)                                           ││
│  │ [Edit] [Duplicate] [Delete]                                      ││
│  └──────────────────────────────────────────────────────────────────┘│
│                                                                        │
│  [Load More...]                                                       │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 4. Question Editor (Add/Edit Question)

```
┌───────────────────────────────────────────────────────────────────────┐
│  ← Back to Question Engine                                            │
│                                                                        │
│  Add Question                                                          │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Question Type *                                                       │
│  [Multiple Choice               ▼]                                    │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ QUESTION PROMPT                                                  │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │                                                                  │ │
│  │ Text (optional)                                                  │ │
│  │ [.............................................................]  │ │
│  │                                                                  │ │
│  │ Media                                                            │ │
│  │ ┌──────────────────┐  ┌──────────────────┐                     │ │
│  │ │ [+ Add Image]    │  │ [+ Add Audio]    │                     │ │
│  │ └──────────────────┘  └──────────────────┘                     │ │
│  │                                                                  │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ ANSWERS                                           [+ Add Answer] │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │                                                                  │ │
│  │ Answer 1                                              [✓ Correct]│ │
│  │ ┌────────────────────────────────────────────────────────────┐ │ │
│  │ │ Text: [/æ/ as in 'cat'...............................]     │ │ │
│  │ │ 🖼️ [cat-image.png] [Change] [Remove]                       │ │ │
│  │ │ 🔊 [cat-sound.mp3] [▶️ Play] [Change] [Remove]              │ │ │
│  │ └────────────────────────────────────────────────────────────┘ │ │
│  │                                                    [⋮] [Delete] │ │
│  │                                                                  │ │
│  │ Answer 2                                              [  Correct]│ │
│  │ ┌────────────────────────────────────────────────────────────┐ │ │
│  │ │ Text: [/eɪ/ as in 'ate'...............................]    │ │ │
│  │ │ [+ Add Image]  [+ Add Audio]                               │ │ │
│  │ └────────────────────────────────────────────────────────────┘ │ │
│  │                                                    [⋮] [Delete] │ │
│  │                                                                  │ │
│  │ Answer 3                                              [  Correct]│ │
│  │ ┌────────────────────────────────────────────────────────────┐ │ │
│  │ │ Text: [/ɑ/ as in 'father'............................]     │ │ │
│  │ │ [+ Add Image]  [+ Add Audio]                               │ │ │
│  │ └────────────────────────────────────────────────────────────┘ │ │
│  │                                                    [⋮] [Delete] │ │
│  │                                                                  │ │
│  │ Answer 4                                              [  Correct]│ │
│  │ ┌────────────────────────────────────────────────────────────┐ │ │
│  │ │ Text: [/aɪ/ as in 'kite'..............................]    │ │ │
│  │ │ [+ Add Image]  [+ Add Audio]                               │ │ │
│  │ └────────────────────────────────────────────────────────────┘ │ │
│  │                                                    [⋮] [Delete] │ │
│  │                                                                  │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│            [Cancel] [Save] [Save & Add Another]                       │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

**Key UX Requirements (from PRD):**
- **≤2 clicks** to add media: Click "Add Image/Audio" → Select from library
- **Preview**: Images show thumbnails, audio has play button
- **Inline upload**: Can upload new files without leaving editor
- **Multiple correct answers**: Checkbox per answer
- **Save & Add Another**: Fast question entry flow

---

## 5. Asset Picker Modal (Triggered by "Add Image/Audio")

```
┌───────────────────────────────────────────────────────────────────────┐
│  Select Image                                            [✕ Close]    │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [Search assets.....................] [Filter: All ▼] [Upload Files] │
│                                                                        │
│  Tags: [All] [Vowels] [Consonants] [Characters] [Objects] [+]        │
│                                                                        │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐            │
│  │ [✓]    │ │        │ │        │ │        │ │        │            │
│  │  🖼️    │ │  🖼️    │ │  🖼️    │ │  🖼️    │ │  🖼️    │            │
│  │        │ │        │ │        │ │        │ │        │            │
│  │cat.png │ │bat.png │ │hat.png │ │rat.png │ │mat.png │            │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘            │
│                                                                        │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐            │
│  │        │ │        │ │        │ │        │ │        │            │
│  │  🖼️    │ │  🖼️    │ │  🖼️    │ │  🖼️    │ │  🖼️    │            │
│  │        │ │        │ │        │ │        │ │        │            │
│  │sat.png │ │pat.png │ │fat.png │ │vat.png │ │tap.png │            │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘            │
│                                                                        │
│  Showing 1-10 of 156 images        [← Prev] [1] [2] [3] [Next →]    │
│                                                                        │
│  Selected: cat.png (124 KB)                 [Cancel] [Insert]         │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

**Audio Picker Variation:**

```
┌───────────────────────────────────────────────────────────────────────┐
│  Select Audio                                            [✕ Close]    │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [Search assets.....................] [Filter: All ▼] [Upload Files] │
│                                                                        │
│  Tags: [All] [Instructions] [Vowel Sounds] [Words] [+]               │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────┐     │
│  │ [✓] 🔊 cat-sound.mp3                     [▶️ Play]    2.3 MB │     │
│  │     Duration: 0:02 | Tags: vowels, short-a                  │     │
│  └─────────────────────────────────────────────────────────────┘     │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────┐     │
│  │ [ ] 🔊 bat-sound.mp3                     [▶️ Play]    2.1 MB │     │
│  │     Duration: 0:02 | Tags: vowels, short-a                  │     │
│  └─────────────────────────────────────────────────────────────┘     │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────┐     │
│  │ [ ] 🔊 instruction-select-image.mp3      [▶️ Play]    3.4 MB │     │
│  │     Duration: 0:03 | Tags: instructions                     │     │
│  └─────────────────────────────────────────────────────────────┘     │
│                                                                        │
│  Showing 1-10 of 87 audio files    [← Prev] [1] [2] [3] [Next →]    │
│                                                                        │
│  Selected: cat-sound.mp3 (2.3 MB)           [Cancel] [Insert]         │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 6. Asset Library (Full View)

```
┌───────────────────────────────────────────────────────────────────────┐
│  Asset Library                                      [+ Upload Files]  │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  [Images] [Audio] [All]                                               │
│                                                                        │
│  [Search assets...] [Filter: All Types ▼] [Sort: Recent ▼] [View: Grid ⊞]│
│                                                                        │
│  Tags: [All] [Vowels] [Consonants] [Characters] [Objects] [+ New Tag]│
│                                                                        │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐            │
│  │  🖼️    │ │  🖼️    │ │  🖼️    │ │  🖼️    │ │  🖼️    │  [⋮]      │
│  │        │ │        │ │        │ │        │ │        │            │
│  │cat.png │ │bat.png │ │hat.png │ │rat.png │ │mat.png │            │
│  │ 124 KB │ │ 118 KB │ │ 132 KB │ │ 115 KB │ │ 128 KB │            │
│  │vowels  │ │vowels  │ │vowels  │ │vowels  │ │vowels  │            │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘            │
│                                                                        │
│  ┌──────────────────────────────────────────────────────┐            │
│  │ 🔊 cat-sound.mp3          [▶️ Play]         2.3 MB  │  [⋮]        │
│  │    Duration: 0:02 | Tags: vowels, short-a          │            │
│  │    Used in: 3 Question Engines                      │            │
│  └──────────────────────────────────────────────────────┘            │
│                                                                        │
│  ┌──────────────────────────────────────────────────────┐            │
│  │ 🔊 bat-sound.mp3          [▶️ Play]         2.1 MB  │  [⋮]        │
│  │    Duration: 0:02 | Tags: vowels, short-a          │            │
│  │    Used in: 2 Question Engines                      │            │
│  └──────────────────────────────────────────────────────┘            │
│                                                                        │
│  Showing 1-20 of 243 assets       [← Previous] [1] [2] [3] [Next →] │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

**[⋮] Asset Menu:**
- View Details
- Edit Tags
- Replace File (updates everywhere)
- Download
- Copy URL
- Delete (with usage warning)

---

## 7. Asset Upload Modal

```
┌───────────────────────────────────────────────────────────────────────┐
│  Upload Files                                            [✕ Close]    │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │                                                                  │ │
│  │                    [📁 Drop files here]                         │ │
│  │                         or                                       │ │
│  │                  [Choose Files]                                  │ │
│  │                                                                  │ │
│  │    Supported formats:                                           │ │
│  │    Images: PNG, JPG, SVG, WebP (max 5MB)                       │ │
│  │    Audio: MP3, WAV (max 10MB)                                  │ │
│  │                                                                  │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  Files to Upload (3)                                                  │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ ✓ cat-image.png          124 KB  [✕]                           │ │
│  │   Tags: [vowels....] [short-a....] [+ Add tag]                 │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ ✓ bat-image.png          118 KB  [✕]                           │ │
│  │   Tags: [vowels....] [short-a....] [+ Add tag]                 │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ ⚠️ dog-sound.mp3          15.2 MB  [✕]  File too large!        │ │
│  │   Tags: [................] [+ Add tag]                          │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  Apply tags to all: [vowels....] [short-a....] [Apply]               │
│                                                                        │
│                                  [Cancel] [Upload 2 Files]            │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

**Bulk Upload Variation:**

```
┌───────────────────────────────────────────────────────────────────────┐
│  Bulk Upload from Audio Bank                         [✕ Close]        │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Select Folder                                                         │
│  [Choose Folder...]    /audio-banks/elevenlabs-export/vowel-sounds/  │
│                                                                        │
│  Files Found: 45 MP3 files (Total: 234 MB)                           │
│                                                                        │
│  Apply Tags to All Files                                              │
│  [vowels....] [elevenlabs....] [short-vowels....] [+ Add tag]        │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ ✓ a-sound-cat.mp3        2.3 MB                                 │ │
│  │ ✓ a-sound-bat.mp3        2.1 MB                                 │ │
│  │ ✓ a-sound-hat.mp3        2.2 MB                                 │ │
│  │ ✓ e-sound-bed.mp3        2.4 MB                                 │ │
│  │ ✓ e-sound-red.mp3        2.3 MB                                 │ │
│  │ ... (40 more files)                                             │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  [Select All] [Deselect All]                                          │
│                                                                        │
│                       [Cancel] [Upload 45 Files]                      │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 8. Publishing Workflow

```
┌───────────────────────────────────────────────────────────────────────┐
│  Publish Question Engine                                 [✕ Close]    │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Question Engine: "Phonics: Short Vowel Sounds"                       │
│  Domain: Reading | Skill: Vowel Recognition | Map: Level 1            │
│  24 questions | Serves 10 per session                                 │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ Step 1: Select Skin                                              │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │                                                                  │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │ │
│  │  │ [✓]          │  │ [ ]          │  │ [ ]          │         │ │
│  │  │  ┌────────┐  │  │  ┌────────┐  │  │  ┌────────┐  │         │ │
│  │  │  │ [Preview│  │  │  │ [Preview│  │  │  │ [Preview│  │         │ │
│  │  │  │ Image]  │  │  │  │ Image]  │  │  │  │ Image]  │  │         │ │
│  │  │  └────────┘  │  │  └────────┘  │  │  └────────┘  │         │ │
│  │  │              │  │              │  │              │         │ │
│  │  │ Forest Theme │  │ Space Theme  │  │ Ocean Theme  │         │ │
│  │  │ (Default)    │  │              │  │              │         │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘         │ │
│  │                                                                  │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ Step 2: Review & Confirm                                         │ │
│  ├─────────────────────────────────────────────────────────────────┤ │
│  │                                                                  │ │
│  │ Selected Skin: Forest Theme                                      │ │
│  │ Embed URL will be:                                               │ │
│  │ https://games.hookedonphonics.com/engine/abc123?skin=forest     │ │
│  │                                                                  │ │
│  │ ⚠️ Publishing will make this game available to end users.       │ │
│  │                                                                  │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│                                  [Cancel] [Publish]                   │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

**After Publishing:**

```
┌───────────────────────────────────────────────────────────────────────┐
│  ✓ Published Successfully                                             │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Your Question Engine is now live!                                    │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ Embed URL                                                        │ │
│  │ ┌───────────────────────────────────────────────────────────┐  │ │
│  │ │ https://games.hookedonphonics.com/engine/abc123?skin=for..│  │ │
│  │ └───────────────────────────────────────────────────────────┘  │ │
│  │                                      [📋 Copy URL]              │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ Embed Code                                                       │ │
│  │ ┌───────────────────────────────────────────────────────────┐  │ │
│  │ │ <iframe src="https://games.hookedonphonics.com/engine/...│  │ │
│  │ │   width="800" height="600"                                │  │ │
│  │ │   frameborder="0">                                        │  │ │
│  │ │ </iframe>                                                 │  │ │
│  │ └───────────────────────────────────────────────────────────┘  │ │
│  │                                      [📋 Copy Code]             │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ Preview                                                          │ │
│  │ [Open in New Window]                                             │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│                             [Done] [Unpublish]                        │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 9. Asset Delete Confirmation (with Usage Warning)

```
┌───────────────────────────────────────────────────────────────────────┐
│  ⚠️ Delete Asset?                                        [✕ Close]    │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  You're about to delete: cat-sound.mp3                                │
│                                                                        │
│  ⚠️ This asset is currently used in:                                  │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ • "Phonics: Short Vowel Sounds" (3 questions)                   │ │
│  │ • "Reading: CVC Words" (5 questions)                            │ │
│  │ • "Vowel Recognition Quiz" (2 questions)                        │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  Deleting this asset will remove it from all questions where it's     │
│  used. This action cannot be undone.                                  │
│                                                                        │
│  Alternative: Consider replacing the asset instead of deleting it.    │
│                                                                        │
│                        [Cancel] [Replace Asset] [Delete Anyway]       │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 10. Question Engine Copy Confirmation

```
┌───────────────────────────────────────────────────────────────────────┐
│  Copy Question Engine                                    [✕ Close]    │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Original: "Phonics: Short Vowel Sounds"                              │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │ New Title *                                                      │ │
│  │ [Copy of Phonics: Short Vowel Sounds....................]       │ │
│  │                                                                  │ │
│  │ Domain              Skill                  Map                  │ │
│  │ [Reading      ▼]    [Vowel Recognition ▼]  [Level 1       ▼]   │ │
│  │                                                                  │ │
│  │ This will copy:                                                 │ │
│  │ ✓ All 24 questions                                              │ │
│  │ ✓ All media attachments (images and audio)                     │ │
│  │ ✓ All settings (questions per session, etc.)                   │ │
│  │                                                                  │ │
│  │ ℹ️ The copy will be created as a Draft.                         │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│                                   [Cancel] [Create Copy]              │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Responsiveness Notes

All screens should be responsive for tablet and mobile devices:

**Mobile Navigation:**
```
┌─────────────────────────┐
│ ☰ [HoP Logo]     [User] │
├─────────────────────────┤
│                         │
│  [Content here]         │
│                         │
└─────────────────────────┘
```

**Mobile Menu (when ☰ clicked):**
```
┌─────────────────────────┐
│ Dashboard               │
│ Question Engines        │
│ Asset Library           │
│ ─────────────────       │
│ Settings                │
│ Sign Out                │
└─────────────────────────┘
```

**Mobile Question List:**
- Stack cards vertically
- Collapse metadata to chips
- Make buttons full-width

**Mobile Question Editor:**
- Stack form fields vertically
- Large touch targets for media buttons
- Simplified asset picker (list view instead of grid)

---

## Color & Style Guide

Use the Hooked on Phonics brand design system:

**Colors:**
- Primary Blue: `#0066CC` - Primary buttons, links
- Brand Orange: `#FF6B35` - Secondary buttons, CTAs
- Brand Yellow: `#FFD700` - Accents, badges
- Success Green: `#4CAF50` - Success messages
- Error Red: `#F44336` - Warnings, errors
- Muted Gray: `#666666` - Secondary text
- Border Gray: `#E0E0E0` - Borders, dividers

**Typography:**
- Headings: Quicksand Bold
- Body: Quicksand Regular
- Buttons: Quicksand Bold

**Spacing:**
- Use 8px grid system (8px, 16px, 24px, 32px, 48px)

**Buttons:**
- Primary: Blue background, white text, 12px border radius
- Secondary: Orange background, white text, 12px border radius
- Outline: White background, blue border, blue text

**Cards:**
- White background
- 12-16px border radius
- Subtle shadow: `0 4px 12px rgba(0,0,0,0.08)`
- 24px padding

---

## Key UX Principles (from PRD)

1. **≤2 clicks to attach media** - Asset picker opens in modal, select, done
2. **Save & Add Another** - Keep content creators in flow
3. **Preview everywhere** - Images and audio playable in editors
4. **Usage tracking** - Always show where assets are used before deleting
5. **Bulk operations** - Support uploading multiple files at once
6. **Clear status** - Draft/Published badges on everything
7. **Copy URLs easily** - One-click copy for iframe embeds

---

**End of Wireframes**
