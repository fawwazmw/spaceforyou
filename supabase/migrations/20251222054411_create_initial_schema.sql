/*
  # Initial Schema for Mother's Day Memorial Website

  ## Overview
  This migration creates the database structure for a personal memorial website
  where a user can write private journal entries and create an interactive memory garden.

  ## New Tables

  ### `journal_entries`
  Stores private journal entries where the user can write their feelings, memories, and thoughts.
  - `id` (uuid, primary key) - Unique identifier for each entry
  - `user_id` (uuid, foreign key) - References auth.users, the author of the entry
  - `title` (text) - Optional title for the journal entry
  - `content` (text) - The main content of the journal entry
  - `created_at` (timestamptz) - When the entry was created
  - `updated_at` (timestamptz) - When the entry was last updated

  ### `memory_flowers`
  Stores virtual flowers planted in the memory garden, each representing a memory or feeling.
  - `id` (uuid, primary key) - Unique identifier for each flower
  - `user_id` (uuid, foreign key) - References auth.users, who planted the flower
  - `flower_type` (text) - Type of flower (rose, lily, tulip, etc.)
  - `color` (text) - Color of the flower
  - `message` (text) - Optional message associated with the flower
  - `position_x` (integer) - X coordinate for positioning in the garden
  - `position_y` (integer) - Y coordinate for positioning in the garden
  - `created_at` (timestamptz) - When the flower was planted

  ## Security
  - Enable RLS on all tables
  - Users can only read, create, update, and delete their own entries
  - All tables require authentication

  ## Important Notes
  1. All data is private and only accessible to the authenticated user
  2. No public access is allowed
  3. Data integrity is maintained with foreign key constraints
*/

-- Create journal_entries table
CREATE TABLE IF NOT EXISTS journal_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title text DEFAULT '',
  content text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create memory_flowers table
CREATE TABLE IF NOT EXISTS memory_flowers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  flower_type text NOT NULL,
  color text NOT NULL,
  message text DEFAULT '',
  position_x integer NOT NULL,
  position_y integer NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE memory_flowers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for journal_entries
CREATE POLICY "Users can view own journal entries"
  ON journal_entries
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own journal entries"
  ON journal_entries
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own journal entries"
  ON journal_entries
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own journal entries"
  ON journal_entries
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for memory_flowers
CREATE POLICY "Users can view own memory flowers"
  ON memory_flowers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can plant memory flowers"
  ON memory_flowers
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own memory flowers"
  ON memory_flowers
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove own memory flowers"
  ON memory_flowers
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS journal_entries_user_id_idx ON journal_entries(user_id);
CREATE INDEX IF NOT EXISTS journal_entries_created_at_idx ON journal_entries(created_at DESC);
CREATE INDEX IF NOT EXISTS memory_flowers_user_id_idx ON memory_flowers(user_id);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to update updated_at on journal_entries
CREATE TRIGGER update_journal_entries_updated_at
  BEFORE UPDATE ON journal_entries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
