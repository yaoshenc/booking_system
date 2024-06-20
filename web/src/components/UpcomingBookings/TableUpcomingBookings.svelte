<script>
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
</script>


<div class="table-container">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Date</th>
                <th>Session Duration</th>
                <th>Activity</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each tableArr as row, i}
            <tr>
                <td>{row.date}</td>
                <td>{row.duration}</td>
                <td>{row.activity}</td>
                <td>
                    <button class="font-bold text-red-75">
                        View
                    </button>
                </td>
            </tr>

            {/each}
        </tbody>
        <tfoot>
            <tr>
                <!-- <th colspan="3">Points</th>
                <td>{totalPoints}</td> -->
            </tr>
        </tfoot>
    </table>
</div>