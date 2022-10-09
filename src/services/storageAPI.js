import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage, auth } from "./firebaseConnection";

export default {
  upload: async (file) => {
    const user = auth.currentUser;
    console.log(user.uid);

    // references main storage location
    const storageRef = ref(storage, `images/${user.uid}/${file.name}`);

    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
    // .then((url) => console.log("url is", url))
  },
};
