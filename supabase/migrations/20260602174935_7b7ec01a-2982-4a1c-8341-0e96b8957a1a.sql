ALTER TABLE public.experiences
  ADD COLUMN IF NOT EXISTS objective_body TEXT,
  ADD COLUMN IF NOT EXISTS approach_body TEXT,
  ADD COLUMN IF NOT EXISTS impact_body TEXT;