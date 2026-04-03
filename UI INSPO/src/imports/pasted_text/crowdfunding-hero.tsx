Create a crowdfunding platform hero section with the following specifications:

=== LAYOUT ===
- Container: Max-width 1200px, centered, padding 120px 24px
- All content: Vertically stacked, center-aligned
- Background: Subtle gradient from #FFFFFF to #F8FAFC
- Min height: 650px
- Vertical center alignment

=== TYPOGRAPHY ===
Primary Font: Inter
Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Font sizes:
- Badge: 12px
- Headline: 56px (desktop), 40px (mobile)
- Subheadline: 20px (desktop), 18px (mobile)
- Button text: 16px
- Trust elements: 14px

Font weights:
- Badge: 600 (semibold)
- Headline: 800 (extrabold)
- Subheadline: 400 (regular)
- Buttons: 600 (semibold)

=== COLORS ===
Primary: #3B82F6 (blue-500)
Primary Dark: #2563EB (blue-600)
Secondary: #8B5CF6 (purple-500)
Text Primary: #111827 (gray-900)
Text Secondary: #6B7280 (gray-600)
Background: #FFFFFF to #F8FAFC gradient
Badge Gradient: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)
Success Green: #10B981
Border: #E5E7EB (gray-200)

=== CONTENT STRUCTURE ===

1. TRUST BADGE (top element):
   - Text: "TRUSTED BY 10M+ CHANGEMAKERS"
   - Background: Linear gradient (blue to purple)
   - Text color: #FFFFFF
   - Font: 12px, 600 weight, uppercase, letter-spacing: 0.05em
   - Padding: 8px 20px
   - Border radius: 24px
   - Display: Inline-block

