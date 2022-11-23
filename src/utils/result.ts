import moment, { Moment } from 'moment';
import { Marker, TimeSome } from 'src/types';

const emptyDate = new Date(null, null, null, 0, 0);

export function isEven(arr: Marker[]): boolean {
  return arr && arr.length % 2 === 0;
}

export function isNumberEven(value: number): boolean {
  return !isNaN(value) && value % 2 === 0;
}

export function isNumberOdd(value: number): boolean {
  return !isNaN(value) && Math.abs(value % 2) === 1;
}

export function getTimeSome(arr: Marker[],
  returnType: TimeSome): Moment {
  if (!(arr && isEven(arr))) return moment(emptyDate);

  let totalHours = 0;
  let totalMinutes = 0;

  for (let i = 0; i < arr.length; i++) {
    const hours = arr[i].time.getHours();
    const minutes = arr[i].time.getMinutes();

    const returnTimeWorked = returnType === 'TIME_WORKED'
      && isNumberEven(i) && arr[i + 1];
    const returnWorkInterval = returnType === 'WORK_INTERVAL'
      && isNumberOdd(i) && arr[i + 1];

    if (returnTimeWorked || returnWorkInterval) {
      const nextHours = arr[i + 1].time.getHours();
      const nextMinutes = arr[i + 1].time.getMinutes();

      totalHours += (nextHours - hours);
      totalMinutes += (nextMinutes - minutes);
    }
  }

  return moment({
    hours: Math.abs(totalHours),
    minutes: Math.abs(totalMinutes)
  });
}

interface TimeWorkedDiff {
  time: Date;
  isPositive: boolean;
}

export function getTimeWorkedDiff(worked: Date,
  target: Date, markersLength: number): TimeWorkedDiff {

  if (!isNumberEven(markersLength)) return {
    time: moment({ hours: 0, minutes: 0 }).toDate(),
    isPositive: true
  };

  if (!(worked && target)) return {
    time: emptyDate,
    isPositive: true
  };

  const extraHours = 0;
  let minutes = 0;

  const workedHours = worked.getHours();
  const workedMinutes = worked.getMinutes();

  const targetHours = target.getHours();
  const targetMinutes = target.getMinutes();

  if (targetMinutes - workedMinutes < 60) {
    minutes = targetMinutes - workedMinutes;
  }

  return {
    time: new Date(null, null, null,
      (Math.abs(targetHours - workedHours)
        + extraHours), minutes),
    isPositive: false
  };
}

export function getExtraTimeWork(worked: Moment,
  target: Moment, markersLength: number): Moment {

  if (!isNumberEven(markersLength)) return moment({ hours: 0, minutes: 0 });

  if (worked.isAfter(target)) {
    const diff = worked.diff(target);

    const date = moment({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    date.add({ milliseconds: Math.abs(diff) });
    return date;
  }
  return moment({ hours: 0, minutes: 0 });
}

export function getTimeDiff(interval: Moment,
  target: Moment, markersLength: number): Moment {

  if (!isNumberEven(markersLength)) return moment({ hours: 0, minutes: 0 });

  const diff = interval.diff(target);
  const date = moment({ hours: 0, minutes: 0 });
  date.add({ milliseconds: Math.abs(diff) });
  return date;
}
