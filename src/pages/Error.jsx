import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
	const error = useRouteError()


	return (
		<main className="error">
		<div className="error__container">
			<h2 className="error__title">An error occurred!</h2>
			<p className="error__message">{error.message}</p>
			<p className="error__status">{error.statusText}({error.status})</p>
			<Link to={"/"} className="error__link">Return to home</Link>
		</div>
	</main>
	)
}