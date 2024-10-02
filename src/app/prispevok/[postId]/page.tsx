export default function ProductDetails({ 
    params,
}: {
    params: {postId: string}
}) {
    return <h1>Detail o prispevku {params.postId}</h1>
}