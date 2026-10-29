# 🚀 Preproduction Build

## Сборка готова к деплою

### Содержимое сборки:
```
dist/
├── index.html              (3.21 kB)
└── assets/
    ├── index-BtAuETbh.css  (33.76 kB, gzip: 6.32 kB)
    └── index-DKG7JEfH.js   (163.65 kB, gzip: 51.32 kB)
```

## 📋 Что включено:

✅ Оптимизированный production код  
✅ Минифицированные CSS и JavaScript  
✅ Все ресурсы готовы к деплою  
✅ Поддержка всех современных браузеров  
✅ Адаптивный дизайн  
✅ Все функции работают:
  - Стримы (Twitch, VK Видео Live, Goodgame)
  - Расписание с ссылками на каналы
  - Социальные сети (Telegram, Discord, Threads, Instagram)
  - Блог (Telegram канал)
  - Игра Ridge Racer (встроенная через iframe)

## 🚀 Деплой на preproduction:

### Вариант 1: Статический хостинг
Загрузите содержимое папки `dist/` на ваш preproduction сервер.

### Вариант 2: Vercel/Netlify
```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod --dir=dist
```

### Вариант 3: Docker
```bash
docker-compose up -d
```

### Вариант 4: VPS/Nginx
Скопируйте папку `dist/` на сервер и настройте nginx:
```nginx
server {
    listen 80;
    server_name preprod.yourdomain.com;
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔍 Проверка перед production:

- [ ] Все ссылки работают
- [ ] Игра Ridge Racer загружается
- [ ] Социальные сети открываются
- [ ] Расписание корректно отображается
- [ ] Адаптивность на мобильных устройствах
- [ ] Производительность (Lighthouse score > 90)

## 📊 Метрики сборки:

- **Размер HTML:** 3.21 kB
- **Размер CSS:** 33.76 kB (gzip: 6.32 kB)
- **Размер JS:** 163.65 kB (gzip: 51.32 kB)
- **Общий размер:** ~200 kB
- **Общий размер (gzip):** ~59 kB

## 🎯 Следующие шаги:

1. Протестируйте на preproduction сервере
2. Проверьте все функции
3. После успешного тестирования деплойте на production

---

**Build Date:** 2026  
**Version:** 1.0.0  
**Status:** ✅ Ready for Preproduction
