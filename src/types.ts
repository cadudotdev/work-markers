export interface ContextValue {
  state: Marker[],
  setState: React.Dispatch<React.SetStateAction<Marker[]>>,
}

export interface Button {
  index: number;
  title: string;
  action: Action;
}

export interface Marker {
  time: Date,
  button: Button;
}

export type Action = 'CREATE' | 'REMOVE';