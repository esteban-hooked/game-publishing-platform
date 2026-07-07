# Unity Project File Locations Guide

**Date:** July 7, 2026  
**Purpose:** Show where activity/question data lives in the Unity project

---

## 📂 File Structure Overview

```
Assets/
├── EditorData~/                    # ← JSON SOURCE FILES (hand-edited or imported)
│   ├── HOSEngines.json            # Hooked on Spelling engines
│   ├── LTREngines.json            # Learn to Read engines
│   ├── ABCEngines.json            # ABC engines
│   ├── HOSwordList.json           # Word/question data
│   ├── HOSwordGroups.json         # Word groupings
│   └── HOSContent.json            # Content metadata
│
├── Game/Creative/                  # ← GENERATED .asset FILES (from JSON)
│   ├── HOM/Configs/Activities/    # Hooked on Math activities
│   ├── HOS/Configs/               # Hooked on Spelling activities
│   └── LearnToRead/Configs/       # Learn to Read activities
│
└── CorePlatform/
    ├── Runtime/Scripts/Activity/   # C# code that defines data structures
    └── Editor/Scripts/PopulateData/ # Converter scripts (JSON → .asset)
```

---

## 🔄 Data Flow

```
┌──────────────────┐
│  CMS exports     │
│  JSON files      │
└────────┬─────────┘
         │
         ▼
┌──────────────────────────────────────────────────┐
│  Assets/EditorData~/                             │
│  ├── HOSEngines.json        ← Human readable    │
│  ├── HOSwordList.json       ← Can be edited     │
│  └── HOSContent.json        ← Version control   │
└────────┬─────────────────────────────────────────┘
         │
         │  Unity Editor runs converter scripts
         │
         ▼
┌──────────────────────────────────────────────────┐
│  CorePlatform/Editor/Scripts/PopulateData/       │
│  ├── ConvertEnginesJson.cs  ← Reads JSON        │
│  ├── ConvertWordsDataJson.cs                    │
│  └── Creates ScriptableObjects                  │
└────────┬─────────────────────────────────────────┘
         │
         │  Generates .asset files
         │
         ▼
┌──────────────────────────────────────────────────┐
│  Game/Creative/HOM/Configs/Activities/           │
│  ├── ...Activity_3_MultipleChoiceActivity.asset │
│  ├── ...Activity_4_PlaceValueActivity.asset     │
│  └── Binary Unity format (not human readable)   │
└────────┬─────────────────────────────────────────┘
         │
         │  Loaded at runtime
         │
         ▼
┌──────────────────┐
│   Game runs      │
│   in Unity       │
└──────────────────┘
```

---

## 📝 JSON Source Files (EditorData~/)

### Location
```
Assets/EditorData~/
```

### Purpose
- **Source of truth** for activity data
- Human-readable and editable
- Version controlled in Git
- CMS would export files here

### Example Files

**HOSEngines.json** - Engine/Activity configurations
```bash
Assets/EditorData~/HOSEngines.json
```

**HOSwordList.json** - Individual questions/words
```bash
Assets/EditorData~/HOSwordList.json
```

**HOSContent.json** - Content metadata and organization
```bash
Assets/EditorData~/HOSContent.json
```

### View them:
```bash
cd "Assets/EditorData~"
ls -la *.json
cat HOSEngines.json | head -50
```

---

## 🎮 Activity Assets (.asset files)

### Location
```
Assets/Game/Creative/[Product]/Configs/Activities/
```

Where `[Product]` is:
- `HOM` - Hooked on Math
- `HOS` - Hooked on Spelling  
- `LearnToRead` - Learn to Read
- `Abc` - ABC activities

### Purpose
- **Generated** from JSON by Unity editor
- Binary format (YAML-like but not for hand-editing)
- Used by game at runtime
- NOT version controlled (regenerated from JSON)

### Example Files

