var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node'
});
class testSql {
  constructor() {
    this.result = ''
  }
  // 增加
  add(callback) {
    var that = this
    var addSql = 'INSERT INTO test(first,second,id) VALUES(?,?,0)';
    var addSqlParams = ['菜鸟工具', 'https://c.runoob.comasds'];
    connection.query(addSql, addSqlParams, function (err, result) {
      if (err) {
        callback && callback(err.message)
      } else {
        callback && callback(result)
      }
    });
  }
  // 删除
  delete(callback) {
    var that = this
    var delSql = 'DELETE FROM test';
    connection.query(delSql, function (err, result) {
      if (err) {
        callback && callback(err)
      } else {
        callback && callback(result)
      }
    })

  }
  // 查找
  select(callback) {
    var that = this
    var sql = 'SELECT * FROM test';
    connection.query(sql, function (err, result) {
      if (err) {
        callback && callback(err)
      } else {
        callback && callback(result)
      }
    })
  }
  // 改
  update(callback) {
    var that = this
    // connection.connect();
    var modSql = 'UPDATE test SET first = ?,second = ? WHERE id = ?';
    var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 2];
    connection.query(modSql, modSqlParams, function (err, result) {
      if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        callback && callback(err.message)
      } else {
        callback && callback(result)
      }
    });
  }
}
module.exports = testSql