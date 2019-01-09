const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp()

exports.notifyNewMsg = functions.firestore.document('UsersRequests/{docId}').onCreate((docSnapshot, context) => {

    let docId = context.params;

    if (typeof docId !== "string") {
      console.warn(`Invalid params, expected 'docId'`, context.params);

      docId = docSnapshot.ref.parent.parent.id;
    }

        const message = docId.data()

        const name = message['name']
        const eventType = message['event_type']

        const payLoad = {
            notification: {
                title: `${name} `,
                body: `${name} is requestion for ${eventType}`,
                // clickAction: "Activity"
            }
        };
        const sendMessage = admin.messaging().sendToTopic("Owner", payLoad)
        .then((response) => {
            return console.log(`${response}`)
        }).catch((error) => {
            return console.log(`${error.message}`)
        })
        return sendMessage
})
