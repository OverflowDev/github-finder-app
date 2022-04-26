import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

function Home() {
  return (
    <>
      <UserSearch />
      {/* User Result Components  */}
      <UserResults />
    </>
  )
}

export default Home