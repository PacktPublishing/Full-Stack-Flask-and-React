from sqlalchemy import create_engine
# create the engine with the database URL
engine = create_engine("postgresql://admin:admin123@localhost:5432/bizza")
# create a connection to the database
conn = engine.connect()
# execute a SQL query
result = conn.execute('SELECT * FROM speakers')
# loop through the result set and print the values
for row in result:
    print(row)
# close the result set and connection
result.close()
conn.close()