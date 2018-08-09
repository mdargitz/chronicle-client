export const API_BASE_URL = 
process.env.NODE_ENV === 'production'
  ? 'https://chronicle-server.herokuapp.com'
  : 'http://localhost:8080';