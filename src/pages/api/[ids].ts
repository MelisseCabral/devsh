import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const {
      query: { ids }
    } = req;

    // Validations.
    const isValid = Array(ids).map((id) => String(id).match(/^[0-9]+$/));
    if (!isValid) throw res.status(500).json({ error: 'The ids must be an array of numbers!' });

    return res.status(200).json(ids);
  } catch (error) {
    const err = error instanceof Error ? error : new Error('Internal error!');
    return res.status(500).json(err.message);
  }
};

export default handler;
