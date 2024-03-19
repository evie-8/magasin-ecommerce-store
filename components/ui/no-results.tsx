interface NoResultsProp {
    message: string
}
const NoResults: React.FC<NoResultsProp> = ({message}) => {
    return (
        <div className="flex items-center justify-center h-full w-full text-dark-grey">
            {message}
        </div>
    )
}

export default NoResults;