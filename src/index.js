import m from "mithril";
import zoomSdk from "@zoom/appssdk";

async function configureApp() {
    const configureApp = await zoomSdk.config(
        {
            popoutSize: {width: 480, height: 360},
            capabilities: ["shareApp"]
        }
    )

    const response = await httpGet("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
    let timeStr = "";

    if(response !== undefined){
        timeStr = response[utc_datetime];
    }

    m.render(document.body, "browser version: " + configureApp.browserVersion + " || " + timeStr);
    
}

async function httpGet(theUrl){
    //http://worldtimeapi.org/api/timezone/America/Los_Angeles"
    var response = await fetch(url);
    if(response.ok){
        return response.json
    }
    return undefined;
}


configureApp();





