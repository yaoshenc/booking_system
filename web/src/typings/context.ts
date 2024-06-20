import type { Writable } from "svelte/store";


export type Context<T> = Writable<T>


export type ViewType = {
    label: string;
    value: string;
    component: ConstructorOfATypedSvelteComponent;
}