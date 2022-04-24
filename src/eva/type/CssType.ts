type Display = 'none' | 'block' | 'inline' | 'inline-block';
type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
interface LengthUnit {
  length: number;
  unit: '%' | 'px';
} // 长度单位
type TextAlign = 'left' | 'center' | 'right' | 'justify' | 'inherit';
type BackgroundColor = number;
interface BorderWidt {
  length: number;
  unit: 'px';
} // 边框宽度单位
type BorderStyle = 'none' | '';

export { Display };
