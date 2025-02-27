/*
  # Create attendance records table

  1. New Tables
    - `attendance_records`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `date` (date)
      - `time_in` (time)
      - `time_out` (time, nullable)
      - `status` (text)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `attendance_records` table
    - Add policies for authenticated users to:
      - Read all records
      - Insert their own records
      - Update their own records
*/

CREATE TABLE IF NOT EXISTS attendance_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  name text NOT NULL,
  date date NOT NULL DEFAULT CURRENT_DATE,
  time_in time NOT NULL,
  time_out time,
  status text NOT NULL CHECK (status IN ('present', 'absent', 'late')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE attendance_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all attendance records"
  ON attendance_records
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert their own attendance records"
  ON attendance_records
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own attendance records"
  ON attendance_records
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);