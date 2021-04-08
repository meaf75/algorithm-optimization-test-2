  
import express from 'express';
import { CustomError } from '../../types/CustomError';
import { GetPartitionIdx } from '../../application/use-cases/get-partition-idx';

export const IndexPartitionController = {
    post: async(req: express.Request, res: express.Response) => {
        try {            
            const idx = GetPartitionIdx(req.body).execute();

            return res.status(200).json({data: idx})
        } catch (error) {
            const errorResponse : CustomError = error;

            return res.status(errorResponse.code).json({error: errorResponse.message})
        }
    },
}