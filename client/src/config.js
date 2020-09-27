export const api = 
    process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://scoool.herokuapp.com';
export const turnServer = 'stun:stun.l.google.com:19302';