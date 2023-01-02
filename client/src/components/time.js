/**
 * Date() 객체를 이용해 원하는 날짜 형식으로 변환해주는 함수.
 * @param {string} date - 날짜 형태의 문자열
 * @param {string} value - 'day' : 1일을 기준으로 변환, 'time' : 초, 분, 시를 기준으로 1주일 경과 시 년월일로 표시.
 */
export default function timeParse(date = '', value = '') {
  const today = new Date();
  const currentDate = new Date(date);
  const diffDate = today - currentDate;
  const sec = 1000;
  const min = 60 * sec;
  const hour = 60 * min;
  const day = 24 * hour;
  const month = day * 30;
  const year = 12 * month;
  const diff = (value) => Math.floor(diffDate / value);
  if (value === 'day') {
    if (diff(day) === 0) return 'today';
    else if (0 < diff(day) && diff(day) < 30) return `${diff(day)} days ago`;
    else if (30 <= diff(day) && diff(day) < 365)
      return `${diff(month)} months ago`;
    else if (diff(month) >= 12)
      return diff(month) % 12 === 0
        ? `${diff(year)} years ago`
        : `${diff(year)} years, ${diff(month) % 12} months ago`;
  } else if (value === 'time') {
    if (0 < diff(sec) && diff(sec) < 60) return `${diff(sec)} seconds ago`;
    else if (0 < diff(min) && diff(min) < 60) return `${diff(min)} minutes ago`;
    else if (0 < diff(hour) && diff(hour) < 24)
      return `${diff(hour)} hours ago`;
    else if (0 < diff(day) && diff(day) < 7) return `${diff(day)} days ago`;
    else if (7 <= diff(day)) {
      let parseDate = currentDate
        .toLocaleDateString('en-us', { dateStyle: 'medium' })
        .slice(0, -6);
      let parseTime = currentDate
        .toLocaleTimeString('en-us', { hour12: false })
        .slice(0, -3);
      return `${parseDate} at ${parseTime}`;
    }
  }
  return '';
}
