import client from '../../../lib/server/client';
import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '../../../lib/server/withHandler';
import { withApiSession } from '../../../lib/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { code } = req.body;

  if (code === null) return res.status(400).json({ ok: false });

  const user = await client.user.findUnique({
    where: {
      code,
    },
  });

  if (!user) return res.status(403).json({ ok: false });

  req.session.user = {
    id: user.id,
  };

  await req.session.save();

  console.log(req.session);

  return res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({
    methods: ['POST'],
    handler,
    isPrivate: false,
  }),
);
