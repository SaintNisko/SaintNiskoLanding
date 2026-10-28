import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isGameOpen, setIsGameOpen] = useState(false);

  // Lock body scroll when game modal is open
  useEffect(() => {
    if (isGameOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isGameOpen]);

  // Track active section on scroll using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = 64; // h-16 = 4rem = 64px

    const observerOptions = {
      root: null,
      rootMargin: `-${navHeight}px 0px -50% 0px`,
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const schedule = [
    { day: 'Понедельник', activity: 'Отдых', time: null, icon: '😴' },
    { day: 'Вторник', activity: 'Отдых', time: null, icon: '😴' },
    { day: 'Среда', activity: 'Средовые сессионки', time: '21:00 МСК', icon: '🎮' },
    { day: 'Четверг', activity: 'Отдых', time: null, icon: '😴' },
    { day: 'Пятница', activity: 'Стримы прохождений', time: '20:00 МСК', icon: '🎯' },
    { day: 'Суббота', activity: 'Стримы прохождений / Киностримы', time: '19:00 / 18:00 МСК', icon: '🎬' },
    { day: 'Воскресенье', activity: 'Стримы прохождений', time: '18:00 МСК', icon: '🏆' },
  ];

  const streamChannels = [
    { name: 'Twitch', url: 'https://www.twitch.tv/saint_nisko', icon: 'fa-brands fa-twitch', color: '#9146FF', isSvg: false },
    { name: 'VK Видео Live', url: 'https://live.vkvideo.ru/saint_nisko', icon: 'fa-brands fa-vk', color: '#0077FF', isSvg: false },
    { name: 'Goodgame', url: 'https://goodgame.ru/Saint_Nisko', icon: '', color: '#FF6B00', isSvg: true },
  ];

  const socialLinks = [
    { name: 'Telegram', url: 'https://t.me/ro1eplayground', icon: 'fa-brands fa-telegram', color: '#26A5E4' },
    { name: 'Discord', url: 'https://discord.gg/urWuRkdKcm', icon: 'fa-brands fa-discord', color: '#5865F2' },
    { name: 'Threads', url: 'https://www.threads.com/@saintnisko', icon: 'fa-brands fa-threads', color: '#ffffff' },
    { name: 'Instagram', url: 'https://www.instagram.com/', icon: 'fa-brands fa-instagram', color: '#E4405F' },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg opacity-90" />
        {/* Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 60 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.7 + 0.3,
                animation: `glowPulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: Math.random() * 2 + 's',
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-neon-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <a href="https://www.twitch.tv/saint_nisko" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/3b4fe4c2-fdf9-498a-aff5-01c15668254a-profile_image-300x300.png"
                  alt="Saint Nisko"
                  className="w-10 h-10 rounded-full border-2 border-neon-purple shadow-[0_0_10px_rgba(176,38,255,0.5)] hover:shadow-[0_0_20px_rgba(176,38,255,0.8)] transition-all duration-300"
                />
              </a>
              <span className="text-sm text-gray-400 hidden sm:block">Saint Nisko</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {['home', 'streams', 'schedule', 'social', 'bonus'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setActiveSection(section)}
                  className={`relative text-sm uppercase tracking-wider transition-all duration-300 hover:text-neon-purple ${
                    activeSection === section ? 'text-neon-purple neon-text' : 'text-gray-300'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'streams' ? 'Стримы' :
                   section === 'schedule' ? 'Расписание' :
                   section === 'social' ? 'Соцсети' : 'Бонус'}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-purple shadow-[0_0_8px_rgba(176,38,255,0.8)]" />
                  )}
                </a>
              ))}
            </div>
            {/* Mobile menu */}
            <div className="md:hidden flex items-center space-x-4">
              {['streams', 'schedule', 'social'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-xs text-gray-400 hover:text-neon-purple transition-colors"
                >
                  {section === 'streams' ? '📺' : section === 'schedule' ? '📅' : '🌐'}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16">
        {/* Retro Sun */}
        <div className="relative mb-8">
          <div className="retro-sun w-48 h-48 sm:w-64 sm:h-64 animate-float" />
          {/* Sun glow */}
          <div className="absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-neon-purple/20 blur-3xl" />
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-center mb-4 animate-glow-pulse">
          <span className="neon-text">SAINT</span>{' '}
          <span className="neon-text-blue">NISKО</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-center mb-8 max-w-2xl px-4">
          <span className="text-neon-purple">Стример</span>{' '}
          <span className="text-gray-500">•</span>{' '}
          <span className="text-neon-blue">Геймер</span>{' '}
          <span className="text-gray-500">•</span>{' '}
          <span className="text-neon-purple">Контент-мейкер</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center px-4">
          <a
            href="#streams"
            className="px-8 py-3 bg-neon-purple/20 border border-neon-purple rounded-full text-neon-purple font-bold uppercase tracking-wider hover:bg-neon-purple/40 transition-all duration-300 animate-border-glow"
          >
            Смотреть стримы
          </a>
          <a
            href="#schedule"
            className="px-8 py-3 bg-transparent border border-neon-blue/50 rounded-full text-neon-blue font-bold uppercase tracking-wider hover:bg-neon-blue/20 hover:border-neon-blue transition-all duration-300"
          >
            Расписание
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-neon-purple/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-neon-purple rounded-full animate-pulse" />
          </div>
        </div>

        {/* Retro grid floor */}
        <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden opacity-30">
          <div className="retro-grid w-full h-full" />
        </div>
      </section>

      {/* Streams Section */}
      <section id="streams" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 neon-text">
            📺 СТРИМЫ
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Выбери платформу и присоединяйся к стриму
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {streamChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-dark-card/80 border border-neon-purple/30 rounded-2xl p-8 text-center card-hover transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 to-transparent rounded-2xl" />
                <div className="relative z-10">
                  <div
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: channel.color + '20', boxShadow: `0 0 20px ${channel.color}40` }}
                  >
                    {channel.isSvg ? (
                      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Gamepad body */}
                        <path d="M12 28c0-6 4-10 10-10h20c6 0 10 4 10 10v8c0 6-4 12-10 12h-4l-3-4h-6l-3 4h-4c-6 0-10-6-10-12v-8z" fill={channel.color} opacity="0.9"/>
                        {/* D-pad */}
                        <rect x="18" y="27" width="3" height="9" rx="1" fill="#0a0014"/>
                        <rect x="15" y="30" width="9" height="3" rx="1" fill="#0a0014"/>
                        {/* Buttons */}
                        <circle cx="42" cy="28" r="2" fill="#0a0014"/>
                        <circle cx="46" cy="32" r="2" fill="#0a0014"/>
                        <circle cx="42" cy="36" r="2" fill="#0a0014"/>
                        <circle cx="38" cy="32" r="2" fill="#0a0014"/>
                        {/* GG text */}
                        <text x="32" y="50" textAnchor="middle" fontSize="8" fontWeight="bold" fill={channel.color}>GG</text>
                      </svg>
                    ) : (
                      <i className={`${channel.icon}`} style={{ color: channel.color }} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-purple transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-gray-400 text-sm">Смотреть стрим →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 neon-text">
            📅 РАСПИСАНИЕ
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Еженедельное расписание стримов
          </p>

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={item.day}
                className={`relative bg-dark-card/60 border rounded-xl p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:translate-x-2 ${
                  item.time
                    ? 'border-neon-purple/50 hover:border-neon-purple hover:shadow-[0_0_15px_rgba(176,38,255,0.3)]'
                    : 'border-gray-700/30 opacity-60'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className={`font-bold text-lg ${item.time ? 'text-white' : 'text-gray-500'}`}>
                        {item.day}
                      </h3>
                      <p className={`text-sm ${item.time ? 'text-neon-purple' : 'text-gray-600'}`}>
                        {item.activity}
                      </p>
                    </div>
                  </div>
                  {item.time && (
                    <div className="flex items-center gap-3">
                      <span className="text-neon-blue font-mono font-bold text-lg">
                        {item.time}
                      </span>
                      {item.day === 'Суббота' ? (
                        <div className="flex gap-2">
                          <a href="https://www.twitch.tv/saint_nisko" target="_blank" rel="noopener noreferrer" 
                            className="px-3 py-1 bg-neon-purple/20 border border-neon-purple/50 rounded-full text-xs text-neon-purple hover:bg-neon-purple/40 transition-all">
                            Twitch
                          </a>
                          <a href="https://live.vkvideo.ru/saint_nisko" target="_blank" rel="noopener noreferrer"
                            className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs text-blue-400 hover:bg-blue-500/40 transition-all">
                            VK
                          </a>
                        </div>
                      ) : (
                        <a href="https://www.twitch.tv/saint_nisko" target="_blank" rel="noopener noreferrer"
                          className="px-3 py-1 bg-neon-purple/20 border border-neon-purple/50 rounded-full text-xs text-neon-purple hover:bg-neon-purple/40 transition-all">
                          Смотреть →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section id="social" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 neon-text">
            🌐 СОЦИАЛЬНЫЕ СЕТИ
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Будь на связи — подписывайся и общайся
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 bg-dark-card/60 border border-gray-700/30 rounded-2xl p-6 card-hover transition-all duration-300 backdrop-blur-sm"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: social.color + '20', boxShadow: `0 0 15px ${social.color}30` }}
                >
                  <i className={`${social.icon}`} style={{ color: social.color }} />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* Blog section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="neon-text-blue">✍️ БЛОГ</span>
            </h3>
            <div className="bg-dark-card/60 border border-neon-blue/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-neon-blue/20 flex items-center justify-center text-3xl flex-shrink-0">
                  📝
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold mb-2">
                    <span className="text-neon-purple">Следи</span>{' '}
                    <span className="text-neon-blue">за новостями</span>
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Все анонсы, новости и интересные посты — в нашем Telegram-канале
                  </p>
                  <a
                    href="https://t.me/ro1eplayground"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-neon-blue/20 border border-neon-blue/50 rounded-full text-neon-blue font-medium hover:bg-neon-blue/40 transition-all"
                  >
                    <i className="fa-brands fa-telegram" />
                    Перейти в Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section - Ridge Racer */}
      <section id="bonus" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 neon-text">
            🏎️ БОНУС
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Специальная плюшка для настоящих фанатов
          </p>

          <div className="relative bg-dark-card/80 border-2 border-neon-purple/50 rounded-3xl p-8 sm:p-12 backdrop-blur-sm overflow-hidden animate-border-glow">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-blue/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="text-6xl sm:text-8xl mb-6 animate-float">🏁</div>
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                <span className="neon-text">RIDGE </span>
                <span className="neon-text-blue">RACER</span>
              </h3>
              <p className="text-lg mb-2">
                <span className="text-neon-purple">Легендарная</span>{' '}
                <span className="text-neon-blue">аркадная гонка</span>{' '}
                <span className="text-neon-purple">прямо в браузере!</span>
              </p>
              <p className="text-gray-500 text-sm mb-8">
                Классика PSX, которая не нуждается в представлении. Почувствуй скорость ретровейва!
              </p>
              
              <button
                onClick={() => setIsGameOpen(true)}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full text-white font-bold text-lg uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(176,38,255,0.5)] hover:shadow-[0_0_50px_rgba(0,240,255,0.8)] cursor-pointer"
              >
                <i className="fa-solid fa-play" />
                Играть сейчас
              </button>
              
              <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-globe text-neon-blue" />
                  Браузерная версия
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-clock text-neon-purple" />
                  Без установки
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-heart text-neon-blue" />
                  Бесплатно
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modal */}
      {isGameOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsGameOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl bg-dark-card border-2 border-neon-purple rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(176,38,255,0.5)] animate-border-glow">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-dark-surface border-b border-neon-purple/30">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏎️</span>
                <h3 className="text-lg font-bold neon-text">RIDGE RACER</h3>
                <span className="text-xs text-gray-500 hidden sm:inline">PlayStation Classic</span>
              </div>
              <button
                onClick={() => setIsGameOpen(false)}
                className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400 hover:bg-red-500/40 hover:text-white transition-all duration-300"
              >
                <i className="fa-solid fa-xmark text-lg" />
              </button>
            </div>
            
            {/* Game iframe */}
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <iframe
                src="https://www.retrogames.cc/embed/41555-ridge-racer.html"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                title="Ridge Racer - RetroGames"
                style={{ border: 'none' }}
              />
            </div>
            
            {/* Footer info */}
            <div className="px-6 py-3 bg-dark-surface border-t border-neon-purple/30 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-keyboard text-neon-blue" />
                  Управление - в разделе "Controls Settings"
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-expand text-neon-pink" />
                  Приятной игры
                </span>
              </div>
              <a
                href="https://www.retrogames.cc/psx-games/ridge-racer.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-neon-purple transition-colors"
              >
                Открыть в новой вкладке →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-neon-purple/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <div className="text-3xl font-black neon-text">SAINT NISKО</div>
            
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-card border border-gray-700/50 flex items-center justify-center hover:border-neon-purple hover:shadow-[0_0_10px_rgba(176,38,255,0.5)] transition-all duration-300"
                >
                  <i className={`${social.icon} text-sm`} style={{ color: social.color }} />
                </a>
              ))}
            </div>

            {/* Stream links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {streamChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-neon-purple transition-colors"
                >
                  {channel.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-600 text-sm text-center">
              <p>© 2026 Saint Nisko. Все права защищены.</p>
              <p className="mt-1 text-xs text-gray-700">Сделано с 💜 в стиле ретровейв</p>
            </div>
          </div>
        </div>

        {/* Bottom grid effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-20">
          <div className="retro-grid w-full h-full" />
        </div>
      </footer>
    </div>
  );
}

export default App;
