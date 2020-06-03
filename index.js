const Alexa = require('ask-sdk-core')

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Bem vindo à skill olá mundo';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const OlaMundoIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && 
        handlerInput.requestEnvelope.request.intent.name === 'OlaMundo'
    },
    
    handle(handlerInput) {
        const speechText = 'Olá mundo.';
        
        return handlerInput.responseBuilder
        .speak(speechText)
        .getResponse();
    }
}

const OiMundoIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && 
        handlerInput.requestEnvelope.request.intent.name === 'OiMundo'
    },
    
    handle(handlerInput) {
        const speechText = 'Oi mundo.';
        
        return handlerInput.responseBuilder
        .speak(speechText)
        .getResponse();
    }
}

const HelpIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    
    handle(handlerInput) {
      const speechText = 'Você pode dizer oi ou olá';
      
      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
      
    }
}

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      (
        handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' || 
        handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent'
      );
    },
    
    handle(handlerInput) {
      const speechText = 'Skill cancelada';
      
      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
}

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.intent.type === 'SessionEndedRequest';
    },
    
    handle(handlerInput) {
      const speechText = 'Sessão terminada';
      
      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
}

const ErrorHandler = {
    canHandle() {
      return true;
    },
    
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`)
      const speechText = 'Houve um erro interno na skill, por favor, contate o desenvolvimento.';
      return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
    }
}

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    OlaMundoIntentHandler,
    OiMundoIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler)
  .addErrorHandlers(ErrorHandler)
  .lambda();
