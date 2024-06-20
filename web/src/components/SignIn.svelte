<script lang="ts">
	import { USER } from "@stores/index";


    
    let employeeid = '';
    let password = '';

    const login = async () => {
        if (!employeeid || !password) {
			return;
		}



    };
</script>



<form class="w-1/8 h-fit left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute card p-4 text-token space-y-4">
    <label for="employeeid" class="label">
        <span>Employee Id</span>
        <input class="input" type="text" placeholder="Employee Id" required/>
    </label>
    <label for="password" class="label">
        <span>Password</span>
        <input class="input" type="password" placeholder="Password" required />
    </label>

    <button class="btn variant-filled" 
        on:click|preventDefault={login}
    >Login</button>
</form>