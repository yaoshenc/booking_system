<script lang="ts">
	import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import DayView from './EventCalendar/DayView.svelte';
	import MonthView from './EventCalendar/MonthView.svelte';
	import WeekView from './EventCalendar/WeekView.svelte';
	import { TODAY } from './EventCalendar/calendar';
	import {
		getSelectedDate,
		getSelectedViewType,
		setSelectedDate,
		setSelectedViewType
	} from './EventCalendar/context';
	import type { ViewType } from '@typings/context';

	const viewOptions: ViewType[] = [
		{ label: 'Month', value: 'month', component: MonthView },
		{ label: 'Week', value: 'week', component: WeekView },
		{ label: 'Day', value: 'day', component: DayView }
	];

	setSelectedDate(TODAY);
	setSelectedViewType(viewOptions[0]);

	const selectedDate = getSelectedDate();
	const selectedViewType = getSelectedViewType();

	const viewTypeComboBoxPopup: PopupSettings = {
		event: 'focus-click',
		target: 'viewTypeComboBoxPopup',
		placement: 'bottom'
	};

	function moveCalendar(direction: 'next' | 'previous') {
		const date = $selectedDate;
		let newDate = new Date();
		switch ($selectedViewType.value) {
			case 'month':
				date.setMonth(date.getMonth() + (direction === 'next' ? 1 : -1));
				// Makew newDate the first day of the month
				newDate = new Date(date.getFullYear(), date.getMonth(), 1);
				newDate.setDate(1);
				break;
			case 'week':
				date.setDate(date.getDate() + (direction === 'next' ? 7 : -7));
				// Make newDate the first day of the week
				newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
				newDate.setDate(newDate.getDate() - newDate.getDay());
				break;
			case 'day':
				date.setDate(date.getDate() + (direction === 'next' ? 1 : -1));
				// Make newDate the same day as date
				newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
				newDate.setDate(newDate.getDate() + newDate.getDay());
				break;
		}

		$selectedDate = newDate;
		// set selected date to the first day of the month
	}
</script>

<div class="card w-full h-full p-4 flex flex-col gap-2">
	<div class="flex justify-between items-center">
		<div class="flex items-center justify-center gap-4">
			<div class="btn-group variant-soft-primary text-md w-48">
				<button class="w-12" on:click={() => moveCalendar('previous')}>
					<i class="bi bi-chevron-left"></i>
				</button>
				<button class="w-full" use:popup={viewTypeComboBoxPopup}>{$selectedViewType.label}</button>
				<button class="w-12" on:click={() => moveCalendar('next')}>
					<i class="bi bi-chevron-right"></i>
				</button>
			</div>
			<h2 class="text-2xl font-bold">
				{$selectedDate.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</h2>
		</div>
	</div>
    <div class="w-2/3 h-full overflow-hidden">
        <svelte:component this={$selectedViewType.component} />
    </div>

</div>

<div class="card w-48 shadow-xl" data-popup="viewTypeComboBoxPopup">
	<ListBox>
		{#each viewOptions as { label, value }, i}
			<ListBoxItem
				bind:group={$selectedViewType.value}
				on:click={() => ($selectedViewType = viewOptions[i])}
				name={value}
				{value}>{label}</ListBoxItem
			>
		{/each}
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
