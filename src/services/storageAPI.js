import { uploadBytes, ref, getStorage } from "firebase/storage";
import { storage, auth } from "./firebaseConnection";

export default {
  
  upload: (file) => {
    const user = auth.currentUser;

    // references main storage location
    const storageRef = ref(storage, `images/${file.name}`);

    const uploadTask = uploadBytes(storageRef, file).then((snapshot) => {
      console.log("uploaded a blob or file");
      console.log(snapshot);
    });
  },
}
