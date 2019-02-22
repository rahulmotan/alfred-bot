import express from 'express';

import { log } from './utils';

const router = new express.Router();

router.post('/api/command/report', async (req, res) => {
  try {
    const slackReqObj = req.body;
    let reportsList = [{
      text: 'Report 1',
      value: 1
    }, {
      text: 'Report 2',
      value: 2
    }];

    const response = {
      response_type: 'in_channel',
      channel: slackReqObj.channel_id,
      text: 'Hello :slightly_smiling_face:',
      attachments: [{
        text: 'What report would you like to get?',
        fallback: 'What report would you like to get?',
        color: '#2c963f',
        attachment_type: 'default',
        callback_id: 'report_selection',
        actions: [{
          name: 'reports_select_menu',
          text: 'Choose a report...',
          type: 'select',
          options: reportsList,
        }],
      }],
    };
    return res.json(response);
  } catch (err) {
    log.error(err);
    return res.status(500)
      .send('Something blew up. We\'re looking into it.');
  }
});

export default router;
