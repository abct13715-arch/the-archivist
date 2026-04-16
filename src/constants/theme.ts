/**
 * Atelier Editorial Design System
 * Colors and fonts aligned with the brand palette from the style guide.
 */
import {Platform} from 'react-native';

// ── Brand palette ──────────────────────────────────────────────────────────
// Primary   #1A1A1A  (near-black / charcoal)
// Secondary #C8522A  (terracotta / burnt orange)
// Tertiary  #7A7A6E  (warm sage / muted olive)
// Neutral   #F5F2EC  (warm off-white / parchment)

export const Colors = {
  /** Core brand tokens */
  brand: {
    primary: '#1A1A1A', // Headline text, dark surfaces
    secondary: '#C8522A', // CTAs, highlights, accents
    tertiary: '#7A7A6E', // Supporting text, icons
    neutral: '#F5F2EC', // Background, cards
  },

  /** Semantic shades derived from the swatches */
  palette: {
    // Primary tints (dark → light)
    primary900: '#1A1A1A',
    primary700: '#3A3A3A',
    primary500: '#5C5C5C',
    primary300: '#8F8F8F',
    primary100: '#D4D4D4',

    // Secondary tints (terracotta)
    secondary900: '#7A2010',
    secondary700: '#A83A1A',
    secondary500: '#C8522A',
    secondary300: '#DC8060',
    secondary100: '#F2C4B0',

    // Tertiary tints (olive/sage)
    tertiary900: '#3A3A34',
    tertiary700: '#58584E',
    tertiary500: '#7A7A6E',
    tertiary300: '#A8A89E',
    tertiary100: '#D8D8D0',

    // Neutral tints (parchment)
    neutral900: '#1A1814',
    neutral700: '#4A4840',
    neutral500: '#8A8880',
    neutral300: '#C8C6BE',
    neutral100: '#F5F2EC',
  },

  /** Light mode (primary surface = neutral parchment) */
  light: {
    text: '#1A1A1A', // Primary — headlines & body
    textSecondary: '#7A7A6E', // Tertiary — captions, meta
    background: '#F5F2EC', // Neutral — page background
    surface: '#FFFFFF', // Cards / elevated surfaces
    tint: '#C8522A', // Secondary — interactive accent
    border: '#D8D8D0', // Tertiary 100 — dividers
    icon: '#7A7A6E', // Tertiary — default icons
    tabIconDefault: '#7A7A6E',
    tabIconSelected: '#C8522A',
  },

  /** Dark mode (primary surface = near-black) */
  dark: {
    text: '#F5F2EC', // Neutral — inverted text
    textSecondary: '#A8A89E', // Tertiary 300 — muted text
    background: '#1A1A1A', // Primary — page background
    surface: '#2A2A2A', // Slightly lifted surface
    tint: '#DC8060', // Secondary 300 — lighter accent on dark
    border: '#3A3A3A', // Primary 700 — subtle dividers
    icon: '#A8A89E', // Tertiary 300
    tabIconDefault: '#A8A89E',
    tabIconSelected: '#DC8060',
  },
};

// ── Typography ─────────────────────────────────────────────────────────────
// The style guide shows:
//   Headline row — serif typeface  (the large "Aa" with serifs)
//   Body row     — sans-serif       (the large "Aa" without serifs)
//   Label row    — sans-serif, smaller weight

export const Fonts = Platform.select({
  ios: {
    /** Serif — headlines, display text (matches the editorial serif in the guide) */
    serif: 'Georgia',
    /** Sans  — body copy, labels, UI text */
    sans: 'system-ui',
    /** Rounded / soft variant */
    rounded: 'ui-rounded',
    /** Monospaced — code snippets */
    mono: 'ui-monospace',
  },
  android: {
    serif: 'serif',
    sans: 'sans-serif',
    rounded: 'sans-serif-medium',
    mono: 'monospace',
  },
  web: {
    /** Editorial serif — closest freely-available match to the guide's headline face */
    serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
    /** Clean humanist sans for body & UI */
    sans: "'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    rounded: "'DM Sans', 'Helvetica Neue', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
  default: {
    serif: 'serif',
    sans: 'sans-serif',
    rounded: 'sans-serif',
    mono: 'monospace',
  },
});
