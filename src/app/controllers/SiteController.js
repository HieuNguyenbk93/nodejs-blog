const Course = require('../models/Course');

class SiteController {

    // [GET] /home
    index (req, res) {
        try {
            const getData = async function () {
                const data = await Course.find({});
                // console.log(data);
                // res.json(data);
                const coursesData = data.map(course => course.toObject());
                res.render('home', {
                    title: 'TEST TITLE',
                    courses: coursesData
                });
            }
            getData();
        }
        catch (err) {
            res.status(400).json({error: 'ERROR!!!'});
        }
        
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses)
        //     } else
        //     res.status(400).json({error: 'ERROR!!!'});
        // });
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;