```sql
CREATE TABLE IF NOT EXISTS "events" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "category" varchar, "created_at" datetime(6) NOT NULL, "updated_at" datetime(6) NOT NULL);


ALTER TABLE events ALTER COLUMN name VARCHAR(40) NOT NULL;
```
