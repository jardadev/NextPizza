import React from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
	const router = useRouter();

	return (
		<main className='flex flex-col items-center pt-6'>
			<h2 className='text-xl lg:text-4xl'>QUICK OPTIONS</h2>
			<div className='grid grid-cols-3 gap-12 mx-4 text-2xl '>
				<section className='border text-center h-96 shadow-lg shadow-gray-600 p-12 flex flex-col gap-4 items-center'>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Id veniam totam, quam hic accusantium tempore
						deleniti atque possimus ad incidunt aut odio ducimus
						exercitationem. Magnam dolorem voluptas aliquid numquam
						necessitatibus?
					</p>

					<button
						className='btn w-1/3 rounded-lg bg-gray-500 hover:bg-gray-700'
						type='button'
						onClick={() => {
							router.push('/order/new');
						}}
					>
						New Order
					</button>
				</section>
				<section className='border text-center h-96 shadow-lg shadow-gray-600 p-12 flex flex-col gap-4 items-center'>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Id veniam totam, quam hic accusantium tempore
						deleniti atque possimus ad incidunt aut odio ducimus
						exercitationem. Magnam dolorem voluptas aliquid numquam
						necessitatibus?
					</p>

					<button
						className='btn w-1/3 rounded-lg bg-gray-500 hover:bg-gray-700'
						type='button'
						onClick={() => {
							router.push('/order/new');
						}}
					>
						Recent Orders
					</button>
				</section>
				<section className='border text-center h-96 shadow-lg shadow-gray-600 p-12 flex flex-col gap-4 items-center'>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Id veniam totam, quam hic accusantium tempore
						deleniti atque possimus ad incidunt aut odio ducimus
						exercitationem. Magnam dolorem voluptas aliquid numquam
						necessitatibus?
					</p>

					<button
						className='btn w-1/3 rounded-lg bg-gray-500 hover:bg-gray-700'
						type='button'
						onClick={() => {
							router.push('/order/new');
						}}
					>
						View Favorites
					</button>
				</section>
			
			</div>
		</main>
	);
};

export default Dashboard;

// Dashboard.getLayout = function PageLayout(page) {
// 	return (
// 		<AppLayout>
// 			<PageNav />
// 			{page}
// 			<Footer />
// 		</AppLayout>
// 	);
// };
