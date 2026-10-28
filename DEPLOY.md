# 🚀 Инструкция по деплою

## Быстрый выбор платформы

| Платформа | Сложность | Скорость | Стоимость |
|-----------|-----------|----------|-----------|
| **Vercel** | ⭐ Легко | ⚡ Быстро | Бесплатно |
| **Netlify** | ⭐ Легко | ⚡ Быстро | Бесплатно |
| **GitHub Pages** | ⭐⭐ Средне | ⚡ Быстро | Бесплатно |
| **Docker** | ⭐⭐⭐ Сложно | ⚡ Быстро | Зависит от хостинга |
| **Cloudflare Pages** | ⭐ Легко | ⚡⚡ Очень быстро | Бесплатно |

---

## 🎯 Vercel (Самый простой вариант)

### Через веб-интерфейс:
1. Перейдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите ваш репозиторий
5. Нажмите "Deploy"
6. ✅ Готово! Получите URL вида `https://your-project.vercel.app`

### Через CLI:
```bash
npm i -g vercel
vercel
```

---

## 🎯 Netlify

### Через веб-интерфейс:
1. Перейдите на [netlify.com](https://netlify.com)
2. Войдите через GitHub
3. Нажмите "Add new site" → "Import an existing project"
4. Выберите репозиторий
5. Настройки уже заполнены из `netlify.toml`
6. Нажмите "Deploy site"
7. ✅ Готово! Получите URL вида `https://your-site.netlify.app`

### Через CLI:
```bash
npm run build
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 🎯 GitHub Pages

### Автоматический деплой:
1. Запушьте код в GitHub
2. Перейдите в Settings → Pages
3. Source: "GitHub Actions"
4. ✅ Готово! Автоматический деплой при каждом push

### Ручной деплой:
```bash
npm run build
npm i -g gh-pages
gh-pages -d dist
```

---

## 🎯 Docker

### Локально:
```bash
docker-compose up -d
```

### На сервере:
```bash
# Клонируйте репозиторий
git clone <your-repo-url>
cd <project-name>

# Запустите
docker-compose up -d

# Проверьте
curl http://localhost
```

---

## 🎯 Cloudflare Pages

1. Перейдите на [pages.cloudflare.com](https://pages.cloudflare.com)
2. Подключите GitHub
3. Build command: `npm run build`
4. Output directory: `dist`
5. ✅ Готово!

---

## 🎯 Статический хостинг

После сборки загрузите папку `dist` на любой хостинг:

```bash
npm run build
# Загрузите содержимое папки dist на хостинг
```

Поддерживаемые хостинги:
- Hostinger
- Timeweb
- Beget
- Bluehost
- Любой другой с поддержкой статических файлов

---

## 📋 Чек-лист перед деплоем

- [ ] Протестировано локально (`npm run dev`)
- [ ] Сборка работает (`npm run build`)
- [ ] Все ссылки работают
- [ ] Игра Ridge Racer загружается
- [ ] Социальные сети открываются
- [ ] Адаптивность проверена на мобильных

---

## 🔧Troubleshooting

### Игра не загружается
- Проверьте, что iframe не блокируется CSP
- Убедитесь, что сайт доступен по HTTPS

### Стили не загружаются
- Проверьте пути в `dist/index.html`
- Убедитесь, что `npm run build` завершился успешно

### 404 при обновлении страницы
- Проверьте настройки редиректов (vercel.json, netlify.toml, nginx.conf)

---

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте README.md
2. Проверьте логи деплоя
3. Убедитесь, что все зависимости установлены (`npm install`)
