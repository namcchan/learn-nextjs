// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // Dont sent cookie to  api server
  req.headers.cookie = '';

  proxy.web(req, res, { target: process.env.API_URL, changeOrigin: true, selfHandleResponse: false });
}
