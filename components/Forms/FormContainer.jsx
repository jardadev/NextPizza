
const FormContainer = ({ children }) => {
	return (
		<form className='bg-grey-lighter'>
			<div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
				<div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
					{children}
					
				</div>
			</div>
		</form>
	);
};

export default FormContainer;
