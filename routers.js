const express = require('express');
const router = express.Router();

const user = require('./controllers/user');
const upload = require('./middleware/configMulterMiddleware');

router.get('/', user.getIndexPage);

router.post('/user/update/firstname/lastname', user.updateFirstnameAndLastname);
router.post('/user/update/biograghy', user.updateBiography);
router.post('/user/update/picture', upload.single('user_picture'), user.updatePicture);
router.post('/user/add/skill', user.addNewSkill);
router.post('/user/update/skill', user.updateSkill);
router.post('/user/add/project', upload.single('project_image'), user.addProject);
router.post('/user/update/project', upload.single('project_image'), user.updateProject);
router.post('/user/update/contact', user.updateContact);


module.exports = router;