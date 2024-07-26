import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full h-auto absolute font-extrabold underline underline-offset-2 active:overline-offset-2 active:underline-offset-2 decoration-grey decoration-4'>
			<nav className='text-battleship'>
				<div className=''>
					{/* <Link
						href='/home'
						className='flex items-center space-x-3 rtl:space-x-reverse'
					>
						<img src='/home' className='h-8' alt='logo' />
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
							home
						</span>
					</Link> */}
					<div className='w-full md:w-auto' id='navbar-default'>
						<ul className='font-medium p-4 md:p-0 mt-4 border'>
							<li>
								<Link href='#' className='' aria-current='page'>
									Home
								</Link>
							</li>
							<li>
								<Link href='/about' className='py-2 px-3'>
									About
								</Link>
							</li>
							<li>
								<Link href='/contact' className='py-2 px-3'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
