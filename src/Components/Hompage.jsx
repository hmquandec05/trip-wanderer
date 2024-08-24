import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import Post from "./Cards/Post";
import styled from "styled-components";
import SlideImage from "./Cards/SlideImage";
import Layout from "./Layout/Layout";
import PostForm from "./Form/CreatePost";
import { getPosts } from "../lib/controller";
import { doc, getDoc } from "firebase/firestore";

const HomepageContainer = styled.div`
  min-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-around;
  min-height: 100%;
  overflow-y: scroll;
  overflow: hidden;
  background-color: transparent;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
`;

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setUser({
          name: userDoc.data().username || "Bạn",
          avatar:
            userDoc.data().avatar ||
            "https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-1/391399630_1488743318579614_9089216888538234146_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=zEId9J3xmIYQ7kNvgFPQCvF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkg4-2.xx&oh=00_AYDFM7f0sdKJ6saS8HGGPuRz6QuZ5tpcYRqHtWciRMvywA&oe=66CCC079",
        });
      } else {
        setUser(null);
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  console.log(user);

  const handleNewPost = () => {
    fetchPosts();
  };

  return (
    <Layout>
      <HomepageContainer>
        <ContentContainer>
          <SlideImage />
          {user && <PostForm author={user} onPostCreated={handleNewPost} />}
          {loading ? (
            <p>Đang tải bài viết...</p>
          ) : (
            posts.map((post) => <Post key={post.id} post={post} />)
          )}
        </ContentContainer>
      </HomepageContainer>
    </Layout>
  );
};

export default Homepage;
