import React from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
	const router = useRouter();

	return (
		<div className=' flex flex-col items-center'>
			<h2>QUICK OPTIONS</h2>
			<div className='flex items-center justify-center text-center'>
				<section>
					<div>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Id veniam totam, quam hic accusantium tempore
							deleniti atque possimus ad incidunt aut odio ducimus
							exercitationem. Magnam dolorem voluptas aliquid
							numquam necessitatibus?
						</p>
					</div>
					<div>
						<button
							onClick={() => {
								router.push('/order/new');
							}}
						>
							New Order
						</button>
					</div>
				</section>
				<section>
					<div>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Id veniam totam, quam hic accusantium tempore
							deleniti atque possimus ad incidunt aut odio ducimus
							exercitationem. Magnam dolorem voluptas aliquid
							numquam necessitatibus?
						</p>
					</div>
					<div>
						<button
							onClick={() => {
								router.push('/order/favorites');
							}}
						>
							SELECT - A - FAVE
						</button>
					</div>
				</section>
				<section>
					<div>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Id veniam totam, quam hic accusantium tempore
							deleniti atque possimus ad incidunt aut odio ducimus
							exercitationem. Magnam dolorem voluptas aliquid
							numquam necessitatibus?
						</p>
					</div>
					<div>
						<button
							onClick={() => {
								router.push('/order/random');
							}}
						>
							SURPRISE ME
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Dashboard;
