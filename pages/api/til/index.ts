import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '../../../lib/server/withHandler';
import client from '../../../lib/server/client';
import { withApiSession } from '../../../lib/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'GET') {
    const tils = await client.tIL.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      tils,
    });
  }

  if (req.method === 'POST') {
    const {
      body: { title },
      session: { user },
    } = req;
    await client.tIL.create({
      data: {
        title,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ['GET', 'POST'],
    handler,
  }),
);
