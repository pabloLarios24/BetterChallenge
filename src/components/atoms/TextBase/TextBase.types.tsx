export type TextBaseType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface ITextBaseProps {
  textType: TextBaseType;
  text: string;
  bold?: boolean;
  italic?: boolean;
  isButton?: boolean;
}
