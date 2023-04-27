import React, { useState } from "react";

const forumsData = [
  {
    id: 1,
    name: "Forum 1",
    category: "شلوغ ترین انجمن",
    memberships: ["user1", "user2", "user3"],
  },
  {
    id: 2,
    name: "Forum 2",
    category: "محبوب ترین انجمن",
    memberships: ["user2", "user3", "user4"],
  },
  {
    id: 3,
    name: "Forum 3",
    category: "مفید ترین انجمن",
    memberships: ["user1", "user4"],
  },
  {
    id: 4,
    name: "Forum 4",
    category: "بد ترین انجمن",
    memberships: ["user3", "user4"],
  },
];

const userForums = (user) =>
  forumsData.filter((forum) => forum.memberships.includes(user));

const categories = [...new Set(forumsData.map((forum) => forum.category))];

const Forums = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>My Forums</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {selectedCategory
          ? userForums("currentUser")
              .filter((forum) => forum.category === selectedCategory)
              .map((forum) => (
                <li key={forum.id}>
                  <h3>{forum.name}</h3>
                  <p>{forum.category}</p>
                </li>
              ))
          : userForums("currentUser").map((forum) => (
              <li key={forum.id}>
                <h3>{forum.name}</h3>
                <p>{forum.category}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Forums;
