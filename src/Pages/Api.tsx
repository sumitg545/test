import React, { useEffect, useState } from 'react'

function Api() {
 
    const [posts, setPosts] = useState([]);
        useEffect(() => {
            fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
                .then((response) => response.json())
                .then((data) => {
                    setPosts(data);
                })
            }, 
        []);

        return (
            <div className="posts-container">
            {
                posts.map((post:any) => {
                return (
                    <table>
                        <tr>
                            {posts.map(() => (
                            <tr>
                                <td>{post.name}</td>
                                <td>{post.city}</td>
                            </tr>
                            ),[])}
                        </tr>
                    </table>
                  
                );
            })}
        </div>
    )
}

export default Api