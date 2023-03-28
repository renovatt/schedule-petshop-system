import jwt, { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
    userId: string;
}

export const getUserIdFromToken = (token: string): string | undefined => {
    try {
        const decodedToken = jwt.decode(token) as DecodedToken;
        return decodedToken.userId;
    } catch (error) {
        return undefined;
    }
}