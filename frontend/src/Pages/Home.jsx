import { useState } from "react";
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";

const clientList = [
	{
		id: 1,
		image: "clients/_Client_logo.png",
	},
	{
		id: 2,
		image: "clients/_Client_logo-1.png",
	},
	{
		id: 3,
		image: "clients/_Client_logo-2.png",
	},
	{
		id: 4,
		image: "clients/_Client_logo-3.png",
	},
	{
		id: 5,
		image: "clients/_Client_logo-4.png",
	},
	{
		id: 6,
		image: "clients/_Client_logo-5.png",
	},
];

const companyList = [
	{
		id: 1,
		image: "companies/figma.png",
	},
	{
		id: 2,
		image: "companies/flexisaf.png",
	},
	{
		id: 4,
		image: "companies/slack.png",
	},

	{
		id: 5,
		image: "companies/wordpress.png",
	},
	{
		id: 6,
		image: "companies/python.png",
	},

	{
		id: 8,
		image: "companies/css3.png",
	},
];

const teammates = [
	{
		id: 1,
		image: "images/ctoImage.png",
		title: "CTO",
	},
	{
		id: 2,
		image: "images/chiefFrontendDev.png",
		title: "chief frontend dev",
	},
	{
		id: 3,
		image: "images/leadDesigner.png",
		title: "lead designer",
	},
	{
		id: 4,
		image: "images/chiefBackendDev.png",
		title: "chief backend dev",
	},
	{
		id: 5,
		image: "images/frontendDev.png",
		title: "frontend dev",
	},
	{
		id: 6,
		image: "images/frontendDev2.png",
		title: "frontend dev",
	},
];

function Section({ title, children }) {
	return (
		<section className='mb-14'>
			<h2 className='text-center text-[var(--text-color)] text-[30px] font-bold mb-6 md:mx-0 w-full md:text-6xl md:font-semibold md:leading-[1.25] capitalize'>
				{title}
			</h2>
			{children}
		</section>
	);
}

function FeatureCard({ title, icon, desc }) {
	return (
		<div className='bg-[var(--bg-color-300)] mx-auto rounded-lg  text-[var(--text-color)] py-6 flex flex-col gap-6 items-center'>
			<h2 className='text-center text-[24px] font-bold capitalize w-[20ch]'>
				{title}
			</h2>
			<div>{icon}</div>
			<p className='text-center text-lg w-5/6 font-medium'>{desc}</p>
		</div>
	);
}

function TeamCard({ image, role }) {
	return (
		<div className='min-w-[200px] w-52 mb-6'>
			<div className='rounded-xl overflow-hidden'>
				<img
					src={image}
					alt={role}
				/>
			</div>
			<p className='text-center text-[var(--text-color)] text-[18px] font-medium capitalize'>
				{role}
			</p>
		</div>
	);
}

