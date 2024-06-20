<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { DAYS, TODAY, isToday } from './calendar';
	import { getSelectedDate } from './context';
	import type { MonthDay } from '@typings/calendar';
	import { slide } from 'svelte/transition';
	import WeekdayHeader from './components/WeekdayHeader.svelte';

	const selectedDate = getSelectedDate();

	let monthDays: MonthDay[] = [];

	function setCalendar(inputDate: Date) {
		const date = new Date(inputDate);
		const dateMonth = date.getMonth();
		const fullYear = date.getFullYear();

		const prePaddingDays = new Date(fullYear, dateMonth, 1).getDay();
		const daysInMonth = new Date(fullYear, dateMonth + 1, 0).getDate();

		const previousMonth = dateMonth === 0 ? 12 : dateMonth;
		const previousYear = dateMonth === 0 ? fullYear - 1 : fullYear;
		const previousMonthDays = new Date(previousYear, previousMonth, 0).getDate();

		const currentMonthDays: MonthDay[] = [];
		for (let i = 0; i < prePaddingDays; i++) {
			const iDay = previousMonthDays - (prePaddingDays - i - 1);
			currentMonthDays.push({
				date: new Date(previousYear, previousMonth, iDay),
				isCurrentMonth: false,
				day: iDay,
				isToday: false,
				selected: false
			});
		}

		for (let i = 0; i < daysInMonth; i++) {
			const iDay = i + 1;

			const date = new Date(fullYear, dateMonth, iDay);
			currentMonthDays.push({
				date: date,
				day: iDay,
				isCurrentMonth: true,
				isToday: isToday(date),
				selected: isSameDay(new Date(fullYear, dateMonth, iDay), $selectedDate)
			});
		}

		const postPaddingDays = 42 - currentMonthDays.length;
		for (let i = 0; i < postPaddingDays; i++) {
			const iDay = i + 1;
			currentMonthDays.push({
				date: new Date(fullYear, dateMonth + 1, iDay),
				day: iDay,
				isCurrentMonth: false,
				isToday: false,
				selected: false
			});
		}

		monthDays = currentMonthDays;
	}

	onMount(() => {
		setCalendar($selectedDate);
	});

	const unsubscribe = selectedDate.subscribe((date) => {
		setCalendar(date);
	});

	onDestroy(() => {
		unsubscribe();
	});

	function isSameDay(d1: Date, d2: Date) {
		return (
			d1.getFullYear() === d2.getFullYear() &&
			d1.getMonth() === d2.getMonth() &&
			d1.getDate() === d2.getDate()
		);
	}

	function setSelectedDate(index: number) {
		const newSelected = monthDays[index];

		if (newSelected.isCurrentMonth == false) return;

		if (!newSelected) {
			return;
		}

		const oldSelected = monthDays.find((day) => day.selected);

		if (oldSelected) {
			oldSelected.selected = false;
		}

		if (newSelected.selected) {
			newSelected.selected = false;
			$selectedDate = TODAY;
		} else {
			newSelected.selected = true;
			$selectedDate = newSelected.date;
		}

		monthDays = [...monthDays];
	}
</script>

<div class=" flex flex-col gap-1 w-full h-full">
	<WeekdayHeader selectedDate={$selectedDate} />

	{#if monthDays.length > 0}
		<div transition:slide={{ duration: 100 }} class="grid grid-cols-7 w-full gap-1 h-full">
			{#each monthDays as { day, isCurrentMonth, isToday, selected }, i}
				<button
					class="chip uppercase
                {isCurrentMonth
						? selected
							? 'variant-ghost-tertiary'
							: isToday
							? 'variant-ghost-success'
							: 'variant-ghost-surface'
						: 'variant-ringed-surface'}   
                w-full h-full aspect-video flex flex-col"
					on:click={() => {
						setSelectedDate(i);
					}}
				>
					<span class=" text-start w-full">
						{day}
					</span>
					<div class="flex-grow"></div>
				</button>
			{/each}
		</div>
	{/if}
</div>
