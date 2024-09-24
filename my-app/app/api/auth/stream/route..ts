import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";

const CreateStreamSchema = z.object({ 
    creatorId: z.string(),
    url: z.string(),
});

export async function POST(req: NextRequest) {
   try {
    const data = CreateStreamSchema.parse(await req.json());
    const isYTStream = YT_REGEX.test(data.url);
   } catch(e) { 
    if (!isYTStream) {
      return new Response("Invalid URL", { status: 411 });
    }
}

const extractedID = data.url.split("?v=")[1];

   await prismClient.stream.create({
    data: {
        userId: data.creatorId,
        url: data.url
        extractedID,
        type: "youtube"
    }
   });
} catch(e) {
   return NextResponse.json({
    message: "Error while adding stream",
   },{
    status: 411
   })
}
