
const getOptions = require('loader-utils').getOptions
const iconv = require('iconv-lite')
module.exports = function loader(source) {
  const options = getOptions(this);
  let decodeSourse = iconv.decode(source, 'gbk')
  let rows = decodeSourse.split(/\r\n/)
  let resultTable = []
  for (let i = 0; i < rows.length; i++) {
    let columns = rows[i].split(/,/)
    let rowArray = []
    columns.forEach((item) => {
      rowArray.push(item)
    })
    resultTable.push(rowArray)
  }
  return `export default ${ JSON.stringify(resultTable) }`
}
module.exports.raw = true