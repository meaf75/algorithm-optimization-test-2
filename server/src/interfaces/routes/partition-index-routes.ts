import express from 'express';
import { IndexPartitionController } from '../controllers/index-partition-controller';

/** Router of the partition index exercise */
export const RoutesPartitionIndex = (app: express.Express) => {
    app.post('/partitionindex', IndexPartitionController.post);
}