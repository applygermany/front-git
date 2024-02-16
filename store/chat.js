// create store
export const state = () => ({
    user_chat_id: null,
    notification: [],
    rooms: [],
    chatRoomId: [],
    messages: [],
    chatImages: [],
    messageInput: "",
    openInChat: false,
    chatInfo: {
        name: "",
        lastname: "",
        active: null,
        id: null,
    },
    searchInput: "",
    votes: [],
});

// getters
export const getters = {
    votes(state) {
        return state.votes;
    },
    userChatId(state) {
        return state.user_chat_id;
    },
    notification(state) {
        return state.notification;
    },
    rooms(state) {
        return state.rooms;
    },
    chatRoomId(state) {
        return state.chatRoomId.filter(
            (item) =>
                item.firstname?.includes(state.searchInput) ||
                item.lastname?.includes(state.searchInput)
        );
    },
    messages(state) {
        return state.messages;
    },
    chatImages(state) {
        return state.chatImages;
    },
    messageInput(state) {
        return state.messageInput;
    },
    openInChat(state) {
        return state.openInChat;
    },
    chatInfo(state) {
        return state.chatInfo;
    },
    chatUnreadCount(state) {
        let initialValue = 0;
        state.chatRoomId.forEach((item) => {
            if (item.unreads) {
                initialValue += parseInt(item.unreads.toString());
            }
        });
        return initialValue;
    },
    notifUnreadCount(state) {
        let initialValue = 0;
        state.notification.forEach((item) => {
            if (item.is_read != 1) initialValue += 1;
        });

        return initialValue;
    },
    searchInput(state) {
        return state.searchInput;
    },
};

// mutations
export const mutations = {
    Set_userChatId(state, payload) {
        state.user_chat_id = payload;
    },
    Set_read(state) {
        state.notification = state.notification.map(e => {
            e.is_read = 1;
            return e;
        });
    },
    Set_Notification(state, payload) {
        payload.forEach((item) => state.notification.unshift(item));
    },
    Set_votes(state, payload) {
        state.votes = payload;
    },
    Clear_Notification(state) {
        state.notification = [];
    },
    Set_NewNotification(state, payload) {
        state.notification.unshift(payload);
    },
    Set_Rooms(state, payload) {
        state.rooms.unshift(payload);
    },
    Set_NewRoom(state, payload) {
        state.rooms.unshift(payload);
    },
    Set_ChatRoomId(state, payload) {
        state.chatRoomId.unshift(payload);
    },
    Clear_ChatRoomId(state) {
        state.chatRoomId = [];
    },
    Set_Messages(state, payload) {
        state.messages.push(payload);
    },
    Set_image(state, payload) {
        state.chatImages.push(payload);
    },
    Clear_images(state) {
        state.chatImages = [];
    },
    Clear_Messages(state) {
        state.messages = [];
    },
    Set_MessageInput(state, payload) {
        state.messageInput = payload;
    },
    Change_OpenInChat(state) {
        state.openInChat = !state.openInChat;
    },
    Set_ChatInfo(state, payload) {
        state.chatInfo = payload;
    },
    Update_LastMessage(state, payload) {
        console.log('Update_LastMessage')

        // state.chatRoomId = state.chatRoomId.map((item) => {
        //     if (item.id == payload.room_id) {
        //         console.log('payload')
        //         console.log(payload)
        //         item.last_message = payload.msg;
        //         item.last_timestamp_message = payload.timestamp;
        //         item.last_type_message = payload.type;
        //     }
        //
        //     return item;
        // });
        let chatRooms = state.chatRoomId;
        chatRooms.push(payload)
        state.chatRoomId = chatRooms;
    },
    Remove_LastMessage(state,payload) {
        console.log('Remove_LastMessage')

        // state.chatRoomId = state.chatRoomId.map((item) => {
        //     if (item.id == payload.room_id) {
        //         console.log('payload')
        //         console.log(payload)
        //         item.last_message = payload.msg;
        //         item.last_timestamp_message = payload.timestamp;
        //         item.last_type_message = payload.type;
        //     }
        //
        //     return item;
        // });
        state.chatRoomId.pop();
    },
    Delete_room(state, payload) {
        state.chatRoomId = state.chatRoomId.filter((item) => {
            return item.id !== payload.room_id;
        });
    },
    Update_Unreads(state, payload) {
        state.chatRoomId = state.chatRoomId.map((item) => {
            if (
                item.id == payload.room_id &&
                payload.from != "me" &&
                state.chatInfo.id != payload.room_id
            ) {
                item.unreads += 1;
                item.last_message = payload.msg;
                item.last_timestamp_message = payload.timestamp;
                item.last_type_message = payload.type;
            }
            return item;
        });
    },
    Clear_Unreads(state, payload) {
        state.chatRoomId = state.chatRoomId.map((item) => {
            if (item.id == payload) {
                item.unreads = 0;
            }

            return item;
        });
    },
    Clear_ChatInfo(state) {
        state.chatInfo = {
            name: "",
            lastname: "",
            active: null,
            id: null,
        };
    },
    Change_SearchInput(state, payload) {
        state.searchInput = payload;
    },
    Remove_NewNotification(state, payload) {
        state.notification = state.notification.filter(item => item.timestamp != payload);
    }
};

// actions
export const actions = {};
