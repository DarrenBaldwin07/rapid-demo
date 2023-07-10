// @generated automatically by Rapid-web (https://rapid.cincinnati.ventures). DO NOT CHANGE OR EDIT THIS FILE!

export interface Handlers {
	queries: {
		"test2": {
  			output: number
  			type: 'get'
  			isDynamic: false
		},

		test_test2__id_: {
  			path: string
  			output: any
  			type: 'get'
  			isDynamic: false
		},

		_param__index: {
  			path: string
  			output: any
  			type: 'get'
  			isDynamic: false
		},

		_param__todo: {
  			path: string
  			output: any
  			type: 'get'
  			isDynamic: false
		},

		_param___id_: {
  			path: [string, string]
  			output: any
  			type: 'get'
  			isDynamic: false
		},

		_param__nest_dir: {
  			output: any
  			type: 'get'
  			isDynamic: false
		},

		"route": {
  			output: any
  			type: 'get'
  			isDynamic: false
		},

		"todo": {
  			output: any
  			type: 'query'
  			isDynamic: false
		},
	},
	mutations: {
		"helloWorld": {
  			output: string
  			type: 'mutation'
  			isDynamic: false
		}

		"lolRoute": {
  			input: number
  			output: string
  			type: 'mutation'
  			isDynamic: false
		}
	},
}

export const routes = {
	"helloWorld": {
		url: '/test/',
		type: 'mutation',
	},
	"test2": {
		url: '/test/test2/',
		type: 'get',
	},
	test_test2__id_: {
		url: '/test/test2/_id_',
		type: 'get',
	},
	"lolRoute": {
		url: '/',
		type: 'mutation',
	},
	_param__index: {
		url: '/_param_/',
		type: 'get',
	},
	_param__todo: {
		url: '/_param_/todo',
		type: 'get',
	},
	_param___id_: {
		url: '/_param_/_id_',
		type: 'get',
	},
	_param__nest_dir: {
		url: '/_param_/nest/dir',
		type: 'get',
	},
	"route": {
		url: '/_param_/nest/',
		type: 'get',
	},
	"todo": {
		url: '/todo',
		type: 'query',
	},
} as const

export type TestAlias2 = number;