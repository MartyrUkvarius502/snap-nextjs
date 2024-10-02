// src /app/prispevok/[postId]/comment/[commentId]/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "Komentár príspevku | instaDeepFake" }

export default function PostCommentDetail({
    params,

    }: {
        params: {
        postId: string;
        commentId: string;
    };
})  {
    return (
        <Container>
            <Typography> Komentár {params.commentId} príspevku {params.postId}</Typography>
            <Typography> Príspevok číslo {params.postId} a k nemu priradený komentár číslo: {params.commentId}</Typography>
        </Container>
    );
}