var testSql = require('../models/test')
class Test {
  constructor() {
    "use strict";
  }
  testEdit(callback){
    var sql = new testSql()
    sql.update((res)=>{
      callback&&callback(res)
    })
  }
  testAdd(callback){
    var sql = new testSql()
    sql.add((res)=>{
      callback&&callback(res)
    })
  }
  testSelect(callback){
    var sql = new testSql()
    sql.select((res)=>{
      callback&&callback(res)
    })
  }
  testDelete(callback){
    var sql = new testSql()
    sql.delete((res)=>{
      callback&&callback(res)
    })
  }
}
module.exports = Test