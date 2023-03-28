export type AuthProviderProps = {
    children: React.ReactNode;
};

export type User = {
    id: string;
    username: string;
    email: string;
};

export type SignInData = {
    email: string;
    password: string;
};

export type SignInResponse = {
    user: User;
    token: string;
};

export type AuthContextType = {
    isToken: string;
    isLoading: boolean
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<{
        response?: SignInResponse;
        error?: Error;
    }>;
    signOut: () => void;
};