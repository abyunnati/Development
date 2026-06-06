
SUPABASE SETUP INSTRUCTIONS

1. Create free account:
https://supabase.com

2. Create new project

3. Create table named:
reviews

4. Add columns:
id -> int8 -> primary key -> auto increment
name -> text
message -> text

5. Open Authentication -> Policies
Enable INSERT and SELECT public access for reviews table.

6. Copy:
Project URL
Anon Public Key

7. Replace values in index.html:
SUPABASE_URL
SUPABASE_ANON_KEY

Now all reviews will be permanently visible to everyone.
