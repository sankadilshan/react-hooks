import { useEffect, useState } from "react";

function EffectExtn() {
  const [value, setValue] = useState(1);
  const [data, setData] = useState();

  useEffect(() => {
    value > 0 && fetch(`https://dummyjson.com/products/${value}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(json);
      });
  }, [value]);

  var handleInputOnChange = (value) => {
    console.log(value);
    setValue(value);
  };
  return (
    <>
      <div>
        <label>Enter input</label>
        <input
          type="text"
          placeholder={value}
          onChange={(e) => handleInputOnChange(e.target.value)}
        />
      </div>
      <div>
        <h1>Data</h1>
        {data && Object.keys(data)}
        <ul>
          {data &&
            Object.keys(data).map((k, i) => {
              return (
                <li key={i}>
                 {k}<span>  </span>
                  {data[k]}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default EffectExtn;
