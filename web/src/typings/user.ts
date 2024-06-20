import type { User as FirebaseUser } from 'firebase/auth';


export type UserRole = 'admin' | 'user';

export type User = {
    firebaseUser: FirebaseUser | null;
};