import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN!,
})

export const POST = async (req: Request) => {
    const { imageUrl, theme, room } = await req.json()

    const output = await replicate.run(
        "alaradirik/t2i-adapter-sdxl-depth-midas:8a89b0ab59a050244a751b6475d91041a8582ba33692ae6fab65e0c51b700328",
        {
          input: {
            image: imageUrl,
            prompt: `A photo of a ${theme} ${room}, 4k photo, highly detailed, trending on artstation`,
            // adapter_conditioning_scale: 0.78,
            // adapter_conditioning_factor:0.8,
            // guidance_scale: 8.5,
            num_inference_steps:15,
            negative_prompt: 'anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, disfigured, broken furniture, unfinished furniture, bad textures'
          }
        }
      );

    return NextResponse.json(output)
}