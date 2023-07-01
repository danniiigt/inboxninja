import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    res.status(405).json({ message: "Method not allowed" });
  }
  const user = await getCurrentUser(req, res);

  if (!user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const { id }: any = req.query;

  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        verified: true,
      },
    });

    let safeUser = {
      ...user,
    };

    safeUser.hashedPassword = null;
    return res.status(201).json(safeUser);
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "An error ocurred while updating the user" });
  }
}
