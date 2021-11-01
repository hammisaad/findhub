import * as React from "react";

import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Profile({
  user,
  repositories = [],
  organizations = [],
}) {
  return (
    <div className="user-card">
      <CardContent>
        <Avatar
          alt={user.login}
          src={user.avatar_url}
          sx={{ width: 120, height: 120, margin: "35px auto 15px auto" }}
        />

        <Typography variant="h5" sx={{ color: "white" }}>
          {user.login}
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          {user.bio}
        </Typography>

        <div
          style={{
            textAlign: "left",
            width: "100%",
            marginTop: 25,
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div className="repositories-container">
            <Typography variant="h5" color="primary">
              repositories
            </Typography>
            {repositories.length === 0 ? (
              <Typography
                variant="body1"
                sx={{ color: "white", width: "100%" }}
              >
                This user have 0 public repositories
              </Typography>
            ) : (
              repositories.map((repo) => (
                <Typography
                  key={repo.id}
                  variant="body1"
                  sx={{ color: "white", width: "100%" }}
                >
                  {repo.name}
                </Typography>
              ))
            )}
          </div>

          <div className="organizations-container">
            <Typography variant="h5" color="primary">
              organizations
            </Typography>

            {organizations.length === 0 ? (
              <Typography
                variant="body1"
                sx={{ color: "white", width: "100%" }}
              >
                This user have 0 public organizarions
              </Typography>
            ) : (
              organizations.map((org) => (
                <Typography
                  key={org.id}
                  variant="body1"
                  sx={{ color: "white", width: "100%" }}
                >
                  {org.login}
                </Typography>
              ))
            )}
          </div>
        </div>
      </CardContent>
    </div>
  );
}
