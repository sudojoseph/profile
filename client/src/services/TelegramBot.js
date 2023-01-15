import Telegram from 'telegram-send-message';

export class Bot {
    constructor() {
        this.bot = Telegram;
    }

    sendMessageToBot(message) {
        const token = '5837388305:AAGptcWOmJkPK4fLmgWNuY8runtZppgWlZc';
        const CHAT_ID = 1174147136;
        Telegram.setToken(process.env.REACT_APP_TELEGRAM_TOKEN);
        Telegram.setRecipient(CHAT_ID);
        Telegram.setMessage(message);
        Telegram.send();
    }
}