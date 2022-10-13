import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage, auth } from "./firebaseConnection";

export default {
    // function for uploading user's image
    upload: async (file) => {
        const user = auth.currentUser;

        // references main storage location
        const storageRef = ref(storage, `images/${user.uid}/${file.name}`);

        const snapshot = await uploadBytes(storageRef, file);
        return await getDownloadURL(snapshot.ref);
    },
};
