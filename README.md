# ECHO BOT JS

This is a basic example of a bot integrated with PhoneMyBot (https://www.phonemybot.com) from Interactive Media S.p.A.

The bot just replies to a message with the same. You can integrate this bot with a channel created in PhoneMyBot though, so you can see how the integration works.

The chatbot example is provided 'as-is' with no warranty and for test only.

You need to create an account on PhoneMyBot first, and configure the `.config.js` file with:

* the security token provided with your PhoneMyBot channel
* your security token, as you configured it in the control panel associated with your chatbot
* the port associated with the echo-bot service.

Please make sure you setup your network to serve an url for the echo-bot service that corresponds to the url that you configured for your chatbot in PhoneMyBot.

Then: 

1. Run ```npm install``` to install the required node packages
2. Run the app with  ```npm start```

That's it, and you are ready to go to test the echo-bot with PhoneMyBot.

Next steps:

* this basic example doesn't implement session handling. You should if you want to implement a real bot integration
* you should integrate the bot with some conversational engine, so that the bot provides more meaningful answers
* learn how to implement outbound calls and call transfer (https://wiki.phonemybot.com/en/key-concepts/telephony)
* learn how to receive transcriptions of user's voice message based on context (https://wiki.phonemybot.com/en/etc/context-list)

If anything is missing or wrong please inform us writing to phonemybot@imnet.com
