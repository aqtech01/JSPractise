import mysql.connector
 
dataBase = mysql.connector.connect(
  host ="localhost",
  user ="root",
  passwd ="Khawaja362001@"
)
 
# preparing a cursor object
cursorObject = dataBase.cursor()
 
# creating database
cursorObject.execute("CREATE DATABASE resume_app")