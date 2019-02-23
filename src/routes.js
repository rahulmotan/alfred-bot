import { WebClient } from '@slack/client';
import config from 'config';
import eventHandler from './events';


const slackConfig = config.get('slack');
const token = slackConfig.get('alfredBot')
  .get('botToken');

console.log(token);

const web = new WebClient(token);

module.exports = (app) => {

  app.post('/api/command/test', createRequest);
  app.post('/api/events', eventHandler);

};

const createRequest = async (req, res) => {

  const { channel_id } = req.body;
  const { user_id } = req.body;
  const {channel_name} = req.body;
  let bot_res = {

  };
  if(channel_name === 'directmessage'){

  }else{

  }
  console.log(req.body);
  console.log(channel_id);


  await web.chat.postMessage({
    channel: user_id,
    text: 'I am listening.',
    as_user: true,
    token: token
  });
  res.sendStatus(200);
};



