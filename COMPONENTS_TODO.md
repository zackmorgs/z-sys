# zsys Component TODO

A practical component roadmap for zsys, synthesized from common patterns across the design systems catalog at [awesome-design-systems](https://github.com/alexpate/awesome-design-systems). The catalog is a directory of systems, not a prescribed component list; treat this as a starter checklist and build components as product needs emerge.

## Foundations

- [ ] Define design tokens for color, typography, spacing, sizing, borders, radius, shadows, and motion.
- [ ] Define semantic color roles, including success, warning, danger, info, and interactive states.
- [ ] Establish typography styles, heading levels, body text, labels, and supporting text.
- [ ] Establish layout primitives: stack, inline, grid, divider, and responsive container.
- [ ] Add an icon system with consistent sizing, accessible names, and decorative handling.
- [ ] Document focus, hover, pressed, disabled, loading, and validation state conventions.

## Core Actions

- [ ] Button: primary, secondary, tertiary, destructive, and link variants; sizes; icon placements; loading and disabled states.
- [ ] Icon button: accessible label, tooltip, sizes, and disabled state.
- [ ] Link: inline and standalone variants, external-link behavior, and visited/focus states.
- [ ] Button group: connected actions and mutually exclusive segmented control.

## Forms and Inputs

- [ ] Form field wrapper: label, hint, required indicator, error message, and input association.
- [ ] Text input: text, email, password, search, and numeric types; prefix/suffix support; validation states.
- [ ] Textarea: character count, resize behavior, and validation states.
- [ ] Checkbox and checkbox group.
- [ ] Radio button and radio group.
- [ ] Switch for immediate on/off settings.
- [ ] Select: single-select, disabled options, and clearable behavior where appropriate.
- [ ] Combobox/autocomplete: filtering, empty state, keyboard navigation, and selection.
- [ ] Multi-select: selected-value display, removal, and overflow behavior.
- [ ] Date picker: keyboard-accessible calendar, date constraints, and localized display.
- [ ] File upload: drag-and-drop, browse action, progress, and error handling.
- [ ] Form-level validation summary and submit feedback.

## Feedback and Status

- [ ] Alert/callout: info, success, warning, and error variants; optional actions and dismissal.
- [ ] Toast/notification: concise status messages, timeout policy, and announced updates.
- [ ] Inline validation message and field status indicator.
- [ ] Badge/status label for compact, non-interactive state display.
- [ ] Progress bar and indeterminate loading indicator.
- [ ] Skeleton placeholder for loading content.
- [ ] Empty state with a clear next action when one exists.
- [ ] Error state with recovery or retry action where possible.

## Navigation

- [ ] Tabs for switching between related views, including keyboard interaction.
- [ ] Breadcrumbs for hierarchical locations.
- [ ] Pagination for moving through long result sets.
- [ ] Menu and dropdown menu with keyboard navigation and dismissal behavior.
- [ ] Navigation list/item with active and disabled states.
- [ ] Accordion/disclosure for expandable sections.
- [ ] Skip link for keyboard users.

## Data Display

- [ ] Table: headers, row selection, sorting, responsive overflow, and empty/loading states.
- [ ] Card or panel for grouping related content without obscuring hierarchy.
- [ ] Avatar and avatar group, including fallback initials/image behavior.
- [ ] Tooltip for supplemental, non-essential information.
- [ ] Key-value list for compact detail views.
- [ ] Tag/chip for categorization and removable selections where needed.
- [ ] List item with leading/trailing content and interactive states.

## Overlays and Decisions

- [ ] Dialog/modal: title, description, close behavior, focus management, and responsive sizing.
- [ ] Confirmation dialog for destructive or consequential actions.
- [ ] Popover for anchored interactive content.
- [ ] Drawer/sheet for supporting content or focused workflows on narrow screens.
- [ ] Context menu where a pointer-based shortcut is useful, with an equivalent accessible action path.

## Authentication and Account Flows

- [ ] Password field with show/hide control and accessible labeling.
- [ ] Password strength and requirements feedback.
- [ ] Verification/code input for email or multi-factor authentication.
- [ ] Authentication feedback patterns for invalid credentials, locked accounts, and expired sessions.
- [ ] Account/profile menu with signed-in and signed-out states.

## Component Readiness

For each component, verify before considering it complete:

- [ ] Semantic HTML and keyboard operation work without a mouse.
- [ ] Focus is visible, contrast is sufficient, and accessible names/relationships are present.
- [ ] Disabled, loading, error, empty, and success states are defined where relevant.
- [ ] Layout remains usable at narrow widths and with longer translated content.
- [ ] Examples document intended use, available variants, and known limitations.
- [ ] Tests cover meaningful behavior and accessibility-sensitive interactions.