2. MAIN HEADLINE (32px margin-top):
   - Text: "Turn Hope Into Help in Minutes"
   - Font size: 56px
   - Font weight: 800
   - Color: #111827
   - Line height: 1.1
   - Max width: 800px
   - Text align: Center
   - Optional: Gradient text effect (blue #3B82F6 to purple #8B5CF6)

3. SUBHEADLINE (24px margin-top):
   - Text: "Start your fundraiser for free. Get support from people who care."
   - Font size: 20px
   - Font weight: 400
   - Color: #6B7280
   - Line height: 1.6
   - Max width: 650px
   - Text align: Center

4. CTA BUTTON GROUP (40px margin-top):
   - Display: Flex, gap 16px, center justified
   
   Primary Button:
   - Text: "Start a Fundraiser"
   - Background: #3B82F6
   - Text color: #FFFFFF
   - Padding: 16px 32px
   - Border radius: 8px
   - Font: 16px, 600 weight
   - Height: 52px
   - Hover: Background #2563EB, transform scale(1.02), shadow increase
   - Transition: all 0.2s ease
   
   Secondary Button:
   - Text: "Browse Causes"
   - Background: transparent
   - Border: 2px solid #E5E7EB
   - Text color: #374151
   - Padding: 16px 32px
   - Border radius: 8px
   - Font: 16px, 600 weight
   - Height: 52px
   - Hover: Background #F9FAFB, border color #3B82F6
   - Transition: all 0.2s ease

5. TRUST ELEMENTS ROW (32px margin-top):
   - Display: Flex, gap 24px, center aligned
   - Font: 14px, 500 weight
   - Color: #6B7280
   - Items: "⭐ 4.9/5 rating" • "🔒 Secure payments" • "💵 $5B+ raised"
   - Separator: "•" between items

=== FEATURED CAUSES SECTION (80px margin-top) ===

Section Heading:
- Text: "Featured Causes"
- Font: 32px, 700 weight
- Color: #111827
- Margin bottom: 40px
- Text align: Center

Campaign Cards (3 cards in a row, gap 24px):

Each card:
- Width: Calc((100% - 48px) / 3)
- Background: #FFFFFF
- Border: 1px solid #E5E7EB
- Border radius: 16px
- Padding: 0
- Overflow: hidden
- Box shadow: 0 1px 3px rgba(0,0,0,0.1)
- Hover: Shadow 0 10px 30px rgba(0,0,0,0.15), transform translateY(-4px)
- Transition: all 0.3s ease

Card structure (top to bottom):
1. Image:
   - Aspect ratio: 16:9
   - Width: 100%
   - Object fit: cover
   - Use placeholder: https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600

2. Content area (padding: 24px):
   
   Category badge:
   - Text: "Medical" (or "Education", "Emergency")
   - Background: #EFF6FF
   - Color: #3B82F6
   - Font: 12px, 600 weight
   - Padding: 4px 12px
   - Border radius: 12px
   - Display: Inline-block
   - Margin bottom: 12px
   
   Campaign title:
   - Text: "Help Emma Get Life-Saving Surgery"
   - Font: 18px, 600 weight
   - Color: #111827
   - Line height: 1.4
   - Margin bottom: 12px
   - Max lines: 2, text overflow ellipsis
   
   Fundraiser info:
   - Text: "by Sarah Mitchell"
   - Font: 14px, 400 weight
   - Color: #6B7280
   - Margin bottom: 16px
   
   Progress section:
   - Progress bar:
     * Height: 8px
     * Background: #E5E7EB
     * Border radius: 4px
     * Fill: #10B981 (green), width 65% (example)
     * Margin bottom: 12px
   
   Stats row (flex, space-between):
   - Left: "$12,500 raised" (font: 16px, 700 weight, color: #111827)
   - Right: "of $20,000" (font: 14px, 400 weight, color: #6B7280)
   
   Meta row (margin-top: 12px):
   - Font: 14px, 400 weight, color: #6B7280
   - Text: "234 supporters • 12 days left"

=== RESPONSIVE BREAKPOINTS ===

Mobile (< 768px):
- Hero padding: 80px 20px
- Headline: 40px font size
- Subheadline: 18px font size
- Buttons: Stack vertically, full width, gap 12px
- Featured cards: Single column, full width
- Trust elements: Stack vertically, gap 8px

Tablet (768px - 1024px):
- Featured cards: 2 columns
- Headline: 48px font size

=== ANIMATIONS ===

On page load (stagger):
1. Badge: Fade in + slide down (0.3s, delay 0s)
2. Headline: Fade in + slide up (0.5s, delay 0.2s)
3. Subheadline: Fade in (0.5s, delay 0.4s)
4. Buttons: Fade in + slide up (0.5s, delay 0.6s)
5. Trust row: Fade in (0.4s, delay 0.8s)
6. Featured cards: Fade in + slide up, stagger 0.1s each (start delay 1s)

Easing: cubic-bezier(0.4, 0, 0.2, 1)

Button interactions:
- Hover: Scale 1.02, shadow increase (0.2s ease)
- Active: Scale 0.98 (0.1s ease)
- Primary button hover: Background shift to darker shade
- Secondary button hover: Background #F9FAFB, border shift to primary color

Card interactions:
- Hover: Lift -4px, shadow increase (0.3s ease)
- Image: Subtle zoom 1.05 on card hover (0.4s ease)

=== SAMPLE DATA FOR FEATURED CARDS ===

Card 1:
- Image: Medical/hospital theme
- Category: "Medical"
- Title: "Help Emma Get Life-Saving Surgery"
- Fundraiser: "by Sarah Mitchell"
- Raised: $12,500
- Goal: $20,000
- Progress: 62%
- Supporters: 234
- Days left: 12

Card 2:
- Image: Education/school theme
- Category: "Education"
- Title: "Scholarship Fund for Underprivileged Students"
- Fundraiser: "by Michael Rodriguez"
- Raised: $8,750
- Goal: $15,000
- Progress: 58%
- Supporters: 127
- Days left: 18

Card 3:
- Image: Emergency/disaster relief theme
- Category: "Emergency"
- Title: "Flood Relief for Affected Families"
- Fundraiser: "by Community Relief Org"
- Raised: $45,200
- Goal: $50,000
- Progress: 90%
- Supporters: 892
- Days left: 5

Build this as a responsive React component with smooth animations.