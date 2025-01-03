import React from "react";
import Title from "../Components/Title";
import img from "../assets/Project1image.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const url =
    "https://onedrive.live.com/personal/76fb1cb1ddc69838/_layouts/15/Doc.aspx?sourcedoc=%7Beca08137-069a-4f6f-a5ab-6ad0461b5791%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy83NmZiMWNiMWRkYzY5ODM4L0VUZUJvT3lhQm05UHBhdHEwRVliVjVFQjRZQy1rQWpJNnQ0Zk9jRzh3WFVGY1E_ZT1ZN1lTc2U&slrid=baf473a1-a03f-7000-521f-35e17b36d8fe&originalPath=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy83NmZiMWNiMWRkYzY5ODM4L0VUZUJvT3lhQm05UHBhdHEwRVliVjVFQjRZQy1rQWpJNnQ0Zk9jRzh3WFVGY1E_cnRpbWU9eFBxRGZCZ3MzVWc&CID=4c3118e6-e7df-4055-97db-ab13576d01c6&_SRM=0:G:41";
  return (
    <div className="">
      <Title text1={"My"} text2={"Projects"} />
      <div className=" px-4 py-3 rounded-md shadow-md shadow-gray-500">
        <div className="text-2xl font-medium text-gray-800">
          Project 1
        </div>
        <div className="flex gap-4 items-center mt-5 px-5">
          <Link to={url} target="_blank" >
          <img src={img} className="w-72 aspect-video object-cover" alt="" />
          </Link>
          <p className="text-lg font-medium text-gray-800">
            A detailed document showcasing the design, features, and
            implementation of the project. It includes technical specifications,
            development process insights, and key highlights. Perfect for
            understanding the scope and execution of the project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
