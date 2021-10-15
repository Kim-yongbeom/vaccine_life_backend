import React from "react";
import DetailPost from "../../components/posts/DetailPost";
import { useEffect, useState } from "react";
import { useContext } from "react";
import PostContext from "../../context/PostContext";
import client from "../../libs/api/_client";
import { useParams } from "react-router";

function DetailPostContainer() {
  const [loading, setLoading] = useState(false);
  const { postInfo, setPostInfo } = useContext(PostContext);
  const [commentForm, setCommentForm] = useState("");
  const DetailPostPageUrl = useParams();

  useEffect(() => {
    async function getData() {
      console.log(postInfo);
      setLoading(true);
      try {
        const response = await client.get(
          `vaccine/posts/${DetailPostPageUrl.postid}`
        );
        console.log(DetailPostPageUrl.postid);
        if (response.status === 200) {
          setLoading(false);
          const result = response.data.data;
          setPostInfo({
            post: result,
          });
          console.log("ㅁㅁㄴㅇㅁㅇ", postInfo._id);
          console.log("(전체 게시물 조회) 홈페이지 업로드 완료");
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getData();
  }, []);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    //postInfo.post.comments.commentContent
    setCommentForm({
      comment: value,
    });
    //console.log(value);
  };

  const onClickComment = async () => {
    try {
      const response = await client.post(
        `vaccine/comments/${DetailPostPageUrl.postid}`,
        {
          commentContent: commentForm,
        }
      );
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DetailPost
      postInfo={postInfo}
      onChangeInput={onChangeInput}
      onClickComment={onClickComment}
    />
  );
}

export default DetailPostContainer;
