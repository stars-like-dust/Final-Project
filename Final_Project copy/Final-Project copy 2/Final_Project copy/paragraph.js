
var data = { "Mad Lib 1" : ['oifjeojfeoijfoeijfoeijmvfj'], "Mad Lib 2" : [4,5,6], "Mad Lib 3" : [7,8,9] }
var body = d3.select('body')


body.append('select')
  .on('change',getData)
  .selectAll('option')
    .data(d3.keys(data))
    .enter()
  .append('option')
    .attr('value',function (d) { return d; })
    .text(function (d) { return d; })

body.selectAll('h6')
    .data(data["Mad Lib 1"])
    .enter()
  .append('h6')
    .text(function (d) { return d; })
    
function getData() {
  var selectValue = d3.select('select').property('value')
  var data2 = d3.values(data[selectValue])
  body.selectAll('h6')
      .data(data2)
      .text(function (d) { return d; })
}