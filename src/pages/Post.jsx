import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.fileDelete(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex flex-col justify-center mb-4 relative border rounded-xl p-2">
                    <div className="md:p-10 md:pt-0 lg:p-20 lg:pt-0  xl:p-40 xl:pt-0">
                          <img
                        src={service.getfilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl "
                    />
                    </div>
                  

                    {isAuthor && (
                        <div className="right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button  className="mr-3 bg-orange-600 p-2 rounded-md w-20 font-bold">
                                    Edit
                                </Button>
                            </Link>
                            <Button className=' bg-orange-600 p-2 rounded-md w-20 font-bold' onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="bg-orange-500 p-3">
                     <div className="w-full mb-6">
                    <h1 className="text-2xl text-white font-bold">{post.title}</h1>
                </div>
                <label className="font-bold">Description:</label>
                <div className="browser-css text-white rounded-lg pl-2 outline">
                    {parse(post.content)}
                    </div>
                </div>
               
            </Container>
        </div>
    ) : null;
}