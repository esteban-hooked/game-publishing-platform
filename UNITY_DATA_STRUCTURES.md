# Unity App Data Structures Analysis

**Date:** July 7, 2026  
**Source:** Hooked On Phonics App (Unity3D)  
**Purpose:** Inform CMS data model design for compatibility

---

## Overview

The Unity app uses **ScriptableObjects** (`.asset` files) for game configuration and **JSON files** for import/export. The CMS needs to generate data compatible with this structure.

---

## Core Data Structures

### 1. Activity Config (Main Game Configuration)

**File:** `Assets/CorePlatform/Runtime/Scripts/Activity/ActivityConfig.cs`

```csharp
public class ActivityConfig : ScriptableObject
{
    // Identifier
    public string Identifier { get; set; }  // Activity name
    
    // Activity Settings
    public ActivityType ActivityType { get; set; }
    public ActivitySubType ActivitySubType { get; set; }
    public SchemaType SchemaType { get; set; }
    
    // Questions/Words
    public PhonicsWordConfig[] Words { get; set; }  // Array of questions/words
    public int WordCount { get; set; }              // How many to serve
    public int Rounds { get; set; }                 // Number of rounds
    
    // Audio Assets
    public AudioClip IntroductionAudio { get; set; }
    public AudioClip CompleteAudio { get; set; }
    public AudioClip RoundCompleteAudio { get; set; }
    
    // Other
    public string CelebrationRef { get; set; }
}
```

**CMS Mapping:**
- `ActivityConfig` = **Question Engine**
- `Identifier` = Question Engine title
- `Words` = Questions array
- `WordCount` = "Questions served per session"
- `Rounds` = Number of rounds in game

---

### 2. Phonics Word Config (Question/Word Data)

**File:** `Assets/CorePlatform/Runtime/Scripts/Words/PhonicsWordConfig.cs`

```csharp
public sealed class PhonicsWordConfig : ScriptableObject
{
    // Identifier
    public string Identifier { get; set; }
    
    // Content
    public PhonicsPair Word { get; }  // The word/text content
    
    // Media Assets
    public Sprite Icon { get; set; }           // Image
    public AudioClip CharacterAudio { get; set; }  // Audio pronunciation
    public AudioClip PaAudio { get; set; }         // Additional audio
    
    // Metadata
    public string Course { get; }
    
    // Schemas (rules for how word is used)
    private PhonicsWordSchema[] schemas;
}
```

**CMS Mapping:**
- `PhonicsWordConfig` = **Question**
- `Word` = Question prompt text
- `Icon` = Question prompt image
- `CharacterAudio` / `PaAudio` = Question prompt audio
- Schemas define question behavior/type

---

### 3. Multiple Choice Question Structure

**File:** `Assets/CorePlatform/Runtime/Scripts/HOM/Editor/MultipleChoiceAutomatedActivityConfig.cs`

```csharp
public class NumericallyRelatedEquationWithAnswers
{
    // Question
    public MultipleChoiceEquation Equation { get; set; }
    
    // Answers
    public NumberStringValuePair[] Answers { get; set; }  // Correct answers
    public NumberStringValuePair[] Distractors { get; set; }  // Wrong answers
    
    // Audio
    public AudioClip QuestionAudio { get; set; }
    public AudioClip AnswerAudio { get; set; }
}

public class MultipleChoiceEquation
{
    public string Text { get; set; }     // Question text
    public Sprite Image { get; set; }    // Question image
    public int Value { get; set; }       // Numerical value
}

public class NumberStringValuePair
{
    public string Text { get; set; }     // Answer text
    public Sprite Sprite { get; set; }   // Answer image
    public int Value { get; set; }       // Numerical value
}
```

**CMS Mapping:**
- `MultipleChoiceEquation` = **Question Prompt**
  - Supports: Text AND/OR Image
- `Answers` = **Correct Answers** (array - supports multiple correct!)
- `Distractors` = **Incorrect Answers**
- Each answer supports: Text AND/OR Image

---

## Engine Types (from HOSEngines.json)

Current game engines in the Unity app:

| Engine Type | Description | CMS Question Type |
|-------------|-------------|-------------------|
| `GroupSorting` | Press requested word | Multiple Choice |
| `DragAndDropLetters` | Unscramble letters | Letter Ordering |
| `MultipleChoice` | Choose correct answer | Multiple Choice |
| `ListenUp` | Audio-based selection | Audio Multiple Choice |

---

## JSON Import Format

**File:** `Assets/EditorData~/HOSEngines.json`

```json
{
  "originalName": "ListenUp",
  "newName": "ListenUp",
  "Engine Type": "GroupSorting",
  "Engine Description": "Press the requested word",
  "Engine Variance": "Skinning, Words, Animation, number of loops",
  "config": "GroupSortingActivityConfig",
  "prefab": "ListenUpActivity",
  
  "introductionAudio": "Intro_game_maze",
  "completionAudio": "Complete_game_listen_up",
  "correctAudio": "Correct_game_rightanswer",
  "incorrectAudio": "Incorrect_listen_up",
  
  "wordSchema": "FullWord",
  "rounds": "2",
  "wordsPerRound": "3",
  "maxLetters": "8"
}
```

---

## Data Import Pattern

The Unity app has an **automated import system**:

1. **JSON files** in `Assets/EditorData~/`
2. **Converter scripts** parse JSON:
   - `ConvertEnginesJson.cs`
   - `ConvertWordsDataJson.cs`
   - `ConvertHOSWordsDataJson.cs`
3. Create **ScriptableObject assets**
4. Used in game at runtime

---

## CMS Output Format Recommendation

### Option 1: JSON Export (Recommended)

CMS exports JSON that matches Unity's import format:

