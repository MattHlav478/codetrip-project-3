import { uploadBytes } from "firebase/storage";
import { storage, storageRef } from "./firebaseConnection";



export default {
  upload: (file) => {
    const uploadTask = uploadBytes(storageRef, file).then((snapshot) => {
      console.log("uploaded a blob or file");
    });
  },
};
