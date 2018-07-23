// update修改器

var db = connect('company');
// $set修改
db.workmate.update({"name":"MinJie"}, {"$set":{sex:0,age:20}});
db.workmate.update({"name":"MinJie"}, {"$set":{'skill.SkillThree':'word'}});


// $unset将key删除
db.workmate.update({"name":"ShengLei"},{$unset:{"age":''}})
// $inc 对数字进行计算
db.workmate.update({"name":"JSPang"},{$inc:{"age":-2}})

// upsert选项直接添加
db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})
print('demo3:this data updated successsfully');