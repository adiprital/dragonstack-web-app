cd C:\Program Files\PostgreSQL\10\bin

echo "Configuring dragonstackdb"

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

psql -U node_user dragonstackdb < C:\Users\Adi\Desktop\dragonstack\backend\bin\sql\account.sql
psql -U node_user dragonstackdb < C:\Users\Adi\Desktop\dragonstack\backend\bin\sql\generation.sql
psql -U node_user dragonstackdb < C:\Users\Adi\Desktop\dragonstack\backend\bin\sql\dragon.sql
psql -U node_user dragonstackdb < C:\Users\Adi\Desktop\dragonstack\backend\bin\sql\trait.sql
psql -U node_user dragonstackdb < C:\Users\Adi\Desktop\dragonstack\backend\bin\sql\dragonTrait.sql
psql -U node_user dragonstackdb < C:\Users\Adi\Desktop\dragonstack\backend\bin\sql\accountDragon.sql

cd C:\Users\Adi\Desktop\dragonstack\backend\bin
node ./insertTraits.js

echo "dragonstackdb configured"