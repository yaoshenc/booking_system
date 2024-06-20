<script lang="ts">
	import { DAYS } from '../calendar';

	export let selectedDate: Date;
</script>

<div class="flex items-center justify-between w-full gap-1">
	{#each DAYS as day}
		<div
			class:variant-ghost-tertiary={day === selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}
			class="chip uppercase variant-filled-surface w-1/2 overflow-hidden"
		>
			<span class="">
				{day}
			</span>
		</div>
	{/each}
</div>
