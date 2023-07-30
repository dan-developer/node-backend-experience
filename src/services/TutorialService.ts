import {Inject, Injectable} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";
import {TutorialModel} from "../models/TutorialModel";

@Injectable()
export class TutorialService {
    @Inject(TutorialModel)
    private Tutorial: MongooseModel<TutorialModel>;

    /**
     * Find a TutorialModel by his ID.
     * @param id
     * @returns {undefined|TutorialModel}
     */
    async find(id: string): Promise<TutorialModel | null> {
        return await this.Tutorial.findById(id).exec();
    }

    async save(tutorial: TutorialModel) {
        const tutorialModel = new this.Tutorial(tutorial);
        await tutorialModel.validate();
        return tutorialModel;
    }

    /**
     * Delete a TutorialModel by ID.
     * @param id
     */
    async remove(id: string): Promise<void> {
        await this.Tutorial.findByIdAndDelete(id).exec();
    }
}