**Multiple Choice Activity:**
```
Assets/Game/Creative/HOM/Configs/Activities/
  HOM_Grade_1_Lesson_10_Activity_3_MultipleChoiceSelectTheSameActivity.asset
```

**Place Value Activity:**
```
Assets/Game/Creative/HOM/Configs/Activities/
  HOM_Grade_1_Lesson_10_Activity_4_PlaceValueActivity.asset
```

### File Count
```bash
# HOM has 800+ activity .asset files
cd "Assets/Game/Creative/HOM/Configs/Activities"
ls -1 *.asset | wc -l
# Returns: ~416 files (832 including .meta files)
```

### View them:
```bash
cd "Assets/Game/Creative/HOM/Configs/Activities"
ls -1 | head -20
cat HOM_Grade_1_Lesson_10_Activity_3_MultipleChoiceSelectTheSameActivity.asset | head -50
```

---

## 🔍 What's Inside a .asset File?

**.asset files** are Unity's YAML serialization format:

```yaml
%YAML 1.1
%TAG !u! tag:unity3d.com,2011:
--- !u!114 &11400000
MonoBehaviour:
  m_Name: HOM_Grade_1_Lesson_10_Activity_3_MultipleChoiceSelectTheSameActivity
  
  # Settings
  rounds: 0
  activityType: 23
  activitySubType: 0
  questionsCount: 5
  
  # Audio
  introductionAudio: {fileID: 8300000, guid: a5a803d1a0730964e87186be64851b84}
  completeAudio: {fileID: 0}
  questionSkipAudio: {fileID: 8300000, guid: d8743cd0897614703b311140c182b1b5}
  
  # Questions
  equations:
  - Equation:
      StringValue: 4
      NumberValue: 4
      EquationAudio: {fileID: 8300000, guid: 0b037512d5f64f24f86a84ee01c2bb3f}
    
    # Correct Answers
    Answers:
    - StringValue: same_4_cubes
      NumberValue: 4
    - StringValue: four
      NumberValue: 0
    
    # Wrong Answers
    Distractors:
    - StringValue: same_4_rods
      NumberValue: 4
    - StringValue: five
      NumberValue: 0
```

**Key Points:**
- `equations` = array of questions
- Each question has `Equation` (prompt), `Answers` (correct), `Distractors` (wrong)
- `{fileID: ...}` = References to other Unity assets (images, audio)
- `guid` = Unity's unique identifier for assets

---

## 🛠️ Converter Scripts

### Location
```
Assets/CorePlatform/Editor/Scripts/PopulateData/
```

### Files
- `ConvertEnginesJson.cs` - Converts engine/activity JSON → .asset files
- `ConvertWordsDataJson.cs` - Converts word/question JSON → .asset files
- `ConvertHOSWordsDataJson.cs` - Hooked on Spelling specific
- `AutomatedActivityConfigs.cs` - Automation helpers
- `AutomatedWordConfigs.cs` - Word automation

### How They Work

1. **Unity Menu**: Developer clicks menu item in Unity Editor
2. **Read JSON**: Script reads from `EditorData~/`
3. **Parse Data**: Converts JSON to C# objects
4. **Create Assets**: Generates ScriptableObject .asset files
5. **Save**: Writes to `Game/Creative/[Product]/Configs/`

### Running Them

In Unity Editor:
```
Tools → Hooked On Phonics → Import Data → Import HOS Engines
```

Or via code:
```csharp
// Reads EditorData~/HOSEngines.json
// Creates .asset files in Game/Creative/HOS/Configs/Activities/
ConvertEnginesJson.Convert();
```

---

## 📊 Data Examples

### JSON Format (EditorData~/)

