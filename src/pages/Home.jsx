import React, { useEffect, useState } from 'react';
import { Container, PostCards } from '../components/index';
import service from '../appwrite/config';
import img1 from '../imgs/happy-face.png'
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
            <div className='flex justify-center items-center text-center h-screen'>
                <Container>
                    <div className='flex flex-col items-center'>
                        <h1>Please Login to see the posts</h1>
                        <img src={img1} className='h-10' alt="" />
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='p-2'>
            <Container>
                <div className='flex flex-wrap gap-3  '>
                    {posts.map((post) => (
                    <div  key={post.$id}>
                        <PostCards {...post} />
                    </div>
                ))}
                </div>
                
            </Container>
        </div>
    );
}

export default Home;
