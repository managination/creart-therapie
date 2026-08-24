# Stage 1: Build
FROM oven/bun:1.3.5-alpine AS builder

WORKDIR /app

# Install dependencies first (cached layer)
# Copy all package.json files so bun can resolve workspace dependencies
COPY package.json bun.lock ./
COPY apps/web/package.json ./apps/web/
COPY packages/config/package.json ./packages/config/
COPY packages/env/package.json ./packages/env/
RUN bun install --frozen

# Copy source and build
COPY . .

# Web3Forms key must be present at build time — Vite inlines VITE_* vars into the
# static bundle during `vite build`; it is not read at runtime.
ARG VITE_WEB3FORMS_ACCESS_KEY
ENV VITE_WEB3FORMS_ACCESS_KEY=$VITE_WEB3FORMS_ACCESS_KEY

RUN bun run build

# Stage 2: Serve with Nginx
FROM nginx:alpine AS production

# Remove default nginx config
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
