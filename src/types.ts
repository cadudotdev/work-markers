export interface ContextValue {
  state: Marker[],
  setState: React.Dispatch<React.SetStateAction<Marker[]>>,
}

export interface Button {
  title: string;
  action: Action;
}

export interface Marker {
  index: number;
  time: Date,
  format: TimeFormat,
  button: Button;
}

export type TimeFormat = '24H' | 'AM/PM';
export type Action = 'CREATE' | 'REMOVE';