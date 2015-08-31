export default (date) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return date.getHours() + ':' + date.getMinutes()
}
