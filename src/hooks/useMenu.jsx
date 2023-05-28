import { useEffect, useState } from "react";

const useMenu = () => {
  const [productsMenues, setProductsMenues] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("productsMenu.json")
      .then((res) => res.json())
      .then((data) => {
        setProductsMenues(data);
		setLoading(false)
      });
  }, []);

  return [productsMenues, loading];
};
export default useMenu;
