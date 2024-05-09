const addAssistant =  "INSERT INTO Assistants (name, mobile, email, salary, city, country, department, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id"
const getAssistantById =  "SELECT * FROM Assistants WHERE id = $1";
const updateAssistant = "UPDATE Assistants SET name = $1 WHERE id = $2"
const removeAssistant = "DELETE FROM Assistants WHERE id = $1"

module.exports = {
    addAssistant,
    getAssistantById ,
    updateAssistant,
    removeAssistant,
}