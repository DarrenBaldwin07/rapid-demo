// @generated automatically by Rapid-web (https://rapid.cincinnati.ventures). DO NOT CHANGE OR EDIT THIS FILE!

export interface Handlers {
	queries: {
		test_index: {
  			output: any
  			type: 'get'
  			isDynamic: false
		},

		"test2": {
  			output: any
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
		index: {
  			input: number
  			output: any
  			type: 'mutation'
  			isDynamic: false
		}
	},
}

export const routes = {
	test_index: {
		url: '/test/',
		type: 'get',
	},
	"test2": {
		url: '/test/test2/',
		type: 'get',
	},
	test_test2__id_: {
		url: '/test/test2/_id_',
		type: 'get',
	},
	index: {
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

export type RapidOutput = string;

export type Testy = number;