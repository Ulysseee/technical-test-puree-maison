import { defineConfig } from 'vite'

export default ({ mode }) => {
	return defineConfig({
		server: {
			port: '1234',
			https: false,
			open: true,
			host: true,
			hmr: { port: '1234' }
		},
		publicDir: true,
		resolve: {
			alias: [
				{ find: '@scripts', replacement: '/src/scripts' },
				{ find: '@styles', replacement: '/src/styles' },
				{ find: '@utils', replacement: '/src/utils' }
			]
		},
		preprocessorOptions: {
			scss: {
				sassOptions: {
					outputStyle: 'compressed'
				}
			}
		}
	})
}
