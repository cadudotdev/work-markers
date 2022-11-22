export interface ContextValue {
  markers: Marker[],
  setMarkers: React.Dispatch<React.SetStateAction<Marker[]>>;
  id: number;
  setId: React.Dispatch<number>,
}

export interface Button {
  title: string;
  action: Action;
}

export interface Marker {
  id: number;
  time: Date,
  format: TimeFormat,
  createdAt: number;
  deletedAt: number;
}

export type TimeFormat = '24H' | 'AM/PM';
export type Action = 'CREATE' | 'REMOVE';
export type TimeSome = 'TIME_WORKED' | 'WORK_INTERVAL';