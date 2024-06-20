<script lang="ts">
	import WeekdayHeader from "./components/WeekdayHeader.svelte";
import { getSelectedDate } from "./context";


    const selectedDate = getSelectedDate();

</script>









<div class="h-full flex flex-col gap-1 w-full">
    <WeekdayHeader selectedDate={$selectedDate} />




</div>