import Link from 'next/link';

export default function NotFound() {
	return (
		<div>
			<h2>Not Found</h2>
			<Link href='/'>Click here to return to home</Link>
		</div>
	);
}
