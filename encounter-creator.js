/**
 * @author Zach Bricker aka tokee
 * @version 0.0.1
 */

class EncounterCreator extends Application {

    constructor(app) {
        super(app);
        this.hookActorDirectory();
    }

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.id = "track-encounter-creator-form";
        options.template = "public/modules/encounter-creator/templates/encounter-creator.html";
        options.width = 360;
        return options;
    }

    hookActorDirectory() {
        Hooks.on('renderActorDirectory', (app, html, data) => {

            const encounterCreatorButton = $(`<button class="encounter-creator-btn"><i class="fas fa-fire"></i> Generate Encounter</button>`);

            if (game.user.isGM) {
                html.find('.directory-footer').prepend(encounterCreatorButton);
            }

            encounterCreatorButton.click(ev => {
                ev.preventDefault();
                this.render(true);
            });
        });
    }
}

let encounterCreator = new EncounterCreator();