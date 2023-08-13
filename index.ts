
import { BingChat } from 'bing-chat'

import "dotenv/config";
import zod from "zod";

const envSchema = zod.object({
  BING_COOKIE: zod.string(),
});

const env = envSchema.parse(process.env);


(async () => {
  const api = new BingChat({
    cookie: env.BING_COOKIE,
    debug: true,
  })

  console.log(api);

  const res = await api.sendMessage('Hello World!')
  console.log(res.text)
})()