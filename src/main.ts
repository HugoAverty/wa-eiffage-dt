/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.room.onEnterLayer("roofZone").subscribe(() => {
        WA.room.hideLayer("Roof/roof1");
        WA.room.hideLayer("Roof/roof2");
        WA.room.hideLayer("Roof/roof3");
    });

    WA.room.onLeaveLayer("roofZone").subscribe(() => {
        WA.room.showLayer("Roof/roof1");
        WA.room.showLayer("Roof/roof2");
        WA.room.showLayer("Roof/roof3");
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
