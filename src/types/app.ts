import TelegramBot from 'node-telegram-bot-api';
import { YamlConfig } from './config.js';
import { registCommand, registGlobalMessageHandle, registReplyHandle } from '@/lib/command.js';

export interface App {
  config?: YamlConfig;
  bot?: TelegramBot;

  registCommand: typeof registCommand,
  registGlobalMessageHandle: typeof registGlobalMessageHandle,
  registReplyHandle: typeof registReplyHandle,

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}