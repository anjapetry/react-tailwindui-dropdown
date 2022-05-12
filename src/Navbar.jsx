import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
	return (
		<div
			className="w-full h-20 flex justify-between items center text-yellow-400
			px-10"
		>
			<h1 className="text-2xl font-bold text-[#00df9a] pt-6 ransition ease-in-out delay-40 hover:-translate-y-0 hover:scale-50 py-2.5 hover:bg-yellow-400 duration-500 rounded-lg">
				REACT.
			</h1>
			<ul className="flex items-center">
				<li className="p-4">
					<Menu as="div" className="relative inline-block text-left">
						<Menu.Button>Services</Menu.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-100"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-yellow-400 divide-y divide-[#00df9a]focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? 'bg-yellow-400 text-gray-900'
														: 'text-gray-800',
													'block px-4 py-2 text-sm',
												)}
											>
												For Companies
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? 'bg-yellow-400 text-gray-900'
														: 'text-gray-800',
													'block px-4 py-2 text-sm',
												)}
											>
												For Investors
											</a>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</li>
				<li className="p-4">Banking</li>
				<li className="p-4">Company</li>
				<li className="p-4">Resources</li>
				<li className="p-4">
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-yellow-400 text-sm font-medium text-gray-900 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-300 focus:ring-[#00df9a]">
								Account
								<ChevronDownIcon
									className="-mr-1 ml-2 h-5 w-5"
									aria-hidden="true"
								/>
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-yellow-400 ring-1 ring-black ring-opacity-5 divide-y divide-[#00df9a] focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? 'bg-green-100 text-gray-900'
														: 'text-gray-900',
													'block px-4 py-2 text-sm',
												)}
											>
												Edit
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? 'bg-green-100 text-gray-900'
														: 'text-gray-900',
													'block px-4 py-2 text-sm',
												)}
											>
												Duplicate
											</a>
										)}
									</Menu.Item>
								</div>
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? 'bg-green-100 text-gray-900'
														: 'text-gray-900',
													'block px-4 py-2 text-sm',
												)}
											>
												Archive
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? 'bg-green-100 text-gray-900'
														: 'text-gray-800',
													'block px-4 py-2 text-sm',
												)}
											>
												Move
											</a>
										)}
									</Menu.Item>
								</div>
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? 'bg-green-100 text-gray-900'
														: 'text-gray-800',
													'block px-4 py-2 text-sm',
												)}
											>
												Share
											</a>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? 'bg-green-100 text-gray-900'
														: 'text-gray-800',
													'block px-4 py-2 text-sm',
												)}
											>
												Add to favorites
											</a>
										)}
									</Menu.Item>
								</div>
								<div className="py-1">
									<Menu.Item disabled>
										{({ active }) => (
											<a
												href="#"
												className={classNames(
													active
														? 'bg-green-100 text-gray-900'
														: 'text-gray-800',
													'block px-4 py-2 text-sm',
												)}
											>
												Delete
											</a>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
