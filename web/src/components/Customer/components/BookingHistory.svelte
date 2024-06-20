<script lang="ts">
    import SearchHistory from './SearchHistory.svelte';
	import BreadCrumbs from './BreadCrumbs.svelte';
    import { Paginator } from '@skeletonlabs/skeleton';
	import TableHistory from './TableHistory.svelte';

    const tableArr = [
        { 
            bookingId: 23, 
            date: "16/12/2023", 
            duration: '11:00am - 11:10am', 
            activity: 'Sim Racing', 
            points: 50,
        },
        { 
            bookingId: 34,
            date: "12/12/2023", 
            duration: '9:00pm - 11:10pm', 
            activity: 'Karting', 
            points: 45,
        },
        { 
            bookingId: 34,
            date: "12/12/2023", 
            duration: '9:00pm - 11:10pm', 
            activity: 'Karting', 
            points: 45,
        },
        { 
            bookingId: 34,
            date: "12/12/2023", 
            duration: '9:00pm - 11:10pm', 
            activity: 'Karting', 
            points: 45,
        },
        
        // ... more rows
    ];

    const numBookings = tableArr.length;

</script>

<div class="card p-4">
    <div class="flex justify-between items-center pb-3">
        <h5 class="h5 font-bold"> 
            Previous Bookings for Firstname Lastname
        </h5>
        
        <div class="w-full sm:w-1/4">
            <SearchHistory />
        </div>
    </div>

    <div>
        <h5 class="h5 pb-3" >Total number of bookings: {numBookings}</h5>
    </div>

    <TableHistory {tableArr}/>

    <Paginator showNumerals maxNumerals={1}></Paginator>
</div>
