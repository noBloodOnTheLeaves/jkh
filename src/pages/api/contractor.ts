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
    row.id = new Date().getTime().toString() + Math.floor(Math.random()*1000000);

    return row;
  })
  res.status(200).json(addId)
}
