const User = ({name, changeName}) => {
    const setChildName = () => {
        changeName("my new name")
    }
    return (
        <>
            {name}
            <button onClick={setChildName}>Change name</button>
        </>
    )
}

export default User