import { Attrs } from '@/eva/data/Attrs';
export function toCssStyle(style: string, value: string, unit: string) {
  if (Attrs[style].type === 'input') return value + unit;
  else if (Attrs[style].type === 'colorInput') return '#' + value;
  else return value;
}
