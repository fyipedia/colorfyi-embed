/**
 * colorfyi-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for ColorFYI */
      'colorfyi'?: 'entity' | 'compare' | 'glossary' | 'guide' | 'search' | 'tooltip' | 'converter' | 'contrast' | 'harmony' | 'colorblind' | 'shades' | 'swatch';
      /** Entity slug (e.g. "colors") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      style?: 'modern' | 'minimal';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
    };
  }
}
