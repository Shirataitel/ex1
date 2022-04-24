import db from "./db.config"

const chatBob = [
    {
      content : "",
      timestamp: '19/04/2022 16:56:30',
      username: 'oriya',
      image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
    },
    {
      content : "Hi",
      timestamp: '19/04/2022 16:58:30',
      username: 'bob',
      
    },
    {
      content : "How are you?",
      timestamp: '19/04/2022 17:00:30',
      username: 'oriya',
      
    }
  
  ]
  
  const chatELi = [
    {
      content : "Hi",
      timestamp: '19/04/2022 16:56:30',
      username: 'oriya',
      
    },
    {
      content : "Did you go to the party?",
      timestamp: '19/04/2022 16:58:30',
      username: 'oriya',
      
    },
    {
      content : "No",
      timestamp: '19/04/2022 17:00:30',
      username: 'Eli',
      
    }
  ]
  
  const chatKate = [
    {
      content : "Have you seen the news?",
      timestamp: '20/04/2022 16:56:30',
      username: 'kate',
      
    },
    {
      content : "Yes",
      timestamp: '20/04/2022 16:58:30',
      username: 'oriya',
      
    },
    {
      content : "What do you think?",
      timestamp: '20/04/2022 17:00:30',
      username: 'kate',
      
    },
    {
      content : "I don't know",
      timestamp: '20/04/2022 17:02:30',
      username: 'oriya',
      
    }
  ]
  
  const chatJames = [
    {
      content : "Let's order food",
      timestamp: '20/04/2022 16:56:30',
      username: 'oriya',
      
    },
    {
      content : "What food?",
      timestamp: '20/04/2022 16:58:30',
      username: 'james',
      
    },
    {
      content : "How about sushi?",
      timestamp: '20/04/2022 17:00:30',
      username: 'oriya',
      
    }
  ]

  export const STATIC_CHATS = [{
    nickname: "Bob",
    username: 'bob',
    msgWith: 'oriya',
    lastMessage: "heellloooo",
    image: "https://appvital.com/images/profile/file-uploader-api-profile-avatar-2.jpg",
    lastMessageTime: "19/04/2022 17:00:30" ,
    chat: chatBob},
    {
        nickname: "Eli",
        username: 'eli',
        msgWith: 'oriya',
        lastMessage: "Whatsaooo",
        image: "https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top",
        lastMessageTime: "19/04/2022 22:00:30" ,
        chat: chatELi},
        {
            nickname: "James",
            username: 'james',
            msgWith: 'oriya',
            lastMessage: "heellloooo",
            image: "https://appvital.com/images/profile/file-uploader-api-profile-avatar-2.jpg",
            lastMessageTime: "18/04/2022 17:00:30" ,
            chat: chatJames},
            {
                nickname: "Kate",
                username: 'kate',
                msgWith: 'oriya',
                image: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
                lastMessage: "heellloooo",
                lastMessageTime: "20/04/2022 07:00:30" ,
                chat: chatKate}] 

export const GenerateChatContact = (user, currentUserName, chat) => {
  if(chat.length > 0 ){
  const lastMsg = chat.at(-1)
  return {
    nickname: user.nickname,
    username: user.username,
    msgWith: currentUserName,
    chat: chat,
    image: user.image,
    lastMessage: lastMsg.content,
    lastMessageTime: lastMsg.timestamp
  }
  }
  return {
    nickname: user.nickname,
    username: user.username,
    msgWith: currentUserName,
    chat: chat,
    image: user.image,
  }
}

export const GENERATE_CHATS = (currentUser) => {
  const contacts = db
  const Chat = []
  contacts.forEach(user => {
    STATIC_CHATS.forEach(chat => {
      if(currentUser.username === chat.msgWith && user.username === chat.username){
        const obj = GenerateChatContact(user, currentUser.username, chat.chat)
        Chat.push(obj)
      }
    })
    
  })
  return Chat;
}

