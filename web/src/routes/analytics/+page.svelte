<script lang="ts">
    import BookingAnalytics from '@components/Analytics/BookingAnalytics.svelte';
	import WebsiteAnlytics from '@components/Analytics/WebsiteAnlytics.svelte';
import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    let value: number = 0;
</script>


<div class="p-6"> 
    <RadioGroup class="p-2" hover="hover:variant-soft-secondary">
            <RadioItem bind:group={value} name="justify" value={0}>Booking</RadioItem>
            <RadioItem bind:group={value} name="justify" value={1}>Website</RadioItem>
            <RadioItem bind:group={value} name="justify" value={2}>Employee</RadioItem>
    </RadioGroup>

</div>


{#if value === 0}
    <div class="p-4">
        <BookingAnalytics/>
    </div>
{:else if value === 1}
    <div class="p-4">
        <WebsiteAnlytics/>
    </div>
{:else if value === 2}
    <div class="p-4">
    </div>
{/if}