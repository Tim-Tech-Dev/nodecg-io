/**
 * This file was automatically generated by json-schema-to-typescript
 * using the schema at https://docs.streamelements.com/docs/connecting-via-websocket.
 */

export interface StreamElementsEvent {
    /**
     * StreamElements hexadecimal Event ID
     */
    _id: string;
    /**
     * StreamElements hexadecimal Channel ID
     */
    channel: string;
    /**
     * Event type
     */
    type: "cheer" | "follow" | "host" | "raid" | "subscriber" | "tip";
    /**
     * Event provider
     */
    provider: "twitch" | "youtube" | "facebook";
    flagged: boolean;
    data: {
        /**
         * StreamElements hexadecimal tip ID
         */
        tipId?: string;
        /**
         * Twitch username
         */
        username: string;
        /**
         * Twitch channel ID
         */
        providerId?: string;
        /**
         * Twitch username case sensitive plus regional characters if provided
         */
        displayName: string;
        /**
         * Amount of currency in tip, months in subs, hosting/raiding viewers, bits in cheer
         */
        amount: number;
        /**
         * Current months streak (subs only)
         */
        streak?: number;
        /**
         * Subscriber tier (subs only)
         */
        tier?: "1000" | "2000" | "3000" | "prime";
        /**
         * true if the sub was a gift (subs only)
         */
        gifted: boolean;
        /**
         * The sender of a gifted sub (subs only)
         */
        sender?: string;
        /**
         * Currency symbol (tips)
         */
        currency?: string;
        /**
         * User provided message
         */
        message: string;
        quantity?: number;
        /**
         * Redeemed items
         */
        items: unknown[];
        /**
         * URI of user avatar
         */
        avatar: string;
        [k: string]: unknown;
    };
    /**
     * Event creation date and time
     */
    createdAt: string;
    /**
     * Event update date and time
     */
    updatedAt: string;
    [k: string]: unknown;
}