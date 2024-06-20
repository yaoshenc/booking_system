<script lang="ts">
    import BookingItem from '@components/UpcomingBookings/BookingItem.svelte';
	import TableUpcomingBookings from '@components/UpcomingBookings/TableUpcomingBookings.svelte';
    import { Avatar } from '@skeletonlabs/skeleton';
    import { writable, get} from 'svelte/store';

    const userProfile = writable({
        id: 'xxxx2131',
        firstname: 'Kevin',
        lastname: 'Durant',
        email: 'xxxxx@example.com',
        phone: '04xx4567890',
        dob: '2004-01-01',
        creation: '2023-02-02'
    });

    let isEditMode = false;
    let formData = {
    };

    formData = { ...get(userProfile) };

    function toggleEditMode() {
        formData = { ...get(userProfile) };
        isEditMode = !isEditMode;
    }

    function saveProfile() {
        userProfile.set(formData);
        isEditMode = false; 
    }

    let firstLetterFirstname = formData.firstname.charAt(0);
    let firstLetterLastname = formData.lastname.charAt(0);

</script>


<div class="card p-4">
    {#if !isEditMode}
        <div class="flex justify-end">
            <button class="" on:click={toggleEditMode}>
                <i class="bi bi-pencil p-2"></i>
                <div class="font-bold">Edit</div>
            </button>
        </div>
    {/if}

    {#if isEditMode}
    <div class="flex justify-end">
        <form on:submit|preventDefault={saveProfile}>
            <button class="btn variant-filled-surface" type="submit">Save</button>
            <button class="btn variant-filled-surface" type="button" on:click={toggleEditMode}>Cancel</button>
        </form>
    </div>
    {/if}

    <div class="flex items-center justify-center">
        <Avatar initials="{firstLetterFirstname}{firstLetterLastname}" background="bg-primary-400" width="w-14" rounded="rounded-2xl" />
        
    </div>

    <div class="font-bold text-center pt-3">
        <input class="bg-transparent border-none placeholder-gray-400 w-20" bind:value={formData.firstname} disabled={!isEditMode}/>
        <input class="bg-transparent border-none w-20" bind:value={formData.lastname} disabled={!isEditMode}/>
    </div>

    <!-- <h3 class="h1 font-bold text-center pt-3"></h3> -->

    <!-- <div class="p-2 pb-4 flex items-center justify-between">
        <div class="flex-none">
            <Avatar initials="YC" background="bg-primary-400" width="w-14" rounded="rounded-2xl" />
        </div>
    
        <div class="flex-grow text-center">
            <h3 class="h3 font-bold">Firstname Lastname</h3>
        </div>
    
        <div class="flex-none">
            <button class="bi bi-pencil" on:click={toggleEdit}></button>
        </div>
    </div>  -->

    <div class="font-bold pt-5">Upcoming bookings</div>
    <dl class="list-dl w-full space-y-1">
        <TableUpcomingBookings/>
    </dl>

    <form on:submit|preventDefault={saveProfile}>
        <h4 class="h4 font-bold pt-1">Personal Information</h4> 
        <label class="label pb-2" for="email">Email</label>
        <input class="input " id="email" type="email" bind:value={formData.email} disabled={!isEditMode}/>

        <label for="phone pb-2">Phone</label>
        <input class="input" id="phone" type="tel" bind:value={formData.phone} disabled={!isEditMode}/>

        <label class="pb-2" for="dob">Date of Birth</label>
        <input class="input" id="dob" type="date" bind:value={formData.dob} disabled={!isEditMode}/>
        
        
        <h4 class="h4 font-bold pt-3">Account Details</h4> 
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">Account ID</label>
        <div class="input p-3">{formData.id}</div>
        
        
        <label class="pb-2" for="phone">Account Created</label>
        <input class="input" id="creation" type="date" bind:value={formData.creation} disabled/>

    </form>

</div>
