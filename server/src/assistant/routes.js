const {Router} = require("express")
const controller = require("./controller")

const router = Router();

router.post("/",controller.addAssistant);
router.get("/:id",controller.getAssistantById);
router.put("/:id",controller.updateAssistant);
router.delete("/:id",controller.removeAssistant)

module.exports = router;