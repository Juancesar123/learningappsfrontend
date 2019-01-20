// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			header: {
				self: {},
				items: [
				]
			},
			aside: {
				self: {},
				items: [
					{
						title: 'Dashboard',
						desc: 'Some description goes here',
						root: true,
						icon: 'flaticon-line-graph',
						page: '/',
						badge: {type: 'm-badge--danger', value: '2'},
						translate: 'MENU.DASHBOARD'
					},
					{section: 'Master Data'},
					{
						title: 'Video Pembelajaran',
						root: true,
						icon: 'flaticon-youtube',
						page: '/builder'
					},
					{
						title: 'Master Data',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-layers',
						submenu: [
							{
								title: 'Data User',
								page: '/metronic/accordion'
							},
							{
								title: 'Data Soal',
								page: '/metronic/accordion'
							},
							{
								title: 'Data Peserta',
								page: '/metronic/sticky-form-actions'
							},
							{
								title: 'Data Kategori',
								page: '/metronic/forms'
							},
							{
								title: 'Data Sub Kategori',
								page: '/metronic/forms'
							}
						]
					},
					{section: 'Transaksi'},
					{
						title: 'Transaksi Masuk',
						bullet: 'dot',
						icon: 'flaticon-business',
						root: true,
						submenu: [
							{
								title: 'Acc Pembayaran',
								page: '/ecommerce/customers'
							},
							{
								title: 'Riwayat Transaksi',
								page: '/ecommerce/orders'
							},
						]
					},
					{section: 'Reporting'},
					{
						title: 'Transaksi Masuk',
						root: true,
						icon: 'flaticon-diagram',
						page: '/builder'
					},
					{
						title: 'Peserta',
						root: true,
						icon: 'flaticon-diagram',
						page: '/builder'
					},
					{
						title: 'Materi',
						root: true,
						icon: 'flaticon-diagram',
						page: '/builder'
					},
					// {
					// 	title: 'User Management',
					// 	root: true,
					// 	bullet: 'dot',
					// 	icon: 'flaticon-user',
					// 	page: '/user-management'
					// },
					// {
					// 	title: 'Audit Log',
					// 	root: true,
					// 	bullet: 'dot',
					// 	icon: 'flaticon-interface-5',
					// 	page: '/audit-log'
					// },
				]
			}
		};
	}
}
