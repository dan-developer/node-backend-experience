import {Description, Name, Property, Required} from "@tsed/schema";
import {Model} from "@tsed/mongoose";

@Model()
export class TutorialModel {
  @Name("id")
  _id: string;

  @Property()
  @Required()
  @Description("The title of the tutorial")
  title: string;

  @Property()
  @Required()
  @Description("The text (or body) of the tutorial")
  text: string;
}
