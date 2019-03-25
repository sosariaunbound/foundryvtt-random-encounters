/**
 * @author Zach Bricker aka tokee
 * @version 0.0.1
 */

class EncounterCreator extends Application {

    constructor(app) {
        super(app);
        this.hookActorDirectory();
    }
    hookActorDirectory() {
        Hooks.on('renderActorDirectory', (app, html, data) => {

            const importButton = $(`<button class="encounter-creator-btn"><i class="fas fa-fire"></i> Generate Encounter</button>`);

            if (game.user.isGM) {
                html.find('.directory-footer').prepend(importButton);
            }
        });
    }
}



// hookActorDirectory() {
//     Hooks.on('renderActorDirectory', (app, html, data) => {
//         const importButton = $(`<button class="encounter-creator-btn"><i class="fas fa-fire"></i> Encounter Creator</button>`);
//         // slight diffrence in used buttons and layout depending on gm status

//         if (game.user.isGM) {
//             html.find('.directory-footer').append(importButton);
//         }
//     })
// }

let encounterCreator = new EncounterCreator();