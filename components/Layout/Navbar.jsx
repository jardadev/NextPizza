import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
	const router = useRouter()
	
  return (
	<div>
		<div>
			<h1>Pizza Time</h1>
		</div>

		<div>
		{JSON.stringify(router.pathname)}
		{JSON.stringify(router.asPath)}

		</div>
	</div>
  )
}

export default Navbar