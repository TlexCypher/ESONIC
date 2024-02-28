import React from 'react'
import { Navigate, useParams } from 'react-router-dom';

const RouteAuthGuard = ({ component }) => {
  const authUsername = sessionStorage.getItem("authUsername")
  const { username } = useParams()
  let authUser = null;
  if (authUsername && username === authUsername) {
    authUser = {
      pageType: "private",
      username: authUsername
    };
  } else {
    alert("コンテンツの閲覧にはログインが必要です。");
  }
  if (authUser) {
    return <>{component}</>
  } else {
    return <Navigate to="/login" />
  }
}

export default RouteAuthGuard
