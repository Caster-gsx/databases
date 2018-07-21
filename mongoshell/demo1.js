// mongodb插入数据
var startTime = (new Date()).getTime();
var db = connect('log');

// 循环插入  1059ms
// for(var i =0;i<1000;i++){
//     db.test.insert({num:i})
// }

// 批量插入  81ms
var tempArrey = [];
for(var i=0;i<1000;i++){
    tempArrey.push({num:i});
}
db.test.insert(tempArrey);

var runTime = (new Date()).getTime() - startTime;
print('[demo1]this is run' + runTime + 'ms');