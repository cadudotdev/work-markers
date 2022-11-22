import { Marker, TimeFormat } from 'src/types';
import moment from 'moment';

const uniqueId = new Date().getTime();

interface Options {
  id: number;
  time?: Date;
}

export const createMarker = (format: TimeFormat, opt?: Options): Marker => {
  const { id, time } = opt ?? { id: null, time: null };

  return {
    id: id ?? uniqueId,
    time: time ?? moment({ hours: 0, minutes: 0 }).toDate(),
    format: format,
    createdAt: new Date().getTime(),
    deletedAt: null
  };
};