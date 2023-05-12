import { useLocation, useNavigate } from 'react-router-dom';

const useHandleSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const trigger = (value: string, query: string) => {
    searchParams.set(query, value);
    if(query !== "page") searchParams.set("page", "1");
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  return { trigger, navigate};
};

export default useHandleSelect;
