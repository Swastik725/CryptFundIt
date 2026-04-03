Create a multi-step fundraiser creation form:

=== TYPOGRAPHY & COLORS ===
(Same system - Inter, #3B82F6, #111827, #6B7280)

=== LAYOUT ===
- Max width: 800px, centered
- Background: #FFFFFF
- Padding: 60px 24px

=== PROGRESS INDICATOR (top) ===
- Display: Flex, space-between
- Margin bottom: 60px

Each step:
- Width: 25% (4 steps total)
- Display: Flex, column, center aligned

Step circle:
- Size: 48px
- Border: 3px solid #E5E7EB (inactive)
- Border color: #3B82F6 (active/complete)
- Background: #3B82F6 (complete), #FFFFFF (active), #F9FAFB (future)
- Border radius: 50%
- Font: 18px, 700 weight
- Color: #FFFFFF (complete/active), #9CA3AF (future)
- Number or checkmark icon

Step label:
- Font: 14px, 600 weight
- Color: #111827 (active), #6B7280 (inactive)
- Margin top: 12px

Connecting line:
- Height: 3px
- Background: #E5E7EB (default), #3B82F6 (complete)
- Positioned between circles

=== STEP 1: CHOOSE CATEGORY ===

Heading:
- Text: "What are you fundraising for?"
- Font: 32px, 700 weight
- Color: #111827
- Margin bottom: 16px

Subheading:
- Text: "Choose the category that best describes your cause"
- Font: 18px, 400 weight
- Color: #6B7280
- Margin bottom: 40px

Category grid:
- Display: Grid, 3 columns
- Gap: 16px

Each category card:
- Background: #FFFFFF
- Border: 2px solid #E5E7EB
- Border radius: 12px
- Padding: 24px
- Text align: Center
- Cursor: pointer
- Hover: Border color #3B82F6, background #F9FAFB
- Selected: Border color #3B82F6, background #EFF6FF
- Transition: all 0.2s ease

Card contents:
- Icon: 48px, color #3B82F6 (or category specific)
- Label: 16px, 600 weight, margin-top 12px

Categories:
1. Medical & Health 🏥
2. Education 📚
3. Emergency Relief 🚨
4. Animals & Pets 🐾
5. Community Projects 🏘️
6. Memorial & Funeral 🕊️
7. Sports & Teams ⚽
8. Environment 🌱
9. Other 💡

=== STEP 2: BASIC INFO ===

Heading: "Tell us about your fundraiser"

Form fields:

1. Campaign Title:
   - Label: "Campaign Title" (14px, 600)
   - Input: Height 52px, border 1px solid #E5E7EB
   - Placeholder: "e.g., Help Emma Get Life-Saving Surgery"
   - Focus: Border #3B82F6, shadow
   - Helper: "Keep it clear and compelling" (12px, #6B7280)
   - Max chars: 80, counter shown

2. Fundraising Goal:
   - Label: "Fundraising Goal"
   - Input: Height 52px, currency prefix "₹"
   - Placeholder: "20,000"
   - Helper: "Set a realistic target amount"

3. Location:
   - Label: "Your Location"
   - Input: Height 52px
   - Placeholder: "City, State, Country"
   - Helper: "Where is this fundraiser based?"

Field spacing: 24px between each

=== STEP 3: YOUR STORY ===

Heading: "Share your story"
Subheading: "Help people understand why this matters"

1. Story Editor:
   - Rich text editor
   - Min height: 300px
   - Border: 1px solid #E5E7EB
   - Border radius: 8px
   - Padding: 16px
   - Toolbar: Bold, Italic, List, Link
   - Placeholder: "Tell your story in detail. Why are you fundraising? Who will benefit? How will funds be used?"

2. Photo/Video Upload:
   - Label: "Add photos or video"
   - Upload zone: 
     * Height: 200px
     * Border: 2px dashed #E5E7EB
     * Border radius: 12px
     * Background: #F9FAFB
     * Icon: Upload cloud icon
     * Text: "Drag & drop or click to upload"
     * Supported: JPG, PNG, MP4 (max 50MB)
   - Hover: Border color #3B82F6
   
   Tip box (margin-top 16px):
   - Background: #EFF6FF
   - Padding: 16px
   - Border-left: 4px solid #3B82F6
   - Icon: Info icon
   - Text: "💡 Campaigns with photos or videos raise 4x more"

=== STEP 4: PREVIEW & LAUNCH ===

Heading: "Review your fundraiser"

Preview card:
- Same styling as campaign detail card
- Shows all entered info
- Edit button for each section

Final checklist:
- Background: #F9FAFB
- Padding: 24px
- Border radius: 12px
- Border-left: 4px solid #10B981

Items (each with checkmark):
- "Campaign title is clear and specific"
- "Story explains why you need help"
- "Photo or video added"
- "Goal amount is realistic"

Launch button:
- Full width
- Height: 56px
- Background: Gradient (#3B82F6 to #8B5CF6)
- Color: #FFFFFF
- Font: 18px, 700 weight
- Border radius: 8px
- Text: "Launch My Fundraiser"
- Hover: Shadow increase, slight scale
- Disabled state until all required fields complete

=== NAVIGATION BUTTONS (all steps except last) ===

Bottom button group:
- Display: Flex, space-between
- Margin top: 48px

Back button:
- Background: transparent
- Border: 2px solid #E5E7EB
- Color: #374151
- Padding: 12px 32px
- Border radius: 8px
- Font: 16px, 600

Next button:
- Background: #3B82F6
- Color: #FFFFFF
- Padding: 12px 32px
- Border radius: 8px
- Font: 16px, 600
- Disabled: Background #9CA3AF, not allowed cursor

=== SIDE PANEL (sticky, right side on desktop) ===

Tips card:
- Background: #FFFBEB
- Border: 1px solid #FCD34D
- Border radius: 12px
- Padding: 24px
- Width: 280px
- Position: Sticky, top 24px

Heading: "💡 Tips for Success"
Font: 18px, 700

Tips list:
- Font: 14px, 400
- Color: #92400E
- Line height: 1.6
- Margin: 8px 0

Tips:
1. "Set a realistic, achievable goal"
2. "Share your story authentically"
3. "Add high-quality photos or video"
4. "Update supporters regularly"
5. "Share widely on social media"

Success stat:
- Background: #FFFFFF
- Padding: 16px
- Border radius: 8px
- Margin top: 16px
- Text: "Campaigns that follow these tips raise 3x more on average"
- Font: 14px, 600
- Color: #059669

=== RESPONSIVE ===
Mobile (< 768px):
- Category grid: 2 columns
- Side panel: Moves to top, not sticky
- Progress circles: 32px
- Hide step labels, show step numbers only

=== ANIMATIONS ===
- Step transitions: Slide in from right (0.3s)
- Form validation: Shake on error (0.3s)
- Success state: Confetti animation on launch
- Progress bar: Fill animation on step complete

Build with form validation, error states, and success confirmation modal.