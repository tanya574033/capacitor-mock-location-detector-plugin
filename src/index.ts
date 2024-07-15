import { registerPlugin } from '@capacitor/core';

import type { CapacitorMockLocationDetectorPlugin } from './definitions';

const CapacitorMockLocationDetector =
  registerPlugin<CapacitorMockLocationDetectorPlugin>(
    'CapacitorMockLocationDetector',
    {
      web: () =>
        import('./web').then(m => new m.CapacitorMockLocationDetectorWeb()),
    },
  );

export * from './definitions';
export { CapacitorMockLocationDetector };