```json
{
  "activityConfig": {
    "identifier": "phonics-short-vowels-001",
    "activityType": "MultipleChoice",
    "activitySubType": "ImageSelection",
    "schemaType": "FullWord",
    "wordCount": 10,
    "rounds": 2,
    "introductionAudio": "intro_phonics_vowels.mp3",
    "completeAudio": "complete_game.mp3",
    "roundCompleteAudio": "round_complete.mp3",
    "words": [
      {
        "identifier": "question_001",
        "word": {
          "text": "What sound does 'A' make in 'cat'?",
          "image": "cat-image.png",
          "audio": "cat-question.mp3"
        },
        "correctAnswers": [
          {
            "text": "/æ/ as in 'cat'",
            "sprite": "cat-icon.png",
            "audio": "cat-answer.mp3"
          }
        ],
        "distractors": [
          {
            "text": "/eɪ/ as in 'ate'",
            "sprite": "ate-icon.png",
            "audio": "ate-answer.mp3"
          },
          {
            "text": "/ɑ/ as in 'father'",
            "sprite": "father-icon.png",
            "audio": "father-answer.mp3"
          }
        ]
      }
    ]
  }
}
```

### Option 2: Direct API Integration

CMS provides REST API that Unity can consume directly:

```
GET /api/question-engines/{id}/unity-config
```

Returns Unity-compatible JSON structure.

---

## Key Findings for CMS Design

### ✅ Compatible Features

1. **Multiple Questions per Engine** ✓  
   Unity's `Words` array = CMS's questions inside Question Engine

2. **Questions Served per Session** ✓  
   Unity's `WordCount` = CMS's "questions served per session" setting

3. **Rounds** ✓  
   Unity already has rounds concept

4. **Media Support** ✓  
   Unity supports:
   - Images (Sprite) on questions and answers
   - Audio (AudioClip) on questions and answers
   - Text on questions and answers

5. **Multiple Correct Answers** ✓  
   `Answers[]` array supports multiple correct answers

### ⚠️ Considerations

1. **Asset References**
   - Unity uses **asset paths** or **asset references**
   - CMS needs to export asset URLs or filenames
   - Unity import process will map to actual Unity assets

2. **Question Types**
   - Unity has specific `ActivityType` enum
   - CMS question types should map to Unity's types
   - Need definitive list of supported types

3. **Schemas**
   - Unity has complex schema system
   - May need simplified mapping from CMS

4. **Audio Clips**
   - Unity expects multiple audio types:
     - Question audio
     - Answer audio  
     - Introduction audio
     - Completion audio
     - Correct/Incorrect feedback audio
   - CMS should support all of these

---

## Recommended CMS Data Model

Based on Unity structures, the CMS should use:

```typescript
// Question Engine (maps to ActivityConfig)
interface QuestionEngine {
  id: string;
  title: string;
  domain: string;
  skill: string;
  map: string;
  
  // Game settings
  activityType: string;        // Unity: ActivityType
  activitySubType: string;     // Unity: ActivitySubType
  questionsServedPerSession: number;  // Unity: WordCount
  rounds: number;              // Unity: Rounds
  
  // Audio assets
  introductionAudioId: string;
  completionAudioId: string;
  roundCompleteAudioId: string;
  correctFeedbackAudioId: string;
  incorrectFeedbackAudioId: string;
  
  // Questions
  questions: Question[];
  
  // Publishing
  status: 'draft' | 'published';
  skinId: string;
}

// Question (maps to PhonicsWordConfig / MultipleChoice)
interface Question {
  id: string;
  type: string;  // MultipleChoice, DragAndDrop, etc.
  
  // Prompt (maps to Equation/Word)
  prompt: {
    text?: string;
    imageId?: string;   // Reference to Asset
    audioId?: string;   // Reference to Asset
  };
  
  // Answers (maps to Answers + Distractors)
  answers: Answer[];
}

// Answer
interface Answer {
  id: string;
  text?: string;
  imageId?: string;    // Reference to Asset
  audioId?: string;    // Reference to Asset
  isCorrect: boolean;  // true = Answer, false = Distractor
  value?: number;      // For numerical questions
}

// Asset (maps to Sprite/AudioClip)
interface Asset {
  id: string;
  filename: string;
  type: 'image' | 'audio';
  url: string;
  tags: string[];
  
  // For Unity import
  unityAssetPath?: string;  // Where Unity should find it
}
```

---

## Export Strategy

### For Unity Integration:

1. **CMS exports JSON** in Unity's import format
2. Unity developer places JSON in `Assets/EditorData~/`
3. Runs existing **converter scripts**
4. Creates ScriptableObject assets
5. Assets ready for game

### Alternative: Asset Bundle

1. CMS exports **complete asset bundle**
2. Includes:
   - JSON configuration
   - All image files
   - All audio files
3. Unity imports entire bundle at once

---

## Action Items

### Questions for Curriculum/Engineering Team:

1. ✓ **Confirmed:** Unity uses JSON import - CMS should export JSON ✓
2. ❓ What is the **complete list of ActivityTypes** for v1?
3. ❓ Should CMS export **Unity asset paths** or just **filenames**?
4. ❓ Do we need to support the **Schema system** or can it be simplified?
5. ❓ What audio formats does Unity accept? (MP3, WAV, etc.)
6. ❓ What image formats? (PNG, JPG, SVG?)
7. ❓ Max file sizes for assets?

### Next Steps:

1. Map CMS Question Types → Unity ActivityTypes
2. Design JSON export format matching Unity's import expectations
3. Create export API endpoint: `/api/question-engines/{id}/export/unity`
4. Test round-trip: CMS → JSON → Unity → Game

---

**Summary:** The Unity app's data structure is highly compatible with the PRD requirements. The CMS can generate JSON that Unity's existing import system will consume, requiring minimal changes to the Unity codebase.
