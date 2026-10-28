# Saint Nisko Landing Page

Лендинг для стримера Saint Nisko в стиле ретровейв с неоновым фиолетовым.

## 🚀 Быстрый старт

### Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Предпросмотр production-сборки
npm run preview
```

## 📦 Деплой

### 1. Vercel (Рекомендуется)

**Автоматический деплой:**

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Подключите GitHub репозиторий
3. Vercel автоматически определит Vite и настроит деплой
4. Нажмите "Deploy"

**CLI деплой:**

```bash
# Установите Vercel CLI
npm i -g vercel

# Деплой
vercel

# Production деплой
vercel --prod
```

### 2. Netlify

**Автоматический деплой:**

1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. Подключите GitHub репозиторий
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Нажмите "Deploy site"

**CLI деплой:**

```bash
# Установите Netlify CLI
npm i -g netlify-cli

# Сборка
npm run build

# Деплой
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages

**Автоматический деплой через GitHub Actions:**

1. Запушьте код в репозиторий GitHub
2. Перейдите в Settings → Pages
3. Выберите Source: "GitHub Actions"
4. Workflow автоматически запустится при push в main/master

**Ручной деплой:**

```bash
# Сборка
npm run build

# Установите gh-pages
npm i -g gh-pages

# Деплой
gh-pages -d dist
```

### 4. Docker

**Сборка и запуск контейнера:**

```bash
# Сборка образа
docker build -t saint-nisko-landing .

# Запуск контейнера
docker run -d -p 80:80 --name landing saint-nisko-landing

# Или через docker-compose
docker-compose up -d
```

**Деплой на VPS:**

```bash
# На сервере
git clone <your-repo>
cd <your-repo>
docker-compose up -d
```

### 5. Cloudflare Pages

1. Зарегистрируйтесь на [pages.cloudflare.com](https://pages.cloudflare.com)
2. Подключите GitHub репозиторий
3. Build command: `npm run build`
4. Output directory: `dist`
5. Нажмите "Save and Deploy"

### 6. Статический хостинг

После сборки (`npm run build`) загрузите содержимое папки `dist` на любой хостинг:

- **Hostinger**
- **Bluehost**
- **Timeweb**
- **Beget**
- **Любой другой хостинг с поддержкой статических файлов**

## 🔧 Конфигурация

### Vercel
Конфигурация в `vercel.json`

### Netlify
Конфигурация в `netlify.toml`

### Docker
- `Dockerfile` - сборка образа
- `docker-compose.yml` - оркестрация
- `nginx.conf` - конфигурация веб-сервера

### GitHub Pages
Workflow в `.github/workflows/deploy.yml`

## 📁 Структура проекта

```
├── src/
│   ├── App.tsx          # Главный компонент
│   ├── main.tsx         # Точка входа
│   └── index.css        # Стили
├── public/              # Статические файлы
├── dist/                # Production сборка
├── index.html           # HTML шаблон
├── package.json         # Зависимости
├── vite.config.js       # Конфигурация Vite
├── vercel.json          # Vercel конфиг
├── netlify.toml         # Netlify конфиг
├── Dockerfile           # Docker образ
├── docker-compose.yml   # Docker Compose
└── nginx.conf           # Nginx конфиг
```

## 🎨 Технологии

- **React 18** - UI библиотека
- **Vite** - Build tool
- **TypeScript** - Типизация
- **Tailwind CSS** - Стили
- **Font Awesome** - Иконки

## 📝 Лицензия

© 2026 Saint Nisko. Все права защищены.
