// External dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json()); // to support JSON bodies
router.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

// Add your routes here - above the module.exports line

router.use('/v1', require('./views/v1/_routes'));

router.get(/addAddress/, function (req, res) {
    if (req.query.radioInlineGroup === "Yes" ) {
      res.redirect('s12-contact-info-confirmation'); 
    } else {
      res.redirect('s12-contact-info-new');
    }
  });

  router.get(/recDelete/, function (req, res) {
    if (req.query.radioInlineGroup === "Yes" ) {
      res.redirect('s12-basic-details-delete-confirmation'); 
    } else {
      res.redirect('s12-basic-details');
    }
  });
  
  router.get(/newLetter/, function (req, res) {
    if (req.query.radioInlineGroup === "Yes" ) {
      res.redirect('s12-administration-new-letter-confirmation'); 
    } else {
      res.redirect('s12-administration');
    }
  });

  router.get(/newTransfer/, function (req, res) {
    if (req.query.radioInlineGroup === "Yes" ) {
      res.redirect('s12-administration-new-transfer-confirmation'); 
    } else {
      res.redirect('s12-administration');
    }
  });

  router.get(/newTrainingRecord/, function (req, res) {
    if (req.query.radioInlineGroup === "Yes" ) {
      res.redirect('s12-training-new-record-confirmation'); 
    } else {
      res.redirect('s12-training-new-record');
    }
  });
  
  router.get(/approvalsConfirm/, function (req, res) {
    if (req.query.radioInlineGroup === "Yes" ) {
      res.redirect('s12-approvals-save-changes-confirmation'); 
    } else {
      res.redirect('s12-approvals');
    }
  });
  
  router.get(/otherissuesConfirm/, function (req, res) {
    if (req.query.radioInlineGroup === "Yes" ) {
      res.redirect('s12-other-issues-save-changes-confirmation'); 
    } else {
      res.redirect('s12-other-issues');
    }
  });
  

  
module.exports = router;