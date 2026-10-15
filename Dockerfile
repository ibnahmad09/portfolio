# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Stage 1 - Build frontend assets.
# Requires BOTH PHP and Node: @laravel/vite-plugin-wayfinder runs
# `php artisan wayfinder:generate` during `npm run build`, and the Bunny
# fonts plugin downloads fonts at build time.
# ---------------------------------------------------------------------------
FROM php:8.4-cli AS assets

RUN apt-get update && apt-get install -y --no-install-recommends \
        git unzip ca-certificates curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_sqlite mbstring bcmath

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader \
        --prefer-dist --no-interaction --no-progress

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

RUN composer dump-autoload --optimize --no-interaction
RUN npm run build

# ---------------------------------------------------------------------------
# Stage 2 - Runtime image (PHP + SQLite only).
# ---------------------------------------------------------------------------
FROM php:8.4-cli AS runtime

RUN apt-get update && apt-get install -y --no-install-recommends \
        curl unzip \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install pdo_sqlite mbstring bcmath opcache

WORKDIR /app

COPY . .
COPY --from=assets /app/vendor ./vendor
COPY --from=assets /app/public/build ./public/build

RUN mkdir -p \
        storage/framework/cache \
        storage/framework/sessions \
        storage/framework/views \
        storage/logs \
        bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

ENV PORT=8080
EXPOSE 8080

CMD ["sh", "docker/start.sh"]
