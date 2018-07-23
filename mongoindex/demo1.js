//生成随机数
function  getRandomNum(min, max) {
    //得到随机区间
    let range = max - min;
    // 得到随机值
    let rand = Math.random();
    //最小值+随机数取整
    return min + Math.round(rand * range);
}
// console.log(getRandomNum(10,100));

//生成随机用户名
function getRandomUsers(min, max) {
    //字母库数组，构成用户名
    let tempStringArray = "123456789qwertyuiopasdfghjklzxcvbnm".split("")
    let outputText = "";
    for(let i=0;i<getRandomNum(min, max);i++){
        outputText = outputText + tempStringArray[getRandomNum(0, tempStringArray.length-1)];
    }
    return outputText;
}
// console.log(getRandomUsers(7,16));

var db = connect('company');
// 每次运行删除randInfo
db.randInfo.drop();
var startTime = (new Date()).getTime();
var tempInfo = [];
//一万条数据
for(let i=1;i<10000;i++){
    tempInfo.push({
        username:getRandomUsers(7,16),
        regeditTime:new Date(),
        randNum0:getRandomNum(10000,99999),
        randNum1:getRandomNum(10000,99999),
        randNum2:getRandomNum(10000,99999),
        randNum3:getRandomNum(10000,99999),
        randNum4:getRandomNum(10000,99999),
    })
}
db.randInfo.insert(tempInfo);
var endTime = (new Date()).getTime();
print("[demo]:running" + endTime + 'ms');