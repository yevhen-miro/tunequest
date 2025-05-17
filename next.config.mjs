import dotenv from 'dotenv';

// Load environment variables from .env file
//dotenv.config(config.env);

console.log('Client ID in next.config.js:', process.env.SPOTIFY_CLIENT_ID);
console.log('Scopes in next.config.js:', process.env.SPOTIFY_SCOPES);
console.log('Redirect URI in next.config.js:', process.env.SPOTIFY_REDIRECT_URI);

const nextConfig = {
    output: "standalone",
};

export default nextConfig;