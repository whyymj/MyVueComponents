function formate(num) {
  let tmp = num * 1;
  return tmp > 9 ? tmp : ('0' + tmp)
}
export default function () {
  let date = this;
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours;
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  return year + '/' + formate(month) + '/' + formate(day) + ' ' + formate(hour) + ':' + formate(minute) + ':' + formate(second);
}
