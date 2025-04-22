type groupType = {
  Name: string;
  TimeRanges: string[];
};

export default function TimeRange() {
  const group: groupType[] = [
    { Name: 'Early Morning', TimeRanges: [] },
    { Name: 'Morning- afternoon', TimeRanges: [] },
    { Name: 'Evening', TimeRanges: [] },
  ];

  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const date = new Date();
      date.setHours(hour);
      date.setMinutes(min);
      const timeLabel = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      const time24 = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
      if (time24 >= '00:00' && time24 <= '07:30') {
        group[0].TimeRanges.push(timeLabel);
      } else if (time24 >= '07:30' && time24 <= '17:30') {
        group[1].TimeRanges.push(timeLabel);
      } else if (time24 >= '17:30' && time24 <= '23:59') {
        group[2].TimeRanges.push(timeLabel);
      }
    }
  }
  return group;
}
