import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import img from '../img/download.png'

function Home(props) {
	const { t } = useTranslation('common')

	return (
		<>
			<div className={styles.container}>
				<Link href="/" locale={'en'}>
					<button>en</button>
				</Link>
				<Link href="/" locale={'ru'}>
					<button>ru</button>
				</Link>
				<Link href="/" locale={'ua'}>
					<button>ua</button>
				</Link>
			</div>
			<div>
				{t('hi')}
				<Image src={img} alt="hi" height={200} width={200}/>
				{/*<img src="" alt="al"/>*/}
			</div>
		</>
	)
}

export const getStaticProps = async ({ locale }) => ({
	props: {
		...await serverSideTranslations(locale, ['common']),
	},
})

export default Home
