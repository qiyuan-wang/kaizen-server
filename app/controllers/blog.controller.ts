import { Post, JsonController, Body } from "routing-controllers";
import { buildKaizen } from "../scripts/shell";

interface TagInfo {
  ref: string;
  ref_type: string;
  [index: string]: string;
}

const TargetRefType = "tag";

@JsonController("/blog/webhooks")
export class BlogWebHooksController {
  constructor() {}

  @Post("/payload")
  async session(@Body() tagInfo: TagInfo): Promise<any> {
    const { ref, ref_type: refType } = tagInfo;

    if (refType === TargetRefType) {
      console.log("it's target");
      buildKaizen();
    }

    return "ok";
  }
}
