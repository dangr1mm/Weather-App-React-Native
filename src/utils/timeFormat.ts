const timeFormat = (time: number): string => {
  const date = new Date(time * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = '0' + date.getMinutes();

  // Will display time in 10:30 format.
  // Adds a zero in front of the hour in case hour is less than 10.
  const formattedTime =
    hours < 10
      ? '0' + hours + ':' + minutes.substr(-2)
      : hours + ':' + minutes.substr(-2);

  return formattedTime;
};

export default timeFormat;
