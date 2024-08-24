import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileInfo from "./ProfileImtem/ProfileInfo";
import ProfileTabs from "./ProfileImtem/ProfileTabs";
import ProfilePosts from "./ProfileImtem/ProfilePosts";
import ProfileTrips from "./ProfileImtem/ProfileTrips";
import ProfileSaved from "./ProfileImtem/ProfileSaved";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container-lg py-5" style={{ margin: "auto" }}>
      <div className="row">
        <div className="col-9" style={{ margin: "0 auto" }}>
          <div className="d-flex flex-column my-4 mx-4 w-100">
            <ProfileInfo />
          </div>
          <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />
          <div
            className="d-flex flex-column px-1 px-sm-4 w-100"
            style={{ borderTop: "1px solid rgba(0, 0, 0, 0.3)" }}
          ></div>

          {activeTab === "posts" && <ProfilePosts />}
          {activeTab === "trips" && <ProfileTrips />}
          {activeTab === "saved" && <ProfileSaved />}
        </div>
      </div>
    </div>
  );
}
