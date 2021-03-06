/**
 * Internal dependencies
 */
import {
	getHistory,
	getPersistedQuery,
	getSearchWords,
	getNewPath,
} from '../index';

describe( 'getPersistedQuery', () => {
	beforeEach( () => {
		getHistory().push(
			getNewPath(
				{
					filter: 'advanced',
					product_includes: 127,
					period: 'year',
					compare: 'previous_year',
					after: '2018-02-01',
					before: '2018-01-01',
					interval: 'day',
					search: 'lorem',
				},
				'/',
				{}
			)
		);
	} );

	it( "should return an empty object it the query doesn't contain any time related parameters", () => {
		const query = {
			filter: 'advanced',
			product_includes: 127,
		};
		const persistedQuery = {};

		expect( getPersistedQuery( query ) ).toEqual( persistedQuery );
	} );

	it( 'should return time related parameters', () => {
		const query = {
			filter: 'advanced',
			product_includes: 127,
			period: 'year',
			compare: 'previous_year',
			after: '2018-02-01',
			before: '2018-01-01',
			type: 'bar',
			interval: 'day',
		};
		const persistedQuery = {
			period: 'year',
			compare: 'previous_year',
			after: '2018-02-01',
			before: '2018-01-01',
			type: 'bar',
			interval: 'day',
		};

		expect( getPersistedQuery( query ) ).toEqual( persistedQuery );
	} );

	it( 'should get the query from getQuery() when none is provided in the params', () => {
		const persistedQuery = {
			period: 'year',
			compare: 'previous_year',
			after: '2018-02-01',
			before: '2018-01-01',
			interval: 'day',
		};

		expect( getPersistedQuery() ).toEqual( persistedQuery );
	} );
} );

describe( 'getSearchWords', () => {
	it( 'should get the search words from a query object', () => {
		const query = {
			search: 'lorem,dolor sit',
		};
		const searchWords = [ 'lorem', 'dolor sit' ];

		expect( getSearchWords( query ) ).toEqual( searchWords );
	} );

	it( 'should parse `%2C` as commas', () => {
		const query = {
			search: 'lorem%2Cipsum,dolor sit',
		};
		const searchWords = [ 'lorem,ipsum', 'dolor sit' ];

		expect( getSearchWords( query ) ).toEqual( searchWords );
	} );

	it( 'should return an empty array if the query has no `search` property', () => {
		const query = {};
		const searchWords = [];

		expect( getSearchWords( query ) ).toEqual( searchWords );
	} );

	it( 'should use the persisted query when it receives no params', () => {
		const searchWords = [ 'lorem' ];

		expect( getSearchWords() ).toEqual( searchWords );
	} );

	it( 'should throw an error if the param is not an object', () => {
		expect( () => getSearchWords( 'lorem' ) ).toThrow( Error );
	} );

	it( 'should throw an error if the `search` property is not a string', () => {
		const query = {
			search: new Object(),
		};

		expect( () => getSearchWords( query ) ).toThrow( Error );
	} );
} );

describe( 'getNewPath', () => {
	it( 'should have default page as "wc-admin"', () => {
		const path = getNewPath( {}, '', {} );

		expect( path ).toEqual( 'admin.php?page=wc-admin&path=' );
	} );

	it( 'should override default page when page parameter is specified', () => {
		const path = getNewPath( {}, '', {}, 'custom-page' );

		expect( path ).toEqual( 'admin.php?page=custom-page&path=' );
	} );

	it( 'should override default page by query parameter over page parameter', () => {
		const path = getNewPath(
			{
				page: 'custom-page',
			},
			'',
			{},
			'default-page'
		);

		expect( path ).toEqual( 'admin.php?page=custom-page&path=' );
	} );
} );
