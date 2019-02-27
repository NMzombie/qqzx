function priceFormat (value) {
  if (value < 100) {
    return `${value / 100}`
  } else {
    if (value % 100 === 0) {
      return `${value / 100}.00`
    } else {
      return `${value / 100}`
    }
  }
}
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
