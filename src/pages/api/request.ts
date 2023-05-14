// @ts-ignore
import {NextApiRequest, NextApiResponse} from "next";

import RequestData from '../../types/request/index';

import request from "../../request.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RequestData>
) {
  res.status(200).json(request)
}
