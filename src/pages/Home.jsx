import React, { useEffect, useState } from 'react';
import { Container, PostCards } from '../components/index';
import service from '../appwrite/config';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await service.getallPosts();
                if (response && response.documents) {
                    setPosts(response.documents); // Set posts state with the documents array
                } else {
                    console.error('Documents array not found in response:', response);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
                // Handle error as needed
            }
        };

        fetchPosts();
    }, []);

    if (posts.length === 0) {
        return (
            <div>
                <Container>
                    <div>
                        <h1>Please Login to see the posts</h1>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div>
            <Container>
                {posts.map((post) => (
                    <div key={post.$id}>
                        <PostCards {...post} />
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default Home;
