import * as express from 'express';
var router = express.Router();
import menu from './VueUI/Menu'


router.use('/UIMenu',menu)
module.exports = router;
