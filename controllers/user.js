const userData = require('../dataMapper/user');

const user = {

    getIndexPage: (req, res) => {
        const user = "william";
        const params = "william";
        res.render('index', {user, params})
    },

    updateFirstnameAndLastname: async (req, res) => {

        const {firstname, lastname, user_id} = req.body;
        const updateFirstnameAndLastname = await userData.updateUserFirstnameAndLastname(firstname, lastname, user_id);
        return res.redirect('/');
    },

    updateBiography: async (req, res) => {

        const {biography, user_id} = req.body;
        const updateBiography = await userData.updateUserBiography(biography, user_id);
        return res.redirect('/');
    },

    updatePicture: async (req, res) => {
        const {user_id} = req.body;
        if (req.file){
            const bddPath = '/img/' + req.file.filename;
            const updatePicture = await userData.updateUserPicture(bddPath, user_id);
            return res.redirect('/');
        }else {
            return res.redirect('/');
        }
    },

    addNewSkill: async (req, res) => {
        const {skill_name, skill_description, user_username} = req.body
        const addNewSkill = await userData.addUserNewSkill(skill_name, skill_description, user_username);
        return res.redirect('/');
    },

    updateSkill: async (req, res) => {
        const {skill_name, skill_description, user_username, skill_id} = req.body;
        const updateSkill = await userData.updateUserSkill(skill_name, skill_description, user_username, skill_id);
        return res.redirect('/');
    },

    addProject: async (req, res) => {
        const {project_name, project_link, user_username} = req.body;
        if (req.file){
            const bddPath = '/img/' + req.file.filename;
            const updateSkill = await userData.addUserProject(project_name, project_link, user_username, bddPath);
            return res.redirect('/');
        } else {
            const bddPath = '/img/project1.jpg';
            const updateSkill = userData.addUserProject(project_name, project_link, user_username, bddPath);
            return res.redirect('/');
        }
    },

    updateProject: async (req, res) => {
        const {project_name, project_link, project_id} = req.body;
        if(req.file){
            const bddPath = '/img/' + req.file.filename;
            const updateProject = await userData.updateUserProjectWithPicture(project_name, project_link, bddPath, project_id);
            return res.redirect('/');
        }else{
            const updateProject = userData.updateUserProjectWithoutPicture(project_name, project_link, project_id);
            return res.redirect('/');
        }
    },

    updateContact: async (req, res) => {
        const {use_mail, use_phone, user_username} = req.body;
        const updateContact = await userData.updateUserContact(use_mail, use_phone, user_username);
        return res.redirect('/');
    },

}

module.exports = user;