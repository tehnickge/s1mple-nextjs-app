interface Props {
    params: {
        id: string[]
    }
}

export default function Post({ params } : Props) {
    return (
        <div>
            <h1>post {JSON.stringify(params.id)}</h1>
        </div>
    )
}