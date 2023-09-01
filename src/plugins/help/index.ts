import { PluginInit } from 'src/types/plugin.js';
import { getCommands, getGlobalMessageHandles } from '../../lib/command.js';

const init: PluginInit = (app) => {
  console.log('help loaded!');
  app.registCommand({
    chat_type: 'all',
    command: 'help',
    handle: (App, message) => {
      let help_text = `OoO这里是${App.config?.bot_name}的帮助：`;
      // eslint-disable-next-line guard-for-in
      for (const command in getCommands()) {
        help_text += `\n${App.config?.command_style}${command} : ${getCommands()[command].description}`;
      }
      const glh = getGlobalMessageHandles();
      if (glh?.length) {
        help_text += `\n-----------\n有 ${glh?.length} 个消息监听钩子，分别用于：`;
        for (const h of glh) {
          help_text += `\n${h.description}`;
        }
      }
      App.bot?.sendMessage(message.chat.id, help_text);
    },
    description: '显示帮助',
  });
}

export { init };