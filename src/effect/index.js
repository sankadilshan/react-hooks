import { useEffect, useState } from "react";

function Effect() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json.posts);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <div>Data loading</div>}
      {!isLoading && (
        <ul>
          {data.map((d) => (
            <li key={d.id}>
              <h1>{d.title}</h1>
              <ul>
                {d.tags.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Effect;
