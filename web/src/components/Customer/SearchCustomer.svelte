<script lang="ts">
    import { Autocomplete } from '@skeletonlabs/skeleton';
    import type { AutocompleteOption } from '@skeletonlabs/skeleton';
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';

    let popupSettings: PopupSettings = {
        event: 'focus-click',
        target: 'popupAutocomplete',
        placement: 'bottom',
    };

    let inputDemo:string = '';

    const flavorOptions: AutocompleteOption<string>[] = [
        { label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
        { label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
        { label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Neapolitan', value: 'neapolitan', keywords: 'mix, strawberry, chocolate, vanilla', meta: { healthy: false } },
        { label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
        { label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } }
    ];

    function onFlavorSelection(event: CustomEvent<AutocompleteOption<string>>): void {
        inputDemo = event.detail.label;
}

</script>

<div> 
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
        <div class="input-group-shim">
            <i class="bi bi-person-circle"></i>
        </div>
        <input 
            type="search" 
            name="autocomplete-search" 
            bind:value={inputDemo} 
            placeholder="Search Customer..." 
            use:popup={popupSettings}
        />

        <button class="variant-filled-primary">
            <i class="bi bi-search"></i>
        </button>

    </div>
    
</div>


<div data-popup="popupAutocomplete" class="card w-full p-4 overflow-y-auto" tabindex="-1">
    <Autocomplete 
    bind:input={inputDemo} 
    options={flavorOptions} 
    on:selection={onFlavorSelection} 
    />
</div>