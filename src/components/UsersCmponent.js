import React, {useEffect} from 'react'
import Card from '../components/CardCmponent'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../redux/actions/users'

const Users = props => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const loading = useSelector(state => state.users.loading)
  const error = useSelector(state => state.users.error)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <>
      {users.loading && <p>Loading...</p>}
      {users.length > 0 && users.map(user => (
        <Card user={user} key={user.id} />
      ))}
      {users.length === 0 && !loading && <p>No users</p>}
      {error && !loading && <p>{error}</p>}
    </>
  )
}

export default Users
