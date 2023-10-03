import axios from 'axios';
import { ApiType } from '../types/General';

const SERVER = 'http://localhost:4000'

export const createService = (apiType: ApiType, method = 'GET') => async (data: any) => {
	const url = createUrl(apiType)
	const defaultOpts = {
		method,
		url,
	}
	const options = ['POST'].includes(method) ? {
		...defaultOpts,
		data,
	} : defaultOpts

	try {
		const response = await axios.request(options)
		const { data, status } = response || {}

		if ([200, 201].includes(status)) {
			return data
		} else {
			console.error(response)
		}
	} catch (e) {
		console.error(e)
	}
}

const createUrl = (apiType: ApiType) => {
	switch(apiType) {
		case ApiType.LOGIN:
			return `${SERVER}/login`
		case ApiType.SHARE:
			return `${SERVER}/share`
		default:
			return SERVER
	}
}