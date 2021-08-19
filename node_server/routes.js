const [executeQueries,listIntents] = require('./dialogflow');
const router = require('express').Router();


const dummy_data = [
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [],
        "parameters": [
            {
                "prompts": [
                    "Can you tell me transaction ID of the purchase you made?"
                ],
                "name": "1b9f7325-3ed6-4a6e-b530-9c44e6b7110a",
                "displayName": "transaction-id",
                "value": "$transaction-id",
                "defaultValue": "",
                "entityTypeDisplayName": "@sys.number",
                "mandatory": true,
                "isList": false
            }
        ],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": [
                        "I've passed your request to our support team. They'll get back to you shortly."
                    ]
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [
            "SLACK"
        ],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/06a81fc4-e2ac-414c-aea6-ce42bc081d77",
        "displayName": "support.refund",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.refund",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [
            "projects/support-udtr/agent/sessions/-/contexts/support-contacts"
        ],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-contacts",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/08298dc1-7230-44cc-a944-7a621d74b098",
        "displayName": "support.contacts - context:support-contacts - comment:phone",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.contacts.phone",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-contacts",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/138fcc44-03c1-4ac1-89e6-2182f73ee70a",
        "displayName": "support.contacts.email",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.contacts.email",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": [
                        "I didn't get that. Can you say it again?",
                        "I missed what you said. Say it again?",
                        "Sorry, could you say that again?",
                        "Sorry, can you say that again?",
                        "Can you say that again?",
                        "Sorry, I didn't get that.",
                        "Sorry, what was that?",
                        "One more time?",
                        "What was that?",
                        "Say that again?",
                        "I didn't get that.",
                        "I missed that."
                    ]
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/17dc0049-2c7b-445a-883a-1ecf552673e7",
        "displayName": "Default Fallback Intent",
        "priority": 500000,
        "isFallback": true,
        "webhookState": "WEBHOOK_STATE_ENABLED",
        "action": "input.unknown",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/1e60c951-43d4-4ec0-b6ce-5431ac271c71",
        "displayName": "support.creators",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.creators",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-contacts",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/2526ea25-1664-409b-9d06-410ba56c6b6c",
        "displayName": "support.contacts.phone",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.contacts.phone",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/2c47e3e6-6e0d-4204-bb2c-a051758c1da3",
        "displayName": "support.beta",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.beta",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": [
                        "Have a look at our website. We always have some interesting offers there."
                    ]
                },
                "message": "text"
            },
            {
                "platform": "SLACK",
                "card": {
                    "buttons": [
                        {
                            "text": "Website",
                            "postback": "http://example.com/"
                        }
                    ],
                    "title": "",
                    "subtitle": "",
                    "imageUri": ""
                },
                "message": "card"
            }
        ],
        "defaultResponsePlatforms": [
            "SLACK"
        ],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/35a60eb6-1269-4581-97cd-571429a38458",
        "displayName": "support.special_offers",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.special_offers",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/36d1d8fc-51c9-48ca-93a4-9fed4c838ac8",
        "displayName": "support.about.app_name",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.about.app_name",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-contacts",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/449f3b30-7c62-433f-a368-749ef2bd6ebe",
        "displayName": "support.contacts.website",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.contacts.website",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [
            "projects/support-udtr/agent/sessions/-/contexts/support-contacts"
        ],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-contacts",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/45061ab2-94b1-4996-9f9c-46e5510369e2",
        "displayName": "support.contacts - context:support-contacts - comment:email",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.contacts.email",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [
            "projects/support-udtr/agent/sessions/-/contexts/support-contacts"
        ],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-contacts",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/5edf3c60-e45c-489d-8257-148023f72fab",
        "displayName": "support.contacts - context:support-contacts - comment:website",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.contacts.website",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/6ee08198-efc3-486d-84ce-75a8d712a591",
        "displayName": "support.about",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.about",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [
            "projects/support-udtr/agent/sessions/-/contexts/support-feedback"
        ],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-feedback",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [
            {
                "prompts": [],
                "name": "2dc9bd96-ba7e-4924-a1c7-1cab76781d9a",
                "displayName": "message",
                "value": "$message",
                "defaultValue": "",
                "entityTypeDisplayName": "@sys.any",
                "mandatory": false,
                "isList": false
            }
        ],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/8601b309-cfd9-45e5-b1ce-0b727989fb7a",
        "displayName": "support.feedback - context:support-feedback",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.feedback",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-feedback",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [
            {
                "prompts": [],
                "name": "7b98a2f8-6075-4906-a616-ba7606384827",
                "displayName": "message",
                "value": "$message",
                "defaultValue": "",
                "entityTypeDisplayName": "@sys.any",
                "mandatory": false,
                "isList": false
            }
        ],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/a1818089-6126-4f92-8fcb-238e1c675b15",
        "displayName": "support.feedback",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.feedback",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-contacts",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [
            {
                "prompts": [],
                "name": "0a194208-903c-4ca4-84d0-145424ff041a",
                "displayName": "media",
                "value": "$media",
                "defaultValue": "",
                "entityTypeDisplayName": "@media",
                "mandatory": false,
                "isList": false
            }
        ],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/ac130fbb-8eef-45f5-8b4d-e25860b32045",
        "displayName": "support.contacts.social_media",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.contacts.social_media",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [
            "projects/support-udtr/agent/sessions/-/contexts/support-contacts"
        ],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-contacts",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [
            {
                "prompts": [],
                "name": "53204190-5f24-4759-869e-03d289ad3030",
                "displayName": "media",
                "value": "$media",
                "defaultValue": "",
                "entityTypeDisplayName": "@media",
                "mandatory": false,
                "isList": false
            }
        ],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/b17f99f5-dbfe-41dc-b1e4-3c5962ef12aa",
        "displayName": "support.contacts - context:support-contacts - comment:social media",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.contacts.social_media",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-contacts",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/ba1e9950-432b-439e-8578-a8fab45decc2",
        "displayName": "support.contacts.address",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.contacts.address",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-problem",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [
            {
                "prompts": [],
                "name": "aee5190b-8817-4bc0-b710-b5aafb276f16",
                "displayName": "message",
                "value": "$message",
                "defaultValue": "",
                "entityTypeDisplayName": "@sys.any",
                "mandatory": false,
                "isList": false
            }
        ],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/c740a71c-2e78-46a5-876c-aa062373cee8",
        "displayName": "support.problem",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.problem",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [],
        "parameters": [],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/c78b8fb2-9133-447b-80fb-9acaec39cba8",
        "displayName": "support.contacts",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.contacts",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [],
        "parameters": [
            {
                "prompts": [
                    "Can you give me some more details of your issue?",
                    "Tell me more, so our support team can give you the best answer.",
                    "Please, elaborate on the issue, so support team can help you."
                ],
                "name": "74084d5e-57fd-4cf9-9964-ae234e0971fc",
                "displayName": "details",
                "value": "$details",
                "defaultValue": "",
                "entityTypeDisplayName": "@sys.any",
                "mandatory": true,
                "isList": false
            }
        ],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": [
                        "Thanks for the information! Our support team will get in touch with you shortly."
                    ]
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [
            "SLACK"
        ],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/e9a99ab3-ce2d-42a5-be0c-97a2506ae0fd",
        "displayName": "support.live_agent",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.live_agent",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    },
    {
        "inputContextNames": [
            "projects/support-udtr/agent/sessions/-/contexts/support-problem"
        ],
        "events": [],
        "trainingPhrases": [],
        "outputContexts": [
            {
                "name": "projects/support-udtr/agent/sessions/-/contexts/support-problem",
                "lifespanCount": 2,
                "parameters": {
                    "fields": {}
                }
            }
        ],
        "parameters": [
            {
                "prompts": [],
                "name": "fa85ffca-2722-4066-af30-c03d769979a7",
                "displayName": "message",
                "value": "$message",
                "defaultValue": "",
                "entityTypeDisplayName": "@sys.any",
                "mandatory": false,
                "isList": false
            }
        ],
        "messages": [
            {
                "platform": "PLATFORM_UNSPECIFIED",
                "text": {
                    "text": []
                },
                "message": "text"
            }
        ],
        "defaultResponsePlatforms": [],
        "followupIntentInfo": [],
        "name": "projects/support-udtr/agent/intents/eff9a0d7-6561-4eb7-8ac7-990f5369f71e",
        "displayName": "support.problem - context:support-problem",
        "priority": 500000,
        "isFallback": false,
        "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
        "action": "support.problem",
        "resetContexts": false,
        "rootFollowupIntentName": "",
        "parentFollowupIntentName": "",
        "mlDisabled": false,
        "liveAgentHandoff": false,
        "endInteraction": false
    }
]

router.get('/getIntentsList', async (req, res) => {
    try {
        res.send(dummy_data);
        // const response = await listIntents();
        // if (response) {
        //     res.status(200).send(response);
        // } else {
        //     res.status(400).send({status:'error',error:'anable to fetch data'});
        // }
    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
});


router.post('/getQueryResult', async (req, res) => {
    try {
        if (req.body.queryText){
            res.send(await executeQueries([req.body.queryText],'test'));
        } else {
            res.status(400).send({status:'error',error:'emptyQueryText'});
        }
    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
});

module.exports = router;