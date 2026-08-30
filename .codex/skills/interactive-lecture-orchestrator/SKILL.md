---
name: interactive-lecture-orchestrator
description: Build or revise the 60-slide Academy of Justice web lecture “من مخاطبة الآلة إلى تفويضها” while preserving its cinematic Dark Executive Tech identity, exact slide IDs, Arabic-first terminology, and presenter-controlled interaction.
---

# Interactive Lecture Orchestrator

Use this skill only for the project **من مخاطبة الآلة إلى تفويضها: من هندسة الأوامر إلى هندسة الوكلاء**.

## Non-negotiable structure

- The canonical sequence is `S01`–`S60`, without gaps or renumbering.
- `S01`–`S04`: opening; `S05`–`S14`: المحور الأول; `S15`–`S24`: المحور الثاني; `S25`–`S34`: المحور الثالث; `S35`–`S44`: المحور الرابع; `S45`–`S54`: المحور الخامس; `S55`–`S60`: closing.
- Refer to instructional sections as **المحور**; do not label them as chapters or `Module`.
- Every change must preserve the ability to identify and edit a scene through its stable `Sxx` identifier.

## Presentation behavior

- This is a presenter-led fullscreen web deck, not a scrolling landing page or autonomous animation.
- A slide remains in view until the presenter navigates. Progressive reveal, term transformations, and ambient movement may continue while it is displayed.
- Keep navigation separate from diagrams and interactive boards. A click, drag, or reset within a board must not advance the slide.
- Use drag/reorder only when it teaches the concept: representations, prompt construction, context selection, workflow design, classification, permissions, or agent design.

## Writing and terminology

- Arabic is the settled language on screen. English terms can appear first as technical labels, then transform visibly into Arabic in the same location.
- Keep the wording concise, professional, natural, and speakable. Do not write explanatory prose intended for narration on the slide.
- Preserve English where it is materially useful, then give a precise Arabic counterpart. Use the terminology map in [references/terminology.md](references/terminology.md).

## Visual direction

- Use Dark Executive Tech: deep navy field, restrained electric blue for data/knowledge, orange for action/decision, and limited violet for abstract representations.
- Ambient visual layers must be subtle and functional: network lines, moving signals, grids, tokens, documents, or architectural links. No generic robot imagery or decorative motion without explanatory value.
- Prefer one visual idea and one claim per screen. Maintain generous space and large Arabic type.

## Implementation workflow

1. Read `project-docs/slide-registry.md` before altering a slide’s content or interaction.
2. Apply a change to the associated `Sxx` scene without changing its identifier or its position in the sequence.
3. When altering a shared mechanism, verify the complete `S01`–`S60` sequence and JavaScript syntax.
4. Keep full-screen, mouse, keyboard, and touch behavior usable.

## Review criteria

- Is the idea visible without reading a paragraph?
- Does the movement explain the idea?
- Does interaction remain under presenter control?
- Does the final on-screen wording settle in Arabic?
- Can the user request a change by saying `S17` or `S52`?
