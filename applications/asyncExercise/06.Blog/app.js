function attachEvents() {
    document.getElementById("btnLoadPosts").addEventListener("click", loadPost);
    document.getElementById("btnViewPost").addEventListener("click", viewPost);
    const selectRef = document.getElementById("posts");
    const postTitleRef = document.getElementById("post-title");
    const postBodyRef = document.getElementById("post-body");
    const postCommentsRef = document.getElementById("post-comments");


    const endpoints = {
        allPosts: "http://localhost:3030/jsonstore/blog/posts",
        allComments:"http://localhost:3030/jsonstore/blog/comments/"
    }
    
    async function loadPost(e){
        const response = await fetch(endpoints.allPosts);
        const data = await response.json();
        selectRef.innerHTML = "";
        Object.values(data).forEach(post => {
            selectRef.innerHTML += createOptionElement(post);
        })
    }

    function createOptionElement(data){
        return `<option value=${data.id}>${data.title}</option>`
    }

    async function viewPost(e){
        const currentPostId = selectRef.selectedOptions[0].value
        const responseWithSinglePost = await fetch(endpoints.allPosts + "/"+ currentPostId)
        const dataSinglePost = await responseWithSinglePost.json();
        const responseComments = await fetch(endpoints.allComments);
        const dataComments = await responseComments.json();
        const filteredComments = Object.values(dataComments).filter(comment => comment.postId == currentPostId)
        postTitleRef.textContent = dataSinglePost.title;
        postBodyRef.textContent = dataSinglePost.body;
        postCommentsRef.innerHTML = "";
        filteredComments.forEach(x => {
            const li = document.createElement("li");
            li.id=x.id;
            li.textContent = x.text;
            postCommentsRef.appendChild(li);
        })
    }
}

attachEvents();