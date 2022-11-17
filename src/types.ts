export interface MarkerState {
  hours: string;
  minutes: string;
  button: Button;
}

export interface ContextValue {
  state: Marker[],
  setState: React.Dispatch<React.SetStateAction<MarkerState[]>>,
}

export interface Button {
  index: number;
  title: string;
  action: Action;
}

export interface Marker {
  hours: string;
  minutes: string;
  button: Button;
}

export type Action = 'CREATE' | 'REMOVE';