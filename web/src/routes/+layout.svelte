<script lang="ts">
	import { auth } from '$lib/firebase/firebase.client';
	import { USER } from '@stores/index';
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import SignIn from '@components/SignIn.svelte';

	import { AppShell, AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				console.log('User is signed in');
			} else {
				console.log('User is signed out');
			}
			USER.update((state) => {
				return { firebaseUser: user };
			});

			if (browser && !$USER.firebaseUser && window.location.pathname !== '/') {
				window.location.href = '/';
			}
		});
	});
</script>

<!-- {#if $USER.firebaseUser} -->

<AppShell class="overflow-hidden">
	<svelte:fragment slot="header">
		<AppBar>Bookarama</AppBar>
	</svelte:fragment>
	<!-- ... -->

	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">
					<i class="bi bi-house-door" />
				</svelte:fragment>
				<span>Dashboard</span>
			</AppRailAnchor>

			<AppRailAnchor href="/pos" selected={$page.url.pathname === '/pos'}>
				<svelte:fragment slot="lead">
					<i class="bi bi-credit-card"></i>
				</svelte:fragment>
				<span>Sales</span>
				<span>Terminal</span>
			</AppRailAnchor>

			<AppRailAnchor href="/bookings" selected={$page.url.pathname === '/bookings'}>
				<svelte:fragment slot="lead">
					<i class="bi-book-half" />
				</svelte:fragment>
				<span>Bookings</span>
			</AppRailAnchor>



			<AppRailAnchor href="/customer" selected={$page.url.pathname === '/customer'}>
				<svelte:fragment slot="lead">
					<i class="bi bi-person"></i>
				</svelte:fragment>
				<span>Customer</span>
			</AppRailAnchor>

			<AppRailAnchor href="/analytics" selected={$page.url.pathname === '/analytics'}>
				<svelte:fragment slot="lead">
					<i class="bi bi-graph-up"></i>
				</svelte:fragment>
				<!-- <span>Online</span> -->
				<span>Analytics</span>
			</AppRailAnchor>

			<AppRailAnchor href="/financials" selected={$page.url.pathname === '/financials'}>
				<svelte:fragment slot="lead">
					<i class="bi bi-cash-stack"></i>
				</svelte:fragment>
				<span>Financials</span>
			</AppRailAnchor>

			<AppRailAnchor href="/manage" selected={$page.url.pathname === '/manage'}>
				<svelte:fragment slot="lead">
					<i class="bi bi-person-badge"></i>
				</svelte:fragment>
				<span>Manage</span>
			</AppRailAnchor>

			<AppRailAnchor href="/settings" selected={$page.url.pathname === '/settings'}>
				<svelte:fragment slot="lead">
					<i class="bi bi-sliders"></i>
				</svelte:fragment>
				<span>Settings</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>

			<slot />
</AppShell>

<!-- 	
{:else}
    <SignIn />
{/if} -->