function Home() {
	const [currentSlide, setCurrentSlide] = useState(0);
	return (
		<main className='bg-[var(--bg-color-200)] '>
			<section className='mb-14'>
				<div className='hero flex flex-col md:flex-row items-center mb-12 pt-8'>
					<div className='relative mb-2 w-full mx-auto md:w-1/2'>
						<img
							src='/heroBricks.png'
							alt='colored bricks'
							className='w-[300px] md:w-[400px]  mx-auto object-cover'
						/>

						<img
							src='/ideaBulb.png'
							alt='you got the idea'
							className='absolute top-10 right-8 rotate-[15deg]'
						/>

						<img
							src='/ideaBulb.png'
							alt='you got the idea'
							className='absolute bottom-16 left-2 -rotate-[15deg] w-20 md:hidden'
						/>
					</div>

					<div className='w-full md:w-1/2'>
						<h1 className='capitalize text-center sm:text-left text-[var(--text-color)] text-[26px] font-bold mb-4 md:mx-0 w-full md:text-6xl md:w-[13ch] md:font-semibold md:leading-[1.25]'>
							we provide digital solutions.
						</h1>
						<p className='text-[18px] text-center sm:text-left w-[34ch] text-[var(--text-color)] mb-6 mx-auto md:mx-0'>
							Let’s create something extraordinary
							together—explore our services and start transforming
							your digital experience today!
						</p>
						<Link
							to='/contact'
							className='text-white hover:text-[#4144bd] bg-[#4144bd] flex rounded-lg items-center justify-center w-36 mx-auto md:mx-0 mt-4 border-2 border-transparent hover:border-[#4144bd] hover:bg-transparent transition-colors duration-200 py-2 px-4 font-semibold text-lg'>
							Get in touch
						</Link>
					</div>
				</div>

				<div className='flex items-center gap-x-4 justify-between w-full overflow-x-clip md:w-5/6 lg:w-3/4 mx-auto my-8'>
					{clientList.map((client) => (
						<div
							key={client.id}
							className='w-full'>
							<img
								src={client.image}
								alt='client logo'
							/>
						</div>
					))}
				</div>

				<div className='hidden md:flex items-center justify-between w-full md:w-5/6 px-4 mt-12 mx-auto'>
					{companyList.map((company) => (
						<img
							src={company.image}
							alt='client logo'
							key={company.id}
						/>
					))}
				</div>
			</section>

			<Section title='our features'>
				<div className='w-5/6 mx-auto grid grid-auto-rows md:grid-cols-3 gap-6 mb-16'>
					<FeatureCard
						title='elevate your online presence'
						icon={
							<svg
								width='69'
								height='55'
								viewBox='0 0 69 55'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M57.6554 0.250671H11.332C9.07466 0.250671 7.24468 2.08064 7.24468 4.33802V39.4212H36.1968V9.44722C36.1968 7.18984 38.0268 5.35987 40.2841 5.35987H61.7428V4.33803C61.7428 2.08064 59.9128 0.250671 57.6554 0.250671ZM41.3072 14.5564C41.3072 12.299 43.1371 10.4691 45.3945 10.4691H64.4689C66.7262 10.4691 68.5562 12.299 68.5562 14.5564V50.6614C68.5562 52.9188 66.7262 54.7488 64.4689 54.7488H45.3945C43.1371 54.7488 41.3072 52.9188 41.3072 50.6614V14.5564ZM4.52095 44.5303H36.198V54.7487H4.52095C2.26356 54.7487 0.433594 52.9188 0.433594 50.6614V48.6177C0.433594 46.3603 2.26357 44.5303 4.52095 44.5303Z'
									className='fill-[var(--text-color)]'
								/>
							</svg>
						}
						desc='We create visually stunning, user-friendly websites that reflect your brand and captivate your audience.'
					/>

					<FeatureCard
						title='client-focused solutions.'
						icon={
							<svg
								width='56'
								height='57'
								viewBox='0 0 56 57'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M21.7217 25.3969C28.5769 25.3969 34.1341 19.8396 34.1341 12.9845C34.1341 6.12928 28.5769 0.572055 21.7217 0.572055C14.8665 0.572055 9.30929 6.12928 9.30929 12.9845C9.30929 19.8396 14.8665 25.3969 21.7217 25.3969ZM21.7217 56.4277C33.7182 56.4277 43.4434 50.8705 43.4434 44.0154C43.4434 37.1602 33.7182 31.603 21.7217 31.603C9.72513 31.603 0 37.1602 0 44.0154C0 50.8705 9.72513 56.4277 21.7217 56.4277ZM34.0153 24.8241C36.9716 21.7553 38.7896 17.5823 38.7896 12.9846C38.7896 10.7982 38.3785 8.70779 37.6293 6.78651C42.5891 6.99165 46.5472 11.0775 46.5472 16.0877C46.5472 21.2291 42.3793 25.397 37.2379 25.397C36.105 25.397 35.0194 25.1947 34.0153 24.8241ZM48.0953 44.0153C48.0953 45.6873 47.7237 47.3031 47.0311 48.8301C52.3264 47.1887 55.8531 44.2564 55.8531 40.9122C55.8531 36.2383 48.9642 32.3689 39.9863 31.7039C44.9844 34.8096 48.0953 39.1774 48.0953 44.0153Z'
									className='fill-[var(--text-color)]'
								/>
							</svg>
						}
						desc='Whether you need a sleek portfolio site or a complex web application, we design and develop solutions that meet your specific needs.'
					/>

					<FeatureCard
						title='Transforming Your Digital Experience.'
						icon={
							<svg
								width='61'
								height='61'
								viewBox='0 0 61 61'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6.43803 0.477783C3.12187 0.477783 0.433594 3.16606 0.433594 6.48222V12.4866C0.433594 15.8028 3.12187 18.4911 6.43803 18.4911H18.4469C21.763 18.4911 24.4513 15.8028 24.4513 12.4866V6.48222C24.4513 3.16606 21.763 0.477783 18.4469 0.477783H6.43803ZM6.43803 30.4999C3.12187 30.4999 0.433594 33.1882 0.433594 36.5043V54.5176C0.433594 57.8338 3.12187 60.5221 6.43803 60.5221H18.4469C21.763 60.5221 24.4513 57.8338 24.4513 54.5176V36.5043C24.4513 33.1882 21.763 30.4999 18.4469 30.4999H6.43803ZM36.4609 6.48221C36.4609 3.16606 39.1492 0.477783 42.4653 0.477783H54.4742C57.7904 0.477783 60.4787 3.16606 60.4787 6.48221V24.4955C60.4787 27.8117 57.7904 30.4999 54.4742 30.4999H42.4653C39.1492 30.4999 36.4609 27.8117 36.4609 24.4955V6.48221ZM42.4653 42.5089C39.1492 42.5089 36.4609 45.1972 36.4609 48.5133V54.5178C36.4609 57.8339 39.1492 60.5222 42.4653 60.5222H54.4742C57.7904 60.5222 60.4787 57.8339 60.4787 54.5178V48.5133C60.4787 45.1972 57.7904 42.5089 54.4742 42.5089H42.4653Z'
									className='fill-[var(--text-color)]'
								/>
							</svg>
						}
						desc='Build robust, high-performance applications that streamline your business processes and engage users effectively.'
					/>
				</div>
				<div className='w-5/6 mx-auto grid grid-auto-rows md:grid-cols-2 gap-6'>
					<div className='mb-4'>
						<h2 className="text-center font-['Pacifico',cursive] capitalize text-[var(--text-color)] text-5xl mb-4">
							start planning
						</h2>
						<img
							src='planningImage.png'
							alt='planning'
							className='mx-auto md:w-5/6'
						/>
					</div>

					<div className='bg-[var(--bg-color-300)] py-4 px-8 rounded-3xl w-5/6 md:w-1/2 mx-auto'>
						<h2 className='font-semibold text-[var(--yellow-primary)] text-[28px] mb-4'>
							We work with your
						</h2>

						<ul className='flex flex-col gap-y-6 mb-10 pl-10'>
							<li className='text-[var(--text-color)] text-2xl font-medium relative before:absolute before:content-["\2713"] before:text-[var(--bg-color-100)] before:text-sm before:-translate-y-1/2 before:top-1/2 before:-left-10 before:w-5 before:h-5 before:grid before:place-items-center before:rounded-full before:bg-[var(--text-color)]'>
								Budget
							</li>
							<li className='text-[var(--text-color)] text-2xl font-medium relative before:absolute before:content-["\2713"] before:text-[var(--bg-color-100)] before:text-sm before:-translate-y-1/2 before:top-1/2 before:-left-10 before:w-5 before:h-5 before:grid before:place-items-center before:rounded-full before:bg-[var(--text-color)]'>
								timeline
							</li>
							<li className='text-[var(--text-color)] text-2xl font-medium relative before:absolute before:content-["\2713"] before:text-[var(--bg-color-100)] before:text-sm before:-translate-y-1/2 before:top-1/2 before:-left-10 before:w-5 before:h-5 before:grid before:place-items-center before:rounded-full before:bg-[var(--text-color)]'>
								plans
							</li>
							<li className='text-[var(--text-color)] text-2xl font-medium relative before:absolute before:content-["\2713"] before:text-[var(--bg-color-100)] before:text-sm before:-translate-y-1/2 before:top-1/2 before:-left-10 before:w-5 before:h-5 before:grid before:place-items-center before:rounded-full before:bg-[var(--text-color)]'>
								deadlines
							</li>
						</ul>

						<p className='text-lg text-[var(--text-color)] w-5/6'>
							Start your journey with us today to achieve your
							online goals and stand out in the digital landscape.
						</p>
					</div>
				</div>
			</Section>

			<Section title='our team'>
				<p className='text-md text-center text-[var(--text-color)] w-5/6 md:w-1/2 mx-auto mb-8'>
					Our web development team is the cornerstone of our success,
					bringing together a diverse set of skills and a wealth of
					experience to deliver exceptional digital solutions.
					Here&apos;s what sets our team apart:
				</p>
				<div>
					<div className='w-full md:w-[72%] mx-auto mt-4 px-6 relative'>
						<div className='overflow-x-hidden'>
							<div
								className='flex items-center gap-8 w-full transition-transform duration-200 linear-ease transform'
								style={{
									transform: `translateX(-${
										currentSlide * 50
									}%)`,
								}}>
								{teammates.map(({ id, image, title }) => (
									<TeamCard
										role={title}
										image={image}
										key={id}
									/>
								))}
							</div>
						</div>
						{/* these two are for the desktop display */}
						<button
							onClick={() =>
								setCurrentSlide((prev) =>
									prev <= 0 ? 1 : prev - 1
								)
							}
							className='w-10 h-10 md:grid place-items-center rounded-full text-xl absolute left-5 top-1/2 hidden  transform -translate-y-1/2 bg-gray-50/70 text-white'>
							<MdOutlineKeyboardArrowLeft />
						</button>
						<button
							onClick={() =>
								setCurrentSlide((prev) =>
									prev >= 1 ? 0 : prev + 1
								)
							}
							className='w-10 h-10 hidden md:grid place-items-center rounded-full text-xl absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-50/70 text-white'>
							<MdOutlineKeyboardArrowRight />
						</button>

						{/* these two are for the mobile display */}
						<button
							onClick={() =>
								setCurrentSlide((prev) =>
									prev === 0 ? 5 : prev - 1
								)
							}
							className='w-10 h-10 md:hidden grid place-items-center rounded-full text-xl absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-50/70 text-white'>
							<MdOutlineKeyboardArrowLeft />
						</button>
						<button
							onClick={() =>
								setCurrentSlide((prev) =>
									prev === 5 ? 0 : prev + 1
								)
							}
							className='w-10 h-10 md:hidden grid place-items-center rounded-full text-xl absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-50/70 text-white'>
							<MdOutlineKeyboardArrowRight />
						</button>
					</div>
				</div>
			</Section>
		</main>
	);
}
export default Home;
