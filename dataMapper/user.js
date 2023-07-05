const client = require('../client');

const user = {

    updateUserFirstnameAndLastname: async (firstname, lastname, user_id) => {

        const query = `
            UPDATE "user" 
            SET user_firstname = $1, user_lastname = $2
            WHERE user_id = $3;
        `;
        const values = [
            firstname,
            lastname,
            user_id
        ];

        const update = await client.query(query, values);
    },

    updateUserBiography: async (biography, user_id) => {
        const query = `
            UPDATE "user" 
            SET user_biography = $1
            WHERE user_id = $2;
        `;

        const values = [
            biography,
            user_id
        ];

        const update = await client.query(query, values);
    },

    updateUserPicture: async (bddPath, user_id) => {

        const query = `
            UPDATE "user" 
            SET user_picture = $1
            WHERE user_id = $2;
        `;

        const values = [
            bddPath,
            user_id
        ];

        const update = await client.query(query, values);
    },

    addUserNewSkill: async (skill_name, skill_description, user_username) => {

        const query = `
            INSERT INTO skill(
                skill_name,
                skill_description,
                skill_user_username
            )VALUES(
                $1,
                $2,
                $3
            )
        `;

        const values = [
            skill_name,
            skill_description,
            user_username
        ];

        const addSkill = await client.query(query, values);

    },

    updateUserSkill: async (skill_name, skill_description, user_username, skill_id) => {

        const query = `
            UPDATE skill 
            SET skill_name = $1, skill_description = $2, skill_user_username = $3
            WHERE skill_id = $4;
        `;

        const values = [
            skill_name,
            skill_description,
            user_username,
            skill_id
        ];

        const update = await client.query(query, values);
    },

    addUserProject: async (project_name, project_link, user_username, bddPath) => {

        const query = `
        
            INSERT INTO project(
                project_name,
                project_link,
                project_user_username,
                project_picture
            )VALUES(
                $1,
                $2,
                $3,
                $4
            )
        `;

        const values = [
            project_name,
            project_link,
            user_username,
            bddPath
        ];

        const addProject = await client.query(query, values);
    },

    updateUserProjectWithPicture: async (project_name, project_link,  bddPath, project_id) => {
        const query = `
            UPDATE project 
            SET project_name = $1, project_link = $2, project_picture = $3
            WHERE project.project_id = $4;
        `;

        const values = [
            project_name, 
            project_link,  
            bddPath, 
            project_id
        ];

        const update = await client.query(query, values);
    },

    updateUserProjectWithoutPicture: async (project_name, project_link, project_id) => {
        const query = `
        UPDATE project 
        SET project_name = $1, project_link = $2
        WHERE project_id = $3;
        `;

        const values = [
            project_name, 
            project_link,  
            project_id
        ];

        const update = await client.query(query, values);
    },

    updateUserContact: async (use_mail, use_phone, user_username) =>  {

        const query = `
        UPDATE "user" 
        SET user_mail = $1, user_phone = $2
        WHERE user_username = $3;
        `;

        const values = [
            use_mail, 
            use_phone,  
            user_username
        ];

        const update = await client.query(query, values);
    },

}

module.exports = user;