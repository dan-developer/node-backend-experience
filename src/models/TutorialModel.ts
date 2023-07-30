import {Default, Format, Property, Required} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";

@Model()
export class TutorialModel {
  @ObjectID("id")
  _id: string;

  @Property()
  @Required()
  title: string;

  @Property()
  @Required()
  text: string;

  @Format("date-time")
  @Default(Date.now)
  dateCreation: Date = new Date();
}
