import { Marker, TimeFormat } from 'src/types';

const uniqueId = new Date().getTime();
const emptyDate = new Date(null, null, null, 0, 0, 0, 0);

interface Options {
  id: number;
  time?: Date;
}

export const createMarker = (format: TimeFormat, opt?: Options): Marker => {
  const { id, time } = opt ?? { id: null, time: null };

  return {
    id: id ?? uniqueId,
    time: time ?? emptyDate,
    format: format,
    createdAt: new Date().getTime(),
    deletedAt: null
  };
};