import {Inject, Injectable} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";
import {TutorialModel} from "../models/TutorialModel";


@Injectable()
export class TutorialService {
    @Inject(TutorialModel) private model: MongooseModel<TutorialModel>;

    async save(obj: TutorialModel) {
        const doc = new this.model(obj);
        await doc.save();
        return doc
    }

    async find(query: any) {
        const list = await this.model.find(query).exec();
        return list;
    }

    async findByID(id: string) {
        const doc = await this.model.findById(id).exec();
        return doc;
    }

    async delete(id: string) {
        const doc = await this.model.findByIdAndDelete(id).exec();
        return doc;
    }
}
