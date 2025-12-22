# Setup Supabase untuk SpaceForYou

## 1. Setup Environment Variables

1. Edit file `.env` di root folder
2. Isi dengan credentials dari Supabase:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

**Cara dapat credentials:**
- Buka Supabase Dashboard → Settings → API
- Copy **Project URL** ke `VITE_SUPABASE_URL`
- Copy **anon public** key ke `VITE_SUPABASE_ANON_KEY`

## 2. Jalankan Migration

Jalankan **KEDUA** migration files secara berurutan:

### Cara Manual via Dashboard (Termudah)

**Step 1: Create Tables**
1. Buka Supabase Dashboard → **SQL Editor**
2. Klik **New Query**
3. Copy semua isi file `supabase/migrations/20251222054411_create_initial_schema.sql`
4. Paste ke SQL Editor
5. Klik **Run**

**Step 2: Disable RLS (untuk public access)**
1. Di SQL Editor, klik **New Query** lagi
2. Copy semua isi file `supabase/migrations/20251222_disable_rls.sql`
3. Paste ke SQL Editor
4. Klik **Run**

### Cara Via Supabase CLI
```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link ke project (ganti your-project-ref dengan ref project kamu)
supabase link --project-ref your-project-ref

# Push semua migrations
supabase db push
```

## 3. Verifikasi Setup

1. Cek di Supabase Dashboard → **Table Editor**
2. Pastikan ada 2 tabel:
   - `journal_entries`
   - `memory_flowers`
3. Pastikan **RLS disabled** (ada icon warning/shield di table)

## 4. Jalankan Aplikasi

```bash
npm run dev
```

## Important Notes

⚠️ **Website ini PUBLIC tanpa authentication**:
- Siapa pun yang tahu Supabase URL bisa akses data
- Cocok untuk private personal website
- Jangan simpan data sensitif
- Data auto-sync di semua device tanpa login

## Troubleshooting

### Error: Invalid API key
- Pastikan `.env` sudah benar
- Restart dev server (`npm run dev`)

### Data tidak tersimpan
- Pastikan migration sudah dijalankan
- Buka browser console, cek error message
- Pastikan RLS sudah disabled

### Connection error
- Cek internet connection
- Pastikan Project URL dan Anon Key benar
- Cek status Supabase: https://status.supabase.com
