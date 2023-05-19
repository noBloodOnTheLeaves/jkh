// @ts-ignore
import {NextApiRequest, NextApiResponse} from "next";

import RequestData from '../../types/request/index';

import request from "../../request.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RequestData>
) {
  const addId = request.map((row) => {
    // @ts-ignore
    row.id = Math.floor(Math.random() * (201 - 1 + 1)) + 1;

    return row;
  })
  res.status(200).json(addId)
}
