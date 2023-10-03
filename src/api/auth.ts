import { createService } from '../utils/services';
import { ApiType } from '../types/General';

export const login = createService(ApiType.LOGIN, 'POST')