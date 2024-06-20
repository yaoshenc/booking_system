<script lang="ts">
    import { RadioItem } from '@skeletonlabs/skeleton';
    export let options: { label: string; value: number }[] = [];
    export let selectedValue: number;

    export const dispatch = createEventDispatcher();
</script>

<div class="p-4">
    {#each options as option}
        <RadioItem bind:group={selectedValue} name="radio-group" value={option.value}>
            {option.label}
        </RadioItem>
    {/each}
</div>

<!-- Radio Group Component?? -->