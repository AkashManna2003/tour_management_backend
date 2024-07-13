import express from 'express'
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCounts } from '../controllers/tourControllers.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

//create new tour
router.post('/',verifyAdmin,createTour)
//update tour
router.put('/:id',verifyAdmin,updateTour)
//delete tour
router.delete('/:id',verifyAdmin,deleteTour)
//getSingle tour
router.get('/:id',getSingleTour)
//getAll tour
router.get('/',getAllTour)
//get tour by search
router.get('/search/getTourBySearch',getTourBySearch)
//get featured tours
router.get('/search/getFearuredTours',getFeaturedTour)
//get tour Count
router.get('/search/getTourCount',getTourCounts)


export default router;