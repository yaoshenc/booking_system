import { writable, type Writable } from "svelte/store"
import type { User as TUser } from "@typings/index"
import { signOut, updatePassword, type User  } from "firebase/auth"
import { auth } from "$lib/firebase/firebase.client"

const createUserStore  = () => {
    const user: Writable<TUser> = writable<TUser>({
        firebaseUser: null
    })


    const methods = {
        login: async (id: string, password: string) => {
            // try {
            //     await auth.signInWithEmailAndPassword(id, password);
            // } catch (error) {
            //     // Handle login error
            //     console.error("Error signing in:", error);
            // }
        },

        signUserOut: async () => {
            try {
                await signOut(auth);
            } catch (error) {
                // Handle sign-out error
                console.error("Error signing out:", error);
            }
        },

        updateUserPassword: async (password: string) => {
            try {
                if (!auth.currentUser) return;
                await updatePassword(auth.currentUser, password);
            } catch (error) {
                // Handle password update error
                console.error("Error updating password:", error);
            }
        }
    }

    return {
        ...user,
        ...methods
    }
}

export default createUserStore();