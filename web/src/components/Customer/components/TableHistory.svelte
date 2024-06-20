<script lang="ts">
    // Prop to receive table data
    export let tableArr = []; 
    // Calculate total points within the component
    $: totalPoints = tableArr.reduce((sum, row) => sum + row.points, 0);

    let expandedStates = new Array(tableArr.length).fill(false);

    function toggleRow(index) {
        expandedStates[index] = !expandedStates[index];
    }

</script>

<div class="table-container">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Date</th>
                <th>Session Duration</th>
                <th>Activity</th>
                <th>points</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each tableArr as row, index}
            <tr on:click={() => toggleRow(index)}>
                <td>{row.date}</td>
                <td>{row.duration}</td>
                <td>{row.activity}</td>
                <td>{row.points}</td>
                <td>
                    <button class="font-bold text-red-75">      
                        {expandedStates[index] ? 'Hide' : 'View'}                 
                    </button>
                </td>
            </tr>

            {#if expandedStates[index]}
                <tr>
                    <td colspan="5">
                        <div class="card text-center p3 variant-outline-tertiary variant-filled-tertiary">
                            
                            <div class="flex justify-end p-3">
                                <button>
                                    <i class="bi bi-pencil p-2"></i>
                                    <div class="font-bold">Edit</div>
                                </button>
                            </div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>

                        </div>
                    </td>
                </tr>

            {/if}
            {/each}
        </tbody>

        <tfoot>
            <tr>
                <th colspan="3">Points</th>
                <td>{totalPoints}</td>
            </tr>
        </tfoot>
    </table>
</div>