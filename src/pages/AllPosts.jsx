import React, { useEffect, useState } from 'react';
import service from '../appwrite/config';
import { Container, PostCards } from '../components/index';

function AllPosts() {
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

    return (
        <div>
            <Container>
                <div>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id}>
                                <PostCards {...post} />
                            </div>
                        ))
                    ) : (
                        <p>No posts found</p>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;

