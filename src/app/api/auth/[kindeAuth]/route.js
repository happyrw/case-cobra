// /api/auth/[kindeAuth]/route.ts

import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server';

// This function will be responsible for handling the CORS headers
const setCorsHeaders = (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (or set specific origins)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Methods allowed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
};

// GET route handler
export const GET = async (req, res) => {
    // Set CORS headers first
    setCorsHeaders(res);

    // Handle the actual authentication flow
    return handleAuth(req, res);
};

// Handle OPTIONS request (CORS preflight request)
export const OPTIONS = (req, res) => {
    // Handle preflight CORS request by setting appropriate headers
    setCorsHeaders(res);
    return res.status(200).end(); // Respond with a success status for OPTIONS request
};
