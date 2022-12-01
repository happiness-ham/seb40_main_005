import axios from "axios";
import client from "../../client/client";
import formClient from "../../client/formClient";

interface boardData {
    category : string,
    content : string,
    created : string,
    music : string,
    photo : any,
    tags : any,
    title : string,
    url : string
  }

const postBoardData = async ({
  category,
  content,
  created,
  music,
  photo,
  tags,
  title,
  url,
}: boardData) => {
    // const data = {
    //   category: category,
    //   content: content,
    //   created: created,
    //   music: music,
    //   photo: photo,
    //   tags: tags,
    //   title: title,
    //   url: url
    // };
  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("music", music);
  formData.append("photo", photo);
  formData.append("tags", tags);
  formData.append("category", category);
  formData.append("created", created);
  formData.append("url", url);

//   const JsonData = JSON.stringify(data);
//   const formValue = new FormData();
//   formValue.append("file", JsonData);

  console.log(created);
  return await formClient.post("/boards", formData);
};

export default postBoardData;