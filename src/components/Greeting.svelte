<script>
	export let messages;

	const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

	const assignMessage = () => {
		let newMessage = randomMessage();

		while (newMessage === greeting) {
			newMessage = randomMessage();
		}

		greeting = newMessage;
	};

	let greeting = randomMessage();
</script>

<div>
	<h3>{greeting}! Thank you for visiting!</h3>
	<button on:click={assignMessage}>
		New Greeting
	</button>
</div>