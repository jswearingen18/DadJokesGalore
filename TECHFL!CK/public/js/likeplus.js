async function likeButton(id,likes) {
    const url = `api/jokes/${id}`
    const body = {
        likes:likes
    }
        const response = await fetch(url,{method:"PUT",body:JSON.stringify(body)});
        const json = await JSON.stringify(response.json());
        return json;
}