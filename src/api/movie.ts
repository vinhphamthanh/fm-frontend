import { createService } from '../utils/services';
import { ApiType } from '../types/General';

export const shareMovie = createService(ApiType.SHARE, 'POST')
