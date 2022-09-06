import Vonage from "@vonage/server-sdk";
import axios from "axios";



const vonage = new Vonage({
    apiKey: "d96edfda",
    apiSecret: "bFTGneqFLVp667vr"
  })

  export const sendSms = async (numbar, message ) => {

    const from = "Vonage APIs"
    const to = "8801765731598"
    const text = 'A text message sent using the Vonage SMS API'
    
    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })

  }