```json
{
  "originalName": "MultipleChoice",
  "newName": "MultipleChoiceSelectTheSame",
  "Engine Type": "MultipleChoice",
  "Engine Description": "Select numbers that are the same",
  "config": "MultipleChoiceActivityConfig",
  "prefab": "MultipleChoiceActivity",
  
  "introductionAudio": "Intro_multiple_choice",
  "completionAudio": "Complete_multiple_choice",
  "correctAudio": "Correct_answer",
  "incorrectAudio": "Incorrect_answer",
  
  "rounds": "2",
  "wordsPerRound": "5",
  
  "questions": [
    {
      "prompt": {
        "text": "4",
        "audio": "audio_four.mp3"
      },
      "correctAnswers": [
        {"text": "same_4_cubes", "value": 4},
        {"text": "four", "value": 0}
      ],
      "incorrectAnswers": [
        {"text": "same_4_rods", "value": 4},
        {"text": "five", "value": 0}
      ]
    }
  ]
}
```

---

## 🎯 CMS Integration Points

### Option 1: Export to EditorData~/ (Recommended)

**CMS exports JSON → Unity imports JSON**

1. CMS exports: `question-engine-123.json`
2. Developer places in: `Assets/EditorData~/`
3. Runs Unity converter: `Tools → Import Data`
4. .asset files generated automatically
5. Game loads new content

**Pros:**
- Uses existing Unity workflow
- JSON is human-readable and reviewable
- Version controlled in Git
- Unity developers already familiar

**Cons:**
- Manual step (running converter)
- Requires Unity Editor

### Option 2: Direct .asset Generation

**CMS generates .asset files directly**

1. CMS exports pre-formatted .asset files
2. Places directly in: `Game/Creative/[Product]/Configs/Activities/`
3. Unity loads immediately (no conversion needed)

**Pros:**
- No manual conversion step
- Faster workflow

**Cons:**
- Bypasses Unity's import pipeline
- Harder to review/debug
- Must generate Unity's YAML format exactly

### Option 3: API Integration

**Unity fetches from CMS API at runtime**

1. Unity game calls CMS API
2. Gets JSON configuration
3. Builds activity in memory
4. No files needed

**Pros:**
- Dynamic content updates
- No Unity rebuild needed

**Cons:**
- Requires internet connection
- Different architecture from current system
- More engineering work

---

## 🔍 How to Explore

### View JSON Source Files
```bash
cd "/Users/esteban/sourcecode/HookedOnPhonics/Hooked On Phonics App/Assets/EditorData~"
ls -la *.json
cat HOSEngines.json | head -100
cat HOSwordList.json | head -100
```

### View Generated Assets
```bash
cd "/Users/esteban/sourcecode/HookedOnPhonics/Hooked On Phonics App/Assets/Game/Creative/HOM/Configs/Activities"
ls -1 *.asset | head -20
cat HOM_Grade_1_Lesson_10_Activity_3_MultipleChoiceSelectTheSameActivity.asset | head -100
```

### Count Activities
```bash
# Count HOM activities
find . -name "*Activity*.asset" -path "*/HOM/*" | wc -l

# Count all activities
find . -name "*Activity*.asset" | wc -l
```

### Search for Specific Activity Types
```bash
# Find all MultipleChoice activities
find . -name "*MultipleChoice*.asset"

# Find all Place Value activities  
find . -name "*PlaceValue*.asset"
```

---

## 📝 Summary

**For CMS Integration:**

1. **JSON is the source** (`Assets/EditorData~/`)
2. **.asset files are generated** (don't edit by hand)
3. **CMS should export JSON** in Unity's expected format
4. **Unity developers run converter** to generate .asset files
5. **Game loads .asset files** at runtime

**CMS Export Target:**
```
Assets/EditorData~/CMS_Exports/
  ├── question-engine-001.json
  ├── question-engine-002.json
  └── ...
```

Then Unity developer runs converter to generate corresponding .asset files.

---

**Next Steps:**
1. Examine actual JSON file structure in `EditorData~/`
2. Map CMS data model to match JSON format
3. Create export template
4. Test with Unity developers
