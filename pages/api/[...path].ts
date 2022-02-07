import Cookies from 'cookies';
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
  return new Promise((resolve) => {
    const cookies = new Cookies(req, res);

    const accessToken = cookies.get('access_token');
    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    req.headers.cookie = '';

    proxy.web(req, res, { target: process.env.API_URL, changeOrigin: true, selfHandleResponse: false });
    proxy.once('proxyRes', () => {
      resolve(true);
    });
  });
}