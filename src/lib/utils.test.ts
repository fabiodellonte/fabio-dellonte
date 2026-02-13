import { describe, expect, it } from 'vitest';
import { cn } from './utils';

describe('cn utility', () => {
  it('merges tailwind classes with last-win behavior', () => {
    expect(cn('p-2', 'p-4', 'text-sm')).toContain('p-4');
    expect(cn('p-2', 'p-4', 'text-sm')).not.toContain('p-2');
  });

  it('supports conditional class values', () => {
    const enabled = true;
    expect(cn('base', enabled && 'active')).toContain('active');
  });
});
