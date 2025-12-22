# 🌸 A Space for You

> *In loving memory, in gentle healing, in your own time*

A peaceful digital sanctuary designed for healing, remembrance, and reflection. A personal space where memories live on and comfort can always be found.

![Version](https://img.shields.io/badge/version-1.0.0-pink)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.0-purple)

## ✨ Features

### 💌 Letters of Comfort
Read heartfelt messages of support and encouragement whenever you need them. Words of comfort are always just a click away.

### 📖 Personal Journal
Write your thoughts, feelings, and memories in your own private space. Your entries are stored securely and synced across all your devices.

### 🌸 Memory Garden
Create and nurture a beautiful digital garden of memories. Plant flowers to commemorate special moments and loved ones.

### ☁️ Comfort Corner
Find peace and solace in a quiet space designed for reflection and healing.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Supabase account (free tier works great)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/spaceforyou.git
cd spaceforyou
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup Supabase**

Follow the detailed setup guide in [SETUP_SUPABASE.md](./SETUP_SUPABASE.md)

Quick summary:
- Create a Supabase project
- Copy your credentials to `.env`
- Run the database migrations

4. **Create environment file**

Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

5. **Run the development server**
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 🛠️ Tech Stack

- **Framework:** React 19.2.3
- **Build Tool:** Vite 7.3.0
- **Styling:** TailwindCSS 4.1.18
- **Database:** Supabase (PostgreSQL)
- **Fonts:** Crimson Text & Inter from Google Fonts

## 📁 Project Structure

```
spaceforyou/
├── public/              # Static assets (favicons, manifest)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navigation.jsx
│   │   ├── PetOrnaments.jsx
│   │   └── Snackbar.jsx
│   ├── contexts/        # React contexts
│   │   └── NotificationContext.jsx
│   ├── lib/            # Utilities and configurations
│   │   └── supabase.js
│   ├── pages/          # Main page components
│   │   ├── Home.jsx
│   │   ├── Letters.jsx
│   │   ├── Journal.jsx
│   │   ├── ComfortCorner.jsx
│   │   └── MemoryGarden.jsx
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── supabase/
│   └── migrations/     # Database migration files
├── .env                # Environment variables (create this)
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Features in Detail

### Journal System
- **Auto-save:** Your writings are automatically saved as you type
- **Cloud Sync:** Access your journal from any device
- **Private & Secure:** Only you can see your entries
- **Markdown Support:** Write with rich formatting

### Memory Garden
- **Interactive Garden:** Plant virtual flowers to commemorate special memories
- **Customizable:** Choose different flower types and add personal notes
- **Visual Timeline:** See your memories grow over time
- **Peaceful Aesthetics:** Beautifully designed with calming colors

### Comfort Corner
- **Curated Content:** Thoughtfully selected messages of support
- **Daily Inspiration:** Find comfort whenever you need it
- **Gentle Reminders:** Encouraging words for difficult moments

## 🔒 Privacy & Security

- **No Authentication Required:** This is designed as a private, personal website
- **Data Ownership:** All your data is stored in your own Supabase database
- **Offline Capable:** Basic functionality works without internet
- **No Analytics:** Your privacy is respected - no tracking, no analytics

⚠️ **Important:** This website is public if someone knows your URL. Don't share sensitive information. For production use, consider adding authentication.

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables
4. Deploy!

## 🔧 Configuration

### Customizing Colors

Edit your color scheme in `tailwind.config.js` or directly in component files. The current theme uses soft, calming pastels:
- Primary: `#ffeef8` (soft pink)
- Text: `#2c2c2c` (dark gray)
- Accent: Warm earth tones

### Adding New Pages

1. Create a new component in `src/pages/`
2. Import it in `App.jsx`
3. Add routing logic in the `renderPage` function
4. Update navigation in `components/Navigation.jsx`

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Supabase Connection Issues
- Verify your `.env` credentials
- Check Supabase project status
- Ensure migrations are applied
- See [SETUP_SUPABASE.md](./SETUP_SUPABASE.md) for detailed troubleshooting

### Dev Server Won't Start
```bash
# Check if port 5173 is already in use
lsof -i :5173
# Kill the process if needed
kill -9 <PID>
```

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

ISC License - feel free to use this project for your own healing journey.

## 💝 Acknowledgments

Created with love and care for moments of healing and remembrance.

Special thanks to:
- Everyone who has lost someone dear
- Those on a healing journey
- Anyone seeking comfort in difficult times

---

**Remember:** Healing takes time. Be gentle with yourself. 🌸

*"Sometimes missing someone is a reminder that we can always cherish what we have now."*
