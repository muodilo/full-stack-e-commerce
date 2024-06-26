import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Dropdown } from "flowbite-react";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { getCart, resetCart } from "../../features/cart/cartSlice";

const Navbar = () => {
	const { user } = useSelector((state) => state.reducer.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
const [activeNav, setActiveNav] = useState(
			localStorage.getItem("activeNav") || "shop"
	);
	
	useEffect(() => {
			localStorage.setItem("activeNav", activeNav);
		}, [activeNav]);
const {
cart,
addToCartError,
addToCartSuccess,
addToCartMessage,
getCartMessage,
getCartLoading,
} = useSelector((state) => state.reducer.cart);
const handleLogout = () => {
const shouldLogout = window.confirm("Are you sure you want to logout?");
if (shouldLogout) {
dispatch(logout());
}
};

return (
	<section className='left-0 right-0 fixed z-30'>
		<div className='lg:mx-[7rem] md:mx-[5rem] px-5 mx-2 py-2 grid md:grid-cols-4 grid-cols-1  bg-blue-400/90 shadow rounded-2xl mt-1'>
			<div className='grid grid-cols-2 '>
				<Link
					to='/'
					className='lg:text-3xl text-xl font-bold flex items-center text-green-900'
					onClick={() => setActiveNav("shop")}>
					E-SHOP
				</Link>
				<div className='flex items-center md:hidden'>
					<Link
						to='/cart'
						className='relative  ms-auto md:hidden cursor-pointer'>
						<div className='t-0 absolute left-3'>
							<p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
								{getCartLoading ? (
									<Spinner />
								) : user && getCartMessage !== "Cart not found" ? (
									cart.numberOfItems
								) : (
									0
								)}
							</p>
						</div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='file: mt-4 h-6 w-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
							/>
						</svg>
					</Link>

					<div className='dropdown dropdown-bottom dropdown-end md:hidden block'>
						<div tabIndex={0} role='button' className='  ms-5 mt-1 text-2xl'>
							<RiMenu5Line />
						</div>
						<ul
							tabIndex={0}
							className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
							{user ? (
								<div className='flex justify-center'>
									<Dropdown
										label={
											<Avatar
												placeholderInitials={user.username.charAt(0)}
												rounded
											/>
										}
										arrowIcon={false}
										inline>
										<Dropdown.Header>
											<span className='block text-sm'>{user.username}</span>
											<span className='block truncate text-sm font-medium'>
												{user.email}
											</span>
										</Dropdown.Header>
										<Link to='/dashboard' className='block w-full text-center '>
											<Dropdown.Item>Dashboard</Dropdown.Item>
										</Link>
										<Link to='/setting' className='block w-full text-center '>
											<Dropdown.Item>Settings</Dropdown.Item>
										</Link>
										<Dropdown.Divider />
										<Dropdown.Item onClick={handleLogout}>
											Sign out
										</Dropdown.Item>
									</Dropdown>
								</div>
							) : (
								<div className=''>
									<Link to='/login' className='mt-3 flex text-xl btn'>
										<CiLogin className='me-1' /> Login
									</Link>
								</div>
							)}
							<li className='me-5  '>
								<Link to='/'>SHOP</Link>
							</li>
							<li className='me-5  '>
								<Link to='/men'>MEN</Link>
							</li>
							<li className='pe-5  transition'>
								<Link to='/women'>WOMEN</Link>
							</li>
							<li className='me-5  transition'>
								<Link to='/kids'>KIDS</Link>
							</li>
							<li className='me-5  transition'>
								<Link to='/contact'>CONTACT</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='md:flex md:items-center md:justify-center hidden lg:ms-16 ms-15 w-full'>
				<ul className='flex justify-around items-center w-full h-full text-white'>
					<li className='me-4'>
						<Link
							to='/'
							className={`block duration-300  hover:text-black lg:text-xl ${
								activeNav === "shop" ? "text-black" : "text-white"
							}`}
							onClick={() => setActiveNav("shop")}>
							SHOP
						</Link>
					</li>
					<li className='me-4'>
						<Link
							to='/men'
							className={`block duration-300  hover:text-black lg:text-xl ${
								activeNav === "men" ? "text-black" : "text-white"
							}`}
							onClick={() => setActiveNav("men")}>
							MEN
						</Link>
					</li>
					<li className='me-4'>
						<Link
							to='/women'
							className={`block duration-300  hover:text-black lg:text-xl ${
								activeNav === "women" ? "text-black" : "text-white"
							}`}
							onClick={() => setActiveNav("women")}>
							WOMEN
						</Link>
					</li>
					<li className='me-4'>
						<Link
							to='/kids'
							className={`block duration-300  hover:text-black lg:text-xl ${
								activeNav === "kids" ? "text-black" : "text-white"
							}`}
							onClick={() => setActiveNav("kids")}>
							KIDS
						</Link>
					</li>
					<li className='me-4'>
						<Link
							to='/contact'
							className={`block duration-300  hover:text-black lg:text-xl ${
								activeNav === "contact" ? "text-black" : "text-white"
							}`}
							onClick={() => setActiveNav("contact")}>
							CONTACT
						</Link>
					</li>
				</ul>
			</div>

			{user ? (
				<div className='md:flex md:ms-40 lg:ms-auto hidden'>
					<Dropdown
						label={
							<Avatar placeholderInitials={user.username.charAt(0)} rounded />
						}
						arrowIcon={false}
						inline>
						<Dropdown.Header>
							<span className='block text-sm'>{user.username}</span>
							<span className='block truncate text-sm font-medium'>
								{user.email}
							</span>
						</Dropdown.Header>
						<Link to='/dashboard' className='block w-full text-center '>
							<Dropdown.Item>Dashboard</Dropdown.Item>
						</Link>
						<Link to='/setting' className='block w-full text-center '>
							<Dropdown.Item>Settings</Dropdown.Item>
						</Link>
						<Dropdown.Divider />
						<Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
					</Dropdown>
				</div>
			) : (
				<div className=' md:flex md:ms-40 lg:ms-auto hidden'>
					<Link to='/login' className='flex btn items-center text-xl'>
						<CiLogin className='me-1' /> Login
					</Link>
				</div>
			)}
			<div className='md:flex hidden'>
				<Link to='/cart' className='relative  ms-auto cursor-pointer'>
					<div className='t-0 absolute left-3'>
						<p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
							{getCartLoading ? (
								<Spinner />
							) : user && getCartMessage !== "Cart not found" ? (
								cart.numberOfItems
							) : (
								0
							)}
						</p>
					</div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='file: mt-4 h-6 w-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
						/>
					</svg>
				</Link>
			</div>
		</div>
	</section>
);
};

export default Navbar;