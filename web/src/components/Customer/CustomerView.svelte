<script lang="ts">
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import Profile from './components/Profile.svelte';
	import BookingHistory from './components/BookingHistory.svelte';
	import Member from './components/Member.svelte';
    
    let value: number = 0;
</script>

<div class="p-4"> 
    <RadioGroup class="p-2" hover="hover:variant-soft-secondary">
        <RadioItem bind:group={value} name="justify" value={0}>Profile</RadioItem>
        <RadioItem bind:group={value} name="justify" value={1}>Booking History</RadioItem>
        <RadioItem bind:group={value} name="justify" value={2}>Member</RadioItem>
    </RadioGroup>
</div>

{#if value === 0}
    <div class="p-4">
        <Profile/>
    </div>
{:else if value === 1}
    <div class="p-4">
        <BookingHistory/>
    </div>
{:else if value === 2}
    <div class="p-4">
        <Member/>
    </div>
{/if}