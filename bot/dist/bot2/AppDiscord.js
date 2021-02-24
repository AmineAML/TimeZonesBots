"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const Path = tslib_1.__importStar(require("path"));
let AppDiscord = class AppDiscord {
    async onReady([message], client) {
        console.log(`Bot connected`);
        timezone(client);
    }
    async notFound(command) {
        command.channel.send(`Command not found, try \`!help\``);
    }
};
tslib_1.__decorate([
    discord_1.On("ready"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", Promise)
], AppDiscord.prototype, "onReady", null);
tslib_1.__decorate([
    discord_1.CommandNotFound(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], AppDiscord.prototype, "notFound", null);
AppDiscord = tslib_1.__decorate([
    discord_1.Discord('', {
        import: [
            Path.join(__dirname, "commands", "*.ts"),
            Path.join(__dirname, "events", "*.ts"),
            Path.join(__dirname, "commands", "*.js"),
            Path.join(__dirname, "events", "*.js")
        ]
    })
], AppDiscord);
function timezone(client) {
    const TIMEZONE_OPTIONS = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Los_Angeles',
        weekday: 'short'
    };
    const time = new Date();
    client.guilds.cache.forEach(guild => {
        guild.members.fetch(client.user.id).then((bot) => {
            bot.setNickname(time.toLocaleTimeString('en-US', TIMEZONE_OPTIONS));
        });
    });
    setTimeout(() => {
        timezone(client);
    }, 60 * 1000);
}
//# sourceMappingURL=AppDiscord.js.map