import React, { useEffect } from "react";

import Header from "../components/header.component";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Not Found - Instaclone";
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gray-background">
        <div className="mx-auto max-w-screen-lg">
          <p className="text-center text-2xl">Not Found!</p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
