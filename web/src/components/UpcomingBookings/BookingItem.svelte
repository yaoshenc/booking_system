
<script lang="ts">
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    import DropdownMenu from './DropdownMenu.svelte'

    const popupClick: PopupSettings = {
        event: 'click',
        target: 'popupClick',
        placement: 'right',
    };
</script>


<div>
    <span class="badge bg-primary-500"></span>
    <span class="flex-auto">

        <dt class="font-bold text-base">
            Date - Activity
        </dt>

        <dd class="text-sm">
            Description 
        </dd>

    </span>

        
    <button class="bi bi-three-dots" use:popup={popupClick}>
        <!-- <DropdownMenu/> -->
    </button>
    
    

</div>
