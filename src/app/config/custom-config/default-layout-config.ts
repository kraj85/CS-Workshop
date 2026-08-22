import { LayoutConfig } from '@spartacus/storefront';

export const defaultLayoutConfig: LayoutConfig = {
  layoutSlots: {
    LandingPage2Template: {
      pageFold: 'Section3', // optional: change pageFold too
      lg: {
        slots: [
          'Section1',
          'Section3', // moved Section3 before Section2A
          'Section2A',
          'Section2B',
          'Section2C',
          'Section4',
          'Section5',
        ],
      },
      slots:[
          'Section1',
          'Section3',
          'Section4',
      ]
    },
  },
};
