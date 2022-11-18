import { Marker } from 'src/types';

export const AppState: Marker[] = [
  {
    time: new Date(null, null, null, 0, 0, 0, 0),
    format: '24H',
    button: { index: 0, title: 'Add new marker', action: 'CREATE' }
  }
];