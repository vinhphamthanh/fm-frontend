import { ApiType } from '../types/General';
import { createService } from '../utils/services';

export const shareMovie = createService(ApiType.SHARE, 'POST')
export const fetchMovie = createService(ApiType.FETCH)