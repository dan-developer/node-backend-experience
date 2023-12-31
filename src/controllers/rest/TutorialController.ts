import {BodyParams, Controller, Delete, Get, PathParams, Post, Put} from "@tsed/common";
import {NotFound} from "@tsed/exceptions";
import {TutorialModel} from "../../models/TutorialModel";
import {TutorialService} from "../../services/TutorialService";
import {Description, Required, Summary} from "@tsed/schema";

@Controller({
    path: "/tutorial",
})
export class TutorialController {
    constructor(private tutorialService: TutorialService) {

    }

    /**
     * Return all tutorials from database
     */
    @Get("/")
    @Summary("Return all tutorials from database")
    async getAll(): Promise<TutorialModel[]> {
        const list = await this.tutorialService.find({});
        return list;
    }

    /**
     *
     * @param {string} id
     * @returns {Promise<TutorialModel>}
     */
    @Get("/:id")
    @Summary("Return a tutorial from his ID")
    async get(@Required() @PathParams("id") id: string) {
        const tutorial = await this.tutorialService.findByID(id);
        return tutorial || new NotFound("Tutorial not found");
    }

    /**
     *
     * @param {TutorialModel} tutorial
     * @returns {Promise<TutorialModel>}
     */
    @Post("/")
    @Summary("Create a new Tutorial")
    create(@Description("Tutorial model")
         @BodyParams() @Required() tutorial: TutorialModel) {
        return this.tutorialService.save(tutorial);
    }

    @Put("/:id")
    @Summary("Update a tutorial")
    async update(@PathParams("id") @Required() id: string,
                 @BodyParams() @Required() tutorial: TutorialModel) {
        return this.tutorialService.update(id, tutorial);
    }

    /**
     *
     * @param id
     * @returns {{id: string, name: string}}
     */
    @Delete("/:id")
    @Summary("Remove a tutorial.")
    async remove(@PathParams("id") id: string): Promise<void> {
        await this.tutorialService.delete(id);
    }

}
