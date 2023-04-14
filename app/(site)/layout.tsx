import Link from 'next/link';
import '../globals.css';
import { getPages } from '@/sanity/sanity-utils';

export const metadata = {
	title: "Goody's Potfolio",
	description: 'My Frontend Dveloper Portfolio Page',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pages = await getPages();

	console.log('ppp', pages);

	return (
		<html lang='en'>
			<body className='max-w-3xl mx-auto py-10'>
				<header className='flex items-center justify-between'>
					<Link
						href='/'
						className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'
					>
						Goody
					</Link>
					<div className='flex items-center gap-5 text-sm text-gray-600'>
						{pages.map((page) => (
							<Link
								href={`/${page.slug}`}
								key={page._id}
								className='hover:underline'
							>
								{page.title}
							</Link>
						))}
					</div>
				</header>
				<main className='py-20'>{children}</main>
			</body>
		</html>
	);
}
