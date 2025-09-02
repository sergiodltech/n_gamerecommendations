# Game Showcase

A responsive designed website to showcase new game releases.

## Features

- Carousel of featured games
  - Comment Marquee with shows several comments from players about the game
- Full support of 3 languages: English, Japanese, and Spanish
- Games grid with featured games highlighted
  - Automatic animations of gameplay on mouse hover
- Game Details on Thumbnail or Featured Games click
  - Video Trailer
  - Gamers comments marquee
  - Type of online game
  - Public score
  - Number of players
  - Category tags
  - One-line description
  - Full description under 100 words
  - Selected screenshots with short one-line editorial comments
- Optimized media
- Responsive design technologies

## Test

Clone repository and change to the root directory

```bash
$ git clone https://github.com/sergiodltech/n_gamerecommendations
$ cd n_gamerecommendations
```

Be sure to use the latest stable npm and node versions

```bash
$ nvm install stable
$ nvm use stable
```

Install dependencies

```bash
$ npm install
```

Run dev environment

```bash
node run dev
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t n_gamerecommendations .

# Run the container
docker run -p 3000:3000 n_gamerecommendations
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```
