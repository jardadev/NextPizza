import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import UserCard from './UserCard'
import LoginBtn from './LoginBtn'
const Navbar = () => {
	const router = useRouter()
	const session = useSession()
	
  return (
	<div>
		<div>
			<h1>Pizza Time</h1>
		</div>

		<div>
		{session.status === "authenticated" && <UserCard session={session}/>}
		{session.status === "unauthenticated" && <LoginBtn />}
		{JSON.stringify(router.pathname)}
		{JSON.stringify(router.asPath)}

		</div>
	</div>
  )
}

export default Navbar