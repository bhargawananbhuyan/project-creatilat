import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'

const Drawer = () => {
	const [open, setOpen] = React.useState(false)

	return (
		<Menu as='div' className='absolute top-[-1.1rem] left-[-.5rem]'>
			<Menu.Button className='px-3.5 py-1.5'>
				<FontAwesomeIcon icon={faBars} />
			</Menu.Button>
			<Transition
				as={React.Fragment}
				enter='transition ease-out duration-[1000]'
				enterFrom='transform top-[-100vh]'
				enterTo='transform top-[4.5rem]'
				leave='transition ease-in duration-[1000]'
				leaveFrom='transform top-[4.5rem]'
				leaveTo='transform top-[-100vh]'
			>
				<Menu.Items className='fixed top-[4.35rem] bg-white shadow-xl left-0 py-3.5 w-screen grid place-items z-[200]'>
					{[
						{
							title: 'Home',
							link: '/',
						},
						{
							title: 'Productos',
							link: '/productos',
						},
						{
							title: 'Paquetes',
							link: '/paquetes',
						},
						{
							title: 'Premium',
							link: '/premium',
						},
						{
							title: 'Como funciona',
							link: '/como-funciona',
						},
						{
							title: 'Contacto',
							link: '/contacto',
						},
						{
							title: 'Iniciar sesion',
							link: '/login',
						},
					].map((item, i) => (
						<Menu.Item key={i}>
							<Link href={item.link}>
								<a className='px-5 py-2.5'>{item.title}</a>
							</Link>
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default Drawer
