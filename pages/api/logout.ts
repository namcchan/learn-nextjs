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
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'method not supported' });
  }

  const cookies = new Cookies(req, res);
  cookies.set('access_token', '');

  res.status(200).json({
    message: 'success',
  });
}
