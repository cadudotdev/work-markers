import React, { FC, useContext } from 'react';
import { GlobalContext } from 'src/Context';
import { getTimeSum, getExtraTimeWork, getTimeDiff } from 'src/utils';
import moment from 'moment';

import { ResultContainer, TitleContainer, TimeContainer, TrContainer } from './styles';

// const timeToWork = new Date(null, null, null, 8, 45, 0);
const timeToWork = moment({ hours: 8, minutes: 45 });
const extraTime = moment({ hours: 2, minutes: 0 });
const workInterval = moment({ hours: 1, minutes: 0 });

const timeFormat = 'HH:mm';

export const Result: FC = () => {
  const ctx = useContext(GlobalContext);

  function getFormattedTimeWorked(): string {
    return moment(getTimeSum(ctx.markers, 'TIME_WORKED'))
      .format(timeFormat);
  }

  function getFormattedWorkInterval(): string {
    return getTimeSum(ctx.markers, 'WORK_INTERVAL')
      .format(timeFormat);
  }

  function getFormattedExtraTimeWork(): string {
    return getExtraTimeWork(
      getTimeSum(ctx.markers, 'TIME_WORKED'),
      timeToWork, ctx.markers.length
    ).format(timeFormat);
  }

  function getFormattedWorkIntervalDiff(): string {
    return getTimeDiff(
      getTimeSum(ctx.markers, 'WORK_INTERVAL'), workInterval, ctx.markers.length
    ).format(timeFormat);
  }

  function getFormattedTimeWorkedDiff(): string {
    return getTimeDiff(
      getTimeSum(ctx.markers, 'TIME_WORKED'),
      timeToWork, ctx.markers.length
    ).format(timeFormat);
  }

  function getFormattedExtraTimeWorkDiff(): string {
    return getTimeDiff(
      getExtraTimeWork(
        getTimeSum(ctx.markers, 'TIME_WORKED'),
        timeToWork, ctx.markers.length
      ), extraTime, ctx.markers.length).format(timeFormat);
  }

  return <ResultContainer>
    <table>
      <tbody>
        <TrContainer>
          <td style={{ fontSize: '12px' }}>
            <TitleContainer>WORKED</TitleContainer>
          </td>
          <td style={{ fontSize: '12px' }}>
            <TitleContainer>GOAL</TitleContainer>
          </td>
          <td style={{ fontSize: '12px' }}>
            <TitleContainer>DIFF</TitleContainer>
          </td>
        </TrContainer>
        <TrContainer>
          <td>
            <TimeContainer>{getFormattedTimeWorked()}</TimeContainer>
          </td>
          <td>
            <TimeContainer>{timeToWork.format(timeFormat)}</TimeContainer>
          </td>
          <td>
            <TimeContainer>{getFormattedTimeWorkedDiff()}</TimeContainer>
          </td>
        </TrContainer>
        <TrContainer>
          <td style={{ fontSize: '12px' }}>
            <TitleContainer>EXTRA</TitleContainer>
          </td>
          <td style={{ fontSize: '12px' }}>
            <TitleContainer>OPTIONAL</TitleContainer>
          </td>
          <td style={{ fontSize: '12px' }}>
            <TitleContainer>DIFF</TitleContainer>
          </td>
        </TrContainer>
        <TrContainer>
          <td>
            <TimeContainer>{getFormattedExtraTimeWork()}</TimeContainer>
          </td>
          <td>
            <TimeContainer>{extraTime.format(timeFormat)}</TimeContainer>
          </td>
          <td>
            <TimeContainer>{getFormattedExtraTimeWorkDiff()}</TimeContainer>
          </td>
        </TrContainer>
        <TrContainer>
          <td style={{ fontSize: '12px' }}>
            <TitleContainer>INTERVAL</TitleContainer>
          </td>
          <td style={{ fontSize: '12px' }}>
            <TitleContainer>GOAL</TitleContainer>
          </td>
          <td style={{ fontSize: '12px' }}>
            <TitleContainer>DIFF</TitleContainer>
          </td>
        </TrContainer>
        <TrContainer>
          <td>
            <TimeContainer>{getFormattedWorkInterval()}</TimeContainer>
          </td>
          <td>
            <TimeContainer>{workInterval.format(timeFormat)}</TimeContainer>
          </td>
          <td>
            <TimeContainer>{getFormattedWorkIntervalDiff()}</TimeContainer>
          </td>
        </TrContainer>
      </tbody>
    </table>
  </ResultContainer >;
};