import { Listener } from "@sapphire/framework";
import { GuildMember } from "discord.js";

export class GuildMemberAddGreeting extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
            event: 'guildMemberAdd',
            once: false
        })
    }

    public override async run(member: GuildMember) {
        await member.guild.systemChannel?.send(
            `Hi ${member.user}. Welcome to the Fog City Rocketry discord server.`
        )
    }
}