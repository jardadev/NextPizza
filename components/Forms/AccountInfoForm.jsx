import React from 'react'

const AccountInfoForm = () => {
	const [form, setForm] = useState({fullName: '', lastName: '', email: '', address: '', });
  return (
	<form>
		<input type='text' className='block border border-grey-light w-full p-3 rounded mb-4'  />
	</form>
  )
}

export default AccountInfoForm