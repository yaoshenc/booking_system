import type { Context, ViewType } from "@typings/context"
import { getContext, setContext } from "svelte"
import { writable } from "svelte/store"

export function setSelectedDate(date: Date) {
	let selected = writable<Date>(date || new Date())
	setContext('selectedDate', selected)
}

export function getSelectedDate() {
    return getContext<Context<Date>>('selectedDate')
}

export function setSelectedViewType(viewType: ViewType) {
    let selected = writable<ViewType>(viewType)
    setContext('selectedViewType', selected)
}

export function getSelectedViewType() {
    return getContext<Context<ViewType>>('selectedViewType')
}