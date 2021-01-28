import { SerializedError } from '@reduxjs/toolkit';

export interface SliceState {
    data?: any;
    error?: SerializedError;
    status?: RequestStatus;
}

export enum RequestStatus {
    init = 'init',
    pending = 'pending',
    fulfilled = 'fulfilled',
    rejected = 'rejected'
}
