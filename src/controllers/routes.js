import { Router } from 'express';

import { addDemoHeaders } from '../middleware/demo/headers.js';

import {
    catalogPage,
    courseDetailPage
} from './catalog/catalog.js';

import {
    homePage,
    aboutPage,
    demoPage,
    testErrorPage
} from './index.js';

import {
    facultyPage,
    facultyDetailPage
} from './faculty/faculty.js';

const router = Router();

// Home and basic pages
router.get('/', homePage);
router.get('/about', aboutPage);

// Course catalog routes
router.get('/catalog', catalogPage);
router.get('/catalog/:courseId', courseDetailPage);

// Faculty routes
router.get('/faculty', facultyPage);
router.get('/faculty/:facultyId', facultyDetailPage);

// Demo page with special middleware
router.get('/demo', addDemoHeaders, demoPage);

// Route to trigger a test error
router.get('/test-error', testErrorPage);

export default router;