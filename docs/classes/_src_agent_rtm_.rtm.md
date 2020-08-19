[lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/agent/rtm"](../modules/_src_agent_rtm_.md) › [RTM](_src_agent_rtm_.rtm.md)

# Class: RTM

## Hierarchy

* [RTMAPI](_src_internal_index_.rtmapi.md)

  ↳ **RTM**

## Index

### Constructors

* [constructor](_src_agent_rtm_.rtm.md#constructor)

### Properties

* [APIURL](_src_agent_rtm_.rtm.md#apiurl)
* [heartbeatInterval](_src_agent_rtm_.rtm.md#optional-heartbeatinterval)
* [license](_src_agent_rtm_.rtm.md#optional-license)
* [requestsQueue](_src_agent_rtm_.rtm.md#requestsqueue)
* [socket](_src_agent_rtm_.rtm.md#optional-socket)
* [subscribedPushes](_src_agent_rtm_.rtm.md#subscribedpushes)
* [type](_src_agent_rtm_.rtm.md#type)
* [version](_src_agent_rtm_.rtm.md#version)

### Methods

* [activateChat](_src_agent_rtm_.rtm.md#activatechat)
* [addUserToChat](_src_agent_rtm_.rtm.md#addusertochat)
* [banCustomer](_src_agent_rtm_.rtm.md#bancustomer)
* [changePushNotifications](_src_agent_rtm_.rtm.md#changepushnotifications)
* [connect](_src_agent_rtm_.rtm.md#connect)
* [createCustomer](_src_agent_rtm_.rtm.md#createcustomer)
* [deactivateChat](_src_agent_rtm_.rtm.md#deactivatechat)
* [deleteChatProperties](_src_agent_rtm_.rtm.md#deletechatproperties)
* [deleteEventProperties](_src_agent_rtm_.rtm.md#deleteeventproperties)
* [deleteThreadProperties](_src_agent_rtm_.rtm.md#deletethreadproperties)
* [followChat](_src_agent_rtm_.rtm.md#followchat)
* [getChat](_src_agent_rtm_.rtm.md#getchat)
* [getCustomer](_src_agent_rtm_.rtm.md#getcustomer)
* [grantChatAccess](_src_agent_rtm_.rtm.md#grantchataccess)
* [listAgentsForTransfer](_src_agent_rtm_.rtm.md#listagentsfortransfer)
* [listArchives](_src_agent_rtm_.rtm.md#listarchives)
* [listChats](_src_agent_rtm_.rtm.md#listchats)
* [listCustomers](_src_agent_rtm_.rtm.md#listcustomers)
* [listThreads](_src_agent_rtm_.rtm.md#listthreads)
* [login](_src_agent_rtm_.rtm.md#login)
* [logout](_src_agent_rtm_.rtm.md#logout)
* [markEventsAsSeen](_src_agent_rtm_.rtm.md#markeventsasseen)
* [multicast](_src_agent_rtm_.rtm.md#multicast)
* [on](_src_agent_rtm_.rtm.md#on)
* [removeUserFromChat](_src_agent_rtm_.rtm.md#removeuserfromchat)
* [revokeChatAccess](_src_agent_rtm_.rtm.md#revokechataccess)
* [send](_src_agent_rtm_.rtm.md#send)
* [sendEvent](_src_agent_rtm_.rtm.md#sendevent)
* [sendRichMessagePostback](_src_agent_rtm_.rtm.md#sendrichmessagepostback)
* [sendTypingIndicator](_src_agent_rtm_.rtm.md#sendtypingindicator)
* [setAwayStatus](_src_agent_rtm_.rtm.md#setawaystatus)
* [setRoutingStatus](_src_agent_rtm_.rtm.md#setroutingstatus)
* [startChat](_src_agent_rtm_.rtm.md#startchat)
* [subscribePush](_src_agent_rtm_.rtm.md#subscribepush)
* [tagThread](_src_agent_rtm_.rtm.md#tagthread)
* [transferChat](_src_agent_rtm_.rtm.md#transferchat)
* [unfollowChat](_src_agent_rtm_.rtm.md#unfollowchat)
* [unsubscribePush](_src_agent_rtm_.rtm.md#unsubscribepush)
* [untagThread](_src_agent_rtm_.rtm.md#untagthread)
* [updateChatProperties](_src_agent_rtm_.rtm.md#updatechatproperties)
* [updateCustomer](_src_agent_rtm_.rtm.md#updatecustomer)
* [updateEventProperties](_src_agent_rtm_.rtm.md#updateeventproperties)
* [updateThreadProperties](_src_agent_rtm_.rtm.md#updatethreadproperties)

## Constructors

###  constructor

\+ **new RTM**(): *[RTM](_src_agent_rtm_.rtm.md)*

*Overrides [RTMAPI](_src_internal_index_.rtmapi.md).[constructor](_src_internal_index_.rtmapi.md#constructor)*

*Defined in [src/agent/rtm.ts:32](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L32)*

**Returns:** *[RTM](_src_agent_rtm_.rtm.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[APIURL](_src_internal_index_.rtmapi.md#apiurl)*

*Defined in [src/internal/index.ts:64](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L64)*

___

### `Optional` heartbeatInterval

• **heartbeatInterval**? : *NodeJS.Timeout*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[heartbeatInterval](_src_internal_index_.rtmapi.md#optional-heartbeatinterval)*

*Defined in [src/internal/index.ts:69](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L69)*

___

### `Optional` license

• **license**? : *undefined | number*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[license](_src_internal_index_.rtmapi.md#optional-license)*

*Defined in [src/internal/index.ts:67](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L67)*

___

###  requestsQueue

• **requestsQueue**: *any*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[requestsQueue](_src_internal_index_.rtmapi.md#requestsqueue)*

*Defined in [src/internal/index.ts:70](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L70)*

___

### `Optional` socket

• **socket**? : *ws*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[socket](_src_internal_index_.rtmapi.md#optional-socket)*

*Defined in [src/internal/index.ts:68](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L68)*

___

###  subscribedPushes

• **subscribedPushes**: *any*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[subscribedPushes](_src_internal_index_.rtmapi.md#subscribedpushes)*

*Defined in [src/internal/index.ts:71](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L71)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[type](_src_internal_index_.rtmapi.md#type)*

*Defined in [src/internal/index.ts:66](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L66)*

___

###  version

• **version**: *string*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[version](_src_internal_index_.rtmapi.md#version)*

*Defined in [src/internal/index.ts:65](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L65)*

## Methods

###  activateChat

▸ **activateChat**(`param`: string | [ActivateChatParameters](../interfaces/_src_agent_structures_.activatechatparameters.md)): *Promise‹[ActivateChatResponse](../interfaces/_src_agent_structures_.activatechatresponse.md)›*

*Defined in [src/agent/rtm.ts:138](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L138)*

Restarts an archived chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`param` | string &#124; [ActivateChatParameters](../interfaces/_src_agent_structures_.activatechatparameters.md) | either string ID of a chat to activate or full initial chat object  |

**Returns:** *Promise‹[ActivateChatResponse](../interfaces/_src_agent_structures_.activatechatresponse.md)›*

___

###  addUserToChat

▸ **addUserToChat**(`chat_id`: string, `user_id`: string, `user_type`: string, `require_active_thread?`: undefined | false | true): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:215](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L215)*

Adds a user to the chat. You can't add more than one customer user type to the chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to add user to |
`user_id` | string | user to add |
`user_type` | string | customer or agent |
`require_active_thread?` | undefined &#124; false &#124; true | if true, adds user only if chat has an active thread  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  banCustomer

▸ **banCustomer**(`customer_id`: string, `days`: number): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:449](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L449)*

Bans the customer for a specific period of time. It immediately disconnects all active sessions of this customer
and does not accept new ones during the ban lifespan.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`customer_id` | string | = ID of customer to ban |
`days` | number | ban duration in days  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  changePushNotifications

▸ **changePushNotifications**(`change`: [ChangePushNotificationsRequest](../interfaces/_src_agent_structures_.changepushnotificationsrequest.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:62](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L62)*

Change the firebase push notifications properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`change` | [ChangePushNotificationsRequest](../interfaces/_src_agent_structures_.changepushnotificationsrequest.md) | properties to change  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  connect

▸ **connect**(): *Promise‹void›*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[connect](_src_internal_index_.rtmapi.md#connect)*

*Defined in [src/internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L82)*

**Returns:** *Promise‹void›*

___

###  createCustomer

▸ **createCustomer**(`opts?`: [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md)): *Promise‹[CreateCustomerResponse](../interfaces/_src_agent_structures_.createcustomerresponse.md)›*

*Defined in [src/agent/rtm.ts:425](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L425)*

Creates a new Customer user type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md) | customer data  |

**Returns:** *Promise‹[CreateCustomerResponse](../interfaces/_src_agent_structures_.createcustomerresponse.md)›*

___

###  deactivateChat

▸ **deactivateChat**(`chat_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:150](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L150)*

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to deactivate  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  deleteChatProperties

▸ **deleteChatProperties**(`chat_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:290](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L290)*

Deletes chat properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  deleteEventProperties

▸ **deleteEventProperties**(`chat_id`: string, `thread_id`: string, `event_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:361](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L361)*

Deletes event properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of event to delete |
`thread_id` | string | thread ID of event to delete |
`event_id` | string | event to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  deleteThreadProperties

▸ **deleteThreadProperties**(`chat_id`: string, `thread_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:321](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L321)*

Deletes thread properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to delete |
`thread_id` | string | thread to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  followChat

▸ **followChat**(`chat_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:159](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L159)*

Marks a chat as followed. All changes to the chat will be sent to the requester until the chat is reactivated or unfollowed.
Chat members don't need to follow their chats. They receive all chat pushes regardless of their follower status.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to follow  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  getChat

▸ **getChat**(`chat_id`: string, `thread_id?`: undefined | string): *Promise‹[GetChatResponse](../interfaces/_src_agent_structures_.getchatresponse.md)›*

*Defined in [src/agent/rtm.ts:110](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L110)*

It returns a thread that the current Agent has access to in a given chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | ID of a chat to get |
`thread_id?` | undefined &#124; string | thread ID to get (if not provided, last thread is returned)  |

**Returns:** *Promise‹[GetChatResponse](../interfaces/_src_agent_structures_.getchatresponse.md)›*

___

###  getCustomer

▸ **getCustomer**(`customer_id`: string): *Promise‹[GetCustomerResponse](../interfaces/_src_agent_structures_.getcustomerresponse.md)›*

*Defined in [src/agent/rtm.ts:407](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L407)*

Returns the info about the Customer with a given customer_id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`customer_id` | string | customer ID to teg  |

**Returns:** *Promise‹[GetCustomerResponse](../interfaces/_src_agent_structures_.getcustomerresponse.md)›*

___

###  grantChatAccess

▸ **grantChatAccess**(`chat_id`: string, `access`: [ChatAccess](../interfaces/_src_objects_index_.chataccess.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:177](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L177)*

Grants access to a new chat without overwriting the existing ones.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to grant access to |
`access` | [ChatAccess](../interfaces/_src_objects_index_.chataccess.md) | access to grant  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  listAgentsForTransfer

▸ **listAgentsForTransfer**(`chat_id`: string): *Promise‹[AgentForTransfer](../interfaces/_src_agent_structures_.agentfortransfer.md)[]›*

*Defined in [src/agent/rtm.ts:517](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L517)*

It returns the Agents you can transfer a chat to. Agents are sorted ascendingly by the total number of active chats they have. Note that:
- The method only returns Agents with statuses online and not accepting chats. Offline Agents aren't returned.
- Only chats with Customers are taken into account in total_active_chats.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID you want to transfer  |

**Returns:** *Promise‹[AgentForTransfer](../interfaces/_src_agent_structures_.agentfortransfer.md)[]›*

___

###  listArchives

▸ **listArchives**(`opts?`: [ListArchivesParameters](../interfaces/_src_agent_structures_.listarchivesparameters.md)): *Promise‹[ListArchivesResponse](../interfaces/_src_agent_structures_.listarchivesresponse.md)›*

*Defined in [src/agent/rtm.ts:120](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L120)*

It returns a list of the chats an Agent has access to. Together with a chat, the events of one thread from this chat are returned.

The list classification is based on threads; 1 chat per 1 thread. Thus, the same chat object may appear on the list several times,
but each time with a different thread. The returned chat is a complete object, not only a chat summary.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListArchivesParameters](../interfaces/_src_agent_structures_.listarchivesparameters.md) | options like filters or pagination  |

**Returns:** *Promise‹[ListArchivesResponse](../interfaces/_src_agent_structures_.listarchivesresponse.md)›*

___

###  listChats

▸ **listChats**(`opts?`: [ListChatParameters](../interfaces/_src_agent_structures_.listchatparameters.md)): *Promise‹[ListChatsResponse](../interfaces/_src_agent_structures_.listchatsresponse.md)›*

*Defined in [src/agent/rtm.ts:89](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L89)*

It returns summaries of the chats an Agent has access to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListChatParameters](../interfaces/_src_agent_structures_.listchatparameters.md) | set of filters and pagination to limit returned entries  |

**Returns:** *Promise‹[ListChatsResponse](../interfaces/_src_agent_structures_.listchatsresponse.md)›*

___

###  listCustomers

▸ **listCustomers**(`opts?`: [ListCustomersParameters](../interfaces/_src_agent_structures_.listcustomersparameters.md)): *Promise‹[ListCustomersResponse](../interfaces/_src_agent_structures_.listcustomersresponse.md)›*

*Defined in [src/agent/rtm.ts:415](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L415)*

It returns the list of Customers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListCustomersParameters](../interfaces/_src_agent_structures_.listcustomersparameters.md) | options like filters or pagination  |

**Returns:** *Promise‹[ListCustomersResponse](../interfaces/_src_agent_structures_.listcustomersresponse.md)›*

___

###  listThreads

▸ **listThreads**(`chat_id`: string, `opts?`: [ListThreadsParameters](../interfaces/_src_agent_structures_.listthreadsparameters.md)): *Promise‹[ListThreadsResponse](../interfaces/_src_agent_structures_.listthreadsresponse.md)›*

*Defined in [src/agent/rtm.ts:98](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L98)*

Returns threads that the current Agent has access to in a given chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to get threads from |
`opts?` | [ListThreadsParameters](../interfaces/_src_agent_structures_.listthreadsparameters.md) | additional options like pagination and sorting  |

**Returns:** *Promise‹[ListThreadsResponse](../interfaces/_src_agent_structures_.listthreadsresponse.md)›*

___

###  login

▸ **login**(`loginData`: string | [LoginRequest](../interfaces/_src_agent_structures_.loginrequest.md)): *Promise‹[LoginResponse](../interfaces/_src_agent_structures_.loginresponse.md)›*

*Defined in [src/agent/rtm.ts:52](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L52)*

It returns the initial state of the current Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`loginData` | string &#124; [LoginRequest](../interfaces/_src_agent_structures_.loginrequest.md) | OAuth token from Agent's account or full object with login options  |

**Returns:** *Promise‹[LoginResponse](../interfaces/_src_agent_structures_.loginresponse.md)›*

___

###  logout

▸ **logout**(): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:81](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L81)*

Logs the Agent out.

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  markEventsAsSeen

▸ **markEventsAsSeen**(`chat_id`: string, `seen_up_to`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:470](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L470)*

Marks events as seen by Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to mark events |
`seen_up_to` | string | date up to which mark events  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  multicast

▸ **multicast**(`recipients`: [MulticastRecipients](../interfaces/_src_agent_structures_.multicastrecipients.md), `content`: object, `type?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:503](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L503)*

This method serves for the chat-unrelated communication. Messages sent using multicast are not being saved.
For example, it could be used in an app that sends notifications to Agents or Customers,
when a certain condition is met (e.g. an important Customer started the chat).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`recipients` | [MulticastRecipients](../interfaces/_src_agent_structures_.multicastrecipients.md) | who should receive multicast |
`content` | object | = JSON content to send |
`type?` | undefined &#124; string | message type  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  on

▸ **on**(`push`: [Pushes](../enums/_src_agent_structures_.pushes.md), `handler`: function): *function*

*Defined in [src/agent/rtm.ts:43](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L43)*

Allows to subscribe a handler for a given push. Returns function to unsubscribe.
Note: multiple subscriptions for the same push are not allowed in sigle websocket connection.

**Parameters:**

▪ **push**: *[Pushes](../enums/_src_agent_structures_.pushes.md)*

push name to subscribe to

▪ **handler**: *function*

function receiving push payload

▸ (`payload`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | any |

**Returns:** *function*

▸ (): *void*

___

###  removeUserFromChat

▸ **removeUserFromChat**(`chat_id`: string, `user_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:233](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L233)*

Removes a user from chat. Removing customer user type is not allowed. It's always possible to remove the requester from the chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to remove user from |
`user_id` | string | user to remove  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  revokeChatAccess

▸ **revokeChatAccess**(`chat_id`: string, `access`: [ChatAccess](../interfaces/_src_objects_index_.chataccess.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:189](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L189)*

Revokes access to chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to grant access to |
`access` | [ChatAccess](../interfaces/_src_objects_index_.chataccess.md) | access to revoke  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  send

▸ **send**(`action`: string, `payload`: any): *Promise‹any›*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[send](_src_internal_index_.rtmapi.md#send)*

*Defined in [src/internal/index.ts:132](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`payload` | any |

**Returns:** *Promise‹any›*

___

###  sendEvent

▸ **sendEvent**(`chat_id`: string, `event`: [Event](../modules/_src_objects_index_.md#event), `attach_to_last_thread?`: undefined | false | true): *Promise‹[SendEventResponse](../interfaces/_src_agent_structures_.sendeventresponse.md)›*

*Defined in [src/agent/rtm.ts:251](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L251)*

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to send event to |
`event` | [Event](../modules/_src_objects_index_.md#event) | Event object |
`attach_to_last_thread?` | undefined &#124; false &#124; true | if true, adds event to last inactive thread  |

**Returns:** *Promise‹[SendEventResponse](../interfaces/_src_agent_structures_.sendeventresponse.md)›*

___

###  sendRichMessagePostback

▸ **sendRichMessagePostback**(`opts`: [SendRichMessagePostbackParameters](../interfaces/_src_agent_structures_.sendrichmessagepostbackparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:267](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L267)*

Sends postback for rich message

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [SendRichMessagePostbackParameters](../interfaces/_src_agent_structures_.sendrichmessagepostbackparameters.md) | postback data  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  sendTypingIndicator

▸ **sendTypingIndicator**(`chat_id`: string, `is_typing`: boolean, `recipients?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:483](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L483)*

Sends typing indicator

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat for typing indicator |
`is_typing` | boolean | status of typing |
`recipients?` | undefined &#124; string | possible values: all, agents  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  setAwayStatus

▸ **setAwayStatus**(`away`: boolean): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:74](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L74)*

Sets an Agent's connection to the away state. You can use this method to manipulate the Agent's status.
The method works per connection - all connections an Agent has (desktop, mobile, etc) must be in the away state
for the Agent's status to be changed to not_accepting_chats.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`away` | boolean | away status  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  setRoutingStatus

▸ **setRoutingStatus**(`status`: [RoutingStatus](../enums/_src_objects_index_.routingstatus.md), `agent_id?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:458](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L458)*

Changes the status of an Agent or a Bot Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`status` | [RoutingStatus](../enums/_src_objects_index_.routingstatus.md) | status to set |
`agent_id?` | undefined &#124; string | ID of agent to update status  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  startChat

▸ **startChat**(`opts?`: [StartChatParameters](../interfaces/_src_agent_structures_.startchatparameters.md)): *Promise‹[StartChatResponse](../interfaces/_src_agent_structures_.startchatresponse.md)›*

*Defined in [src/agent/rtm.ts:130](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L130)*

Starts a chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [StartChatParameters](../interfaces/_src_agent_structures_.startchatparameters.md) | options like initial chat data or continuous switch  |

**Returns:** *Promise‹[StartChatResponse](../interfaces/_src_agent_structures_.startchatresponse.md)›*

___

###  subscribePush

▸ **subscribePush**(`push`: string, `callback`: Function): *void*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[subscribePush](_src_internal_index_.rtmapi.md#subscribepush)*

*Defined in [src/internal/index.ts:150](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L150)*

**Parameters:**

Name | Type |
------ | ------ |
`push` | string |
`callback` | Function |

**Returns:** *void*

___

###  tagThread

▸ **tagThread**(`chat_id`: string, `thread_id`: string, `tag`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:381](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L381)*

Tags thread with given tag

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to tag |
`thread_id` | string | thread to tag |
`tag` | string | tag to add  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  transferChat

▸ **transferChat**(`chat_id`: string, `opts?`: [TransferChatParameters](../interfaces/_src_agent_structures_.transferchatparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:201](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L201)*

Transfers a chat to an Agent or a group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to transfer |
`opts?` | [TransferChatParameters](../interfaces/_src_agent_structures_.transferchatparameters.md) | specific target or force flag  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  unfollowChat

▸ **unfollowChat**(`chat_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:168](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L168)*

Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
will be sent to the requester. Chat members cannot unfollow the chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to unfollow  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  unsubscribePush

▸ **unsubscribePush**(`push`: string): *void*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[unsubscribePush](_src_internal_index_.rtmapi.md#unsubscribepush)*

*Defined in [src/internal/index.ts:157](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/internal/index.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`push` | string |

**Returns:** *void*

___

###  untagThread

▸ **untagThread**(`chat_id`: string, `thread_id`: string, `tag`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:395](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L395)*

Removes tag from thread

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to untag |
`thread_id` | string | thread to untag |
`tag` | string | tag to remove  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateChatProperties

▸ **updateChatProperties**(`chat_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:278](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L278)*

Updates chat properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateCustomer

▸ **updateCustomer**(`customer_id`: string, `opts`: [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:436](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L436)*

Updates Customer's properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`customer_id` | string | ID of a customer to update |
`opts` | [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateEventProperties

▸ **updateEventProperties**(`chat_id`: string, `thread_id`: string, `event_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:340](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L340)*

Updates event properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of event to update |
`thread_id` | string | thread ID of event to update |
`event_id` | string | event to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateThreadProperties

▸ **updateThreadProperties**(`chat_id`: string, `thread_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:303](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/rtm.ts#L303)*

Updates thread properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to update |
`thread_id` | string | thread to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*