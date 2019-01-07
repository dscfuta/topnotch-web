import* as functions from 'firebase-functions';
import { initializeApp, firestore as messaging } from 'firebase-admin';

initializeApp();

export const notifyNewMsg = functions.document('Users Request/{docId}').onCreate(async (docSnapshot, context) => {
        const message = docSnapshot.data()

        const name = message['']
        const eventType = message['']

        const payLoad = {
            notification: {
                title: `${name} `,
                body: `${name} is requestion for ${eventType}`,
                // clickAction: "Activity"
            },
            data: {
                USER_NAME: senderName
            } 
        };
        const sendMessage = await messaging().sendToTopic("Owner", payLoad)
        .then((response) => {
            return console.log(`${response}`)
        }).catch((error) => {
            return console.log(`${error}`)
        })
        return sendMessage
})
