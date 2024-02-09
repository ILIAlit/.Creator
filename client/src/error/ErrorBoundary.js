import { Component } from "react";

class ErrorBoundary extends Component {
	state = {
		error: null,
	};
	static getDerivedStateFromError(error) {
		return { error };
	}
	render() {
		const { error } = this.state;

		if (error) {
			return <this.props.ErrorComponent error={error} />;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
