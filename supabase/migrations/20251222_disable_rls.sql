/*
  # Disable RLS for Public Access
  
  This migration disables Row Level Security to allow public access without authentication.
  Perfect for single-user private websites where authentication is not needed.
  
  WARNING: This makes the tables publicly accessible to anyone who knows your project URL.
  Only use this if you're okay with the data being technically public.
*/

-- Drop all existing RLS policies
DROP POLICY IF EXISTS "Users can view own journal entries" ON journal_entries;
DROP POLICY IF EXISTS "Users can create own journal entries" ON journal_entries;
DROP POLICY IF EXISTS "Users can update own journal entries" ON journal_entries;
DROP POLICY IF EXISTS "Users can delete own journal entries" ON journal_entries;

DROP POLICY IF EXISTS "Users can view own memory flowers" ON memory_flowers;
DROP POLICY IF EXISTS "Users can plant memory flowers" ON memory_flowers;
DROP POLICY IF EXISTS "Users can update own memory flowers" ON memory_flowers;
DROP POLICY IF EXISTS "Users can remove own memory flowers" ON memory_flowers;

-- Disable RLS on both tables
ALTER TABLE journal_entries DISABLE ROW LEVEL SECURITY;
ALTER TABLE memory_flowers DISABLE ROW LEVEL SECURITY;

-- Make user_id nullable since we don't need authentication anymore
ALTER TABLE journal_entries ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE memory_flowers ALTER COLUMN user_id DROP NOT NULL;

-- Set default value for user_id to a fixed UUID (represents single user)
-- This keeps data consistency even though we don't have auth
UPDATE journal_entries SET user_id = '00000000-0000-0000-0000-000000000000' WHERE user_id IS NULL;
UPDATE memory_flowers SET user_id = '00000000-0000-0000-0000-000000000000' WHERE user_id IS NULL;
