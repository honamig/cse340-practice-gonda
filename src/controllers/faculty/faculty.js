import {
    getFacultyById,
    getSortedFaculty
} from '../../models/faculty/faculty.js';

// Faculty list page
const facultyPage = (req, res) => {

    const sortBy = req.query.sort || 'name';

    const faculty = getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty,
        currentSort: sortBy
    });
};

// Individual faculty detail page
const facultyDetailPage = (req, res, next) => {

    const facultyId = req.params.facultyId;

    const faculty = getFacultyById(facultyId);

    // Handle invalid faculty IDs
    if (!faculty) {

        const err = new Error(`Faculty member ${facultyId} not found`);

        err.status = 404;

        return next(err);
    }

    res.render('faculty/detail', {
        title: faculty.name,
        faculty
    });
};

export {
    facultyPage,
    facultyDetailPage
};