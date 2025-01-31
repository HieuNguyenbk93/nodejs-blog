const Course = require('../models/Course');

class SiteController {

    // [GET] /home
    index (req, res) {
        try {
            const getData = async function () {
                const data = await Course.find({});
                console.log(data);
                // res.json(data);
                const coursesData = data.map(course => course.toObject());
                res.render('home', {
                    title: 'Danh sách khóa học',
                    courses: coursesData
                });
            }
            getData();
        }
        catch (err) {
            res.status(400).json({error: 'ERROR!!!'});
        }
    }

    course(req, res) {
        const slugParam = req.params.slug;
        const getData = async function () {
            const data = await Course.findOne({slug: slugParam});
            console.log(data);
            res.render('course', {
                course: data.toObject(),
            });
        }
        getData();
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;