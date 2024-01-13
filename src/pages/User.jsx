import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import Spinner from '../components/layouts/Spinner';
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
    const {getUser, user, loading} = useContext(GithubContext)
    const params = useParams ()

    useEffect(()=> {
        getUser(params.login)
    }, [])

  return (
    <div>
      {user.login}
    </div>
  );
}

export default User;
