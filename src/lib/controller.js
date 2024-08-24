import { app } from "./firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  increment,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

const storage = getStorage(app);
const db = getFirestore(app);
export const fireStore = getFirestore(app);

// FOR HOME PAGE
export const uploadPost = async (content, imageFile, author) => {
  try {
    let imageUrl = null;

    // Upload image to Firebase Storage if an image file is provided
    if (imageFile) {
      const imageRef = ref(storage, `posts/${Date.now()}_${imageFile.name}`);
      const snapshot = await uploadBytes(imageRef, imageFile);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    // Add post data to Firestore
    const postData = {
      content,
      imageUrl,
      author,
      createdAt: serverTimestamp(),
      likes: 0,
      comments: [],
      shares: 0,
    };

    const docRef = await addDoc(collection(db, "posts"), postData);
    return docRef.id;
  } catch (error) {
    console.error("Error uploading post: ", error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error getting posts: ", error);
    throw error;
  }
};

export const unlikePost = async (postId) => {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: increment(-1),
    });
  } catch (error) {
    console.error("Error unliking post: ", error);
    throw error;
  }
};

export const likePost = async (postId) => {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: increment(1), // Tăng số lượng like lên 1
    });
  } catch (error) {
    console.error("Error liking post: ", error);
    throw error;
  }
};

export const addComment = async (postId, comment) => {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      comments: arrayUnion(comment), // Thêm comment mới vào mảng comments
    });
  } catch (error) {
    console.error("Error adding comment: ", error);
    throw error;
  }
};

//FOR DISCOVERY PAGE

export const getTrips = async () => {
  try {
    const tripsRef = collection(db, "trips");
    const q = query(tripsRef, orderBy("id", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error getting posts: ", error);
    throw error;
  }
};
