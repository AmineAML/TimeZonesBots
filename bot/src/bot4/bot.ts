import { Client } from '@typeit/discord';
import { DISCORD_BOT_TOKEN_AU_SYDNEY } from './config';

export async function startDiscordApp() {
    au_sydney()
}

async function au_sydney() {
    const time_zone_au_sydney_client = new Client({
        classes: [
            `${__dirname}/*.ts`, // glob string to load the classes
            `${__dirname}/*.js` // If you compile your bot, the file extension will be .js
        ],
        silent: false,
        variablesChar: ':',
        partials: ['MESSAGE', 'CHANNEL', 'USER', 'REACTION'],
    });

    await time_zone_au_sydney_client.login(DISCORD_BOT_TOKEN_AU_SYDNEY!)

    await time_zone_au_sydney_client.user!.setPresence({
        status: "online",
        activity: {
            name: `AU-Sydney`,
            type: "PLAYING"
        }
    })
}