import React, { useState } from "react";

import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Profile from "./Profile";

export default function Search() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleChange = (e) => {
    if (data) {
      setData({});
      setRepositories([]);
      setOrganizations([]);
    }
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotFound(false);
    setData({});
    setRepositories([]);
    setOrganizations([]);

    try {
      const profile = await fetch(`https://api.github.com/users/${username}`);
      const profileJson = await profile.json();

      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();
      const organizations = await fetch(profileJson.organizations_url);
      const orgJson = await organizations.json();

      if (profileJson) {
        setData(profileJson);
        setRepositories(repoJson);
        setOrganizations(orgJson);
      }
    } catch (e) {
      setNotFound(true);
    }

    setLoading(false);
  };
  return (
    <div style={{ padding: 20 }}>
      <div className="ui search">
        <form onSubmit={handleSubmit}>
          <div className="search-input-container">
            <input
              placeholder="username..."
              className="input-search"
              type="text"
              value={username}
              onChange={handleChange}
            />
          </div>

          {loading ? (
            <CircularProgress />
          ) : (
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={handleSubmit}
              disabled={username.length === 0}
            >
              Search
            </Button>
          )}
        </form>
      </div>

      {data.login && (
        <Profile
          user={data}
          repositories={repositories}
          organizations={organizations}
        />
      )}
      {notFound && (
        <Typography variant="h5" sx={{ color: "white", marginTop: 5 }}>
          Oops! we couldn't find this user, make sure there is no typo
        </Typography>
      )}
    </div>
  );
}
