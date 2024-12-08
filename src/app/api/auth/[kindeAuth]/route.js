import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server';

// CORS Handling Middleware
const setCorsHeaders = (res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://case-cobra-psi.vercel.app'); // Allow your specific domain
    res.setHeader('Access-Control-Allow-Credentials', 'true');  // Allow credentials if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');  // Allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Allowed headers
};

// Main GET handler with CORS
export const GET = async (req, res) => {
    // Handle preflight request (OPTIONS)
    if (req.method === 'OPTIONS') {
        setCorsHeaders(res);
        return res.status(200).end();
    }

    // Set CORS headers for actual request
    setCorsHeaders(res);

    // Call the Kinde Auth handler to manage authentication
    return handleAuth(req, res);
};
