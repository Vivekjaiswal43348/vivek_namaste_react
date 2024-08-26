import { useErrorBoundary } from "react-error-boundary";

export default function ErrorFallbackBoundar({ error, resetErrorBoundary }) {
	const { resetBoundary } = useErrorBoundary();

	return (
		<div className="flex h-[50vh] w-[100%] justify-center items-center">
			<div
				role="alert"
				className="flex flex-col gap-y-2 p-6 sm:p-14 rounded-md bg-[#faebd7] shadow-md shadow-slate-500">
				<div>
					<p className="text-xl">Oops, Something went wrong! 😒</p>
					<pre style={{ color: "red" }}>{`${error.message}`}</pre>
				</div>
				<button 
					onClick={resetBoundary}
					className="border border-solid border-gray-400 py-1 px-3 rounded-md bg-sky-300 font-medium">
					Try again...
				</button>
			</div>
		</div>
	);
}
