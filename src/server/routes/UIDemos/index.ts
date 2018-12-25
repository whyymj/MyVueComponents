import * as express from 'express';
var router = express.Router();
import menu from './VueUI/Menu'
import tip from './VueUI/recordTip'
import comps from './VueUI/recordComponents'
import mock from './VueUI/Mock'
router.use('/UIDemosMenu',menu);

router.use('/UIDemosRecords',mock);
// router.use('/UIDemosTip',tip);
// router.use('/UIDemosComponent',comps);
module.exports = router;
