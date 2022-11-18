import { Marker } from 'src/types';

export const initialMarker: Marker =
{
  index: 0,
  time: new Date(null, null, null, 0, 0, 0, 0),
  format: '24H',
  button: { title: 'Add new marker', action: 'CREATE' }
};