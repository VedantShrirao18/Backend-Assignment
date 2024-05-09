const pool = require('../../db');
const queries = require('./queries');

const addAssistant = (req, res) => {
    const { name, mobile, email, salary, city, country, department, role } = req.body;

    pool.query(queries.addAssistant, [name, mobile, email, salary, city, country, department, role], (error, results) => {
        if (error) {
            if (error.code === '23505' && error.constraint === 'assistants_email_key') {
                return res.status(400).send('Email already exists');
            }
            console.error('Error executing query:', error);
            return res.status(500).send('Internal Server Error');
        }
        const id = results.rows[0].id;
        return res.status(201).send(`Assistant added successfully of id : ${id}`);
    });
}

const getAssistantById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAssistantById, [id], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).send('Internal Server Error');
        }
        if (results.rows.length === 0) {
            return res.status(404).send('Assistant not found');
        }
        return res.status(200).json(results.rows);
    });
}

const updateAssistant = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getAssistantById, [id], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).send('Internal Server Error');
        }

        if (results.rows.length === 0) {
            return res.status(404).send('Assistant not found');
        }

        pool.query(queries.updateAssistant, [name, id], (error) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).send('Internal Server Error');
            }
            return res.status(200).send('Assistant updated successfully');
        });
    });
}

const removeAssistant = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAssistantById, [id], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).send('Internal Server Error');
        }

        if (results.rows.length === 0) {
            return res.status(404).send('Assistant not found');
        }

        pool.query(queries.removeAssistant, [id], (error) => {
            if (error) {
                console.error('Error executing query:', error);
                return res.status(500).send('Internal Server Error');
            }
            return res.status(200).send('Assistant removed successfully');
        });
    });
}

module.exports = {
    getAssistantById,
    addAssistant,
    updateAssistant,
    removeAssistant,
};
