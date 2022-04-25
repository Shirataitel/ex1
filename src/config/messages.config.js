import db, { KATES_IMAGE } from "./db.config"

const chatBob = [
    {
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
      video:"https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4",
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
      audio : "https://file-examples.com/storage/fe69f82402626533c98f608/2017/11/file_example_MP3_700KB.mp3",
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

  const chatCody = [
    {
      content : "Good morning!!:)",
      timestamp: '23/04/2022 16:56:30',
      username: 'cody',
      image: '',
    },
    {
      content : "Morning",
      timestamp: '23/04/2022 16:58:30',
      username: 'oriya',
      
    },
    {
      content : "Do you want to go on a trip?",
      timestamp: '23/04/2022 17:00:30',
      username: 'cody',
      
    },{
      content : "Sure!",
      timestamp: '23/04/2022 17:15:30',
      username: 'oriya',
    }

  ]
  export const STATIC_CHATS = [
    { nickname: "Bob",
      username: 'bob',
      msgWith: 'oriya',
      chat: chatBob},
    { nickname: "Eli",
      username: 'eli',
      msgWith: 'oriya',
      chat: chatELi},
    { nickname: "James",
            username: 'james',
            msgWith: 'oriya',
            chat: chatJames
          },
            {
                nickname: "Kate",
                username: 'kate',
                msgWith: 'oriya',
                chat: chatKate}
                ,{

                nickname: "Cody",
                username: 'cody',
                msgWith: 'oriya',
                chat: chatCody},{

                  nickname: "Bob",
                  username: 'oriya',
                  msgWith: 'bob',
                  chat: chatCody}] 

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
