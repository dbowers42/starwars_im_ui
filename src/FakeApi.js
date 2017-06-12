import Service from './components/Service/ChatService'


class User {
    constructor({id, screenName, online, lastComment, avatar, context}) {
        this.id = id
        this.online = online
        this.screenName = screenName
        this.lastComment = lastComment
        this.avatar = avatar
        this.key = this.genKey(context)
    }

    genKey(context) {
        return `user-${context}-${this.id}`
    }
}

class Message{
    constructor({id, screenName, avatar, content, context}) {
        this.id = id
        this.screenName = screenName
        this.avatar = avatar
        this.content = content
        this.key = this.genKey(context)
    }

    genKey(context) {
        return `message-${context}-${this.id}`
    }
}

export default class FakeApi {
    static users(context) {

        let service = new Service()

        return [
            new User({id: 1, screenName: 'BB-8', online: true, lastComment: 'Luke I am your father', avatar: 'bb-8.png', context}),
            new User({id: 2, screenName: 'Boba Fett', online: false, lastComment: 'Luke I am your father', avatar: 'boba-fett.png', context}),
            new User({id: 3, screenName: 'C-3PO', online: false, lastComment: 'Luke I am your father', avatar: 'c-3po.png', context}),
            new User({id: 4, screenName: 'Chewbacca', online: false, lastComment: 'Luke I am your father', avatar: 'chewbacca.png', context}),
            new User({id: 5, screenName: 'Darth Vader', online: false, lastComment: 'Luke I am your father', avatar: 'darth-maul.png', context}),
            new User({id: 6, screenName: 'Darth Maul', online: false, lastComment: 'Luke I am your father', avatar: 'darth-vader.png', context}),
            new User({id: 7, screenName: 'Princess Amidala', online: false, lastComment: 'Luke I am your father', avatar: 'princess-amidala.png', context}),
            new User({id: 8, screenName: 'R2 D2', online: true, lastComment: 'Luke I am your father', avatar: 'r2-d2.png', context}),
            new User({id: 9, screenName: 'Royal Guard', online: false, lastComment: 'Luke I am your father', avatar: 'royal-guard.png', context}),
            new User({id: 10, screenName: 'Yoda', online: true, lastComment: 'Luke I am your father', avatar: 'yoda.png', context}),
            new User({id: 11, screenName: 'Stormtrooper', online: false, lastComment: 'Luke I am your father', avatar: 'stormtrooper.png', context}),
            new User({id: 12, screenName: 'The Emperor', online: false, lastComment: 'Luke I am your father', avatar: 'the-emperor.png', context})
        ]
    }

    static messages(context) {
        return [
            new Message({id: 1, screenName: 'BB-8', avatar: 'bb-8.png', content: 'hello', context}),
            new Message({id: 2, screenName: 'R2 D2', avatar: 'r2-d2.png', content: 'how are you', context}),
            new Message({id: 3, screenName: 'BB-8', avatar: 'bb-8.png', content: 'Good, thank you', context}),
        ]
    }
}