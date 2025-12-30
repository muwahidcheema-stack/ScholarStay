import pymysql
pymysql.install_as_MySQLdb()
import MySQLdb
if not hasattr(MySQLdb, 'version_info') or MySQLdb.version_info < (2, 2, 7):
    MySQLdb.version_info = (2, 2, 7, 'final', 0)
    MySQLdb.version = "2.2.7"
