import { useQuery } from "react-query";
import { getWorks } from "../api/worksAPI";

function Works() {
  const {
    isLoading,
    data: works,
    isError,
    error,
  } = useQuery({
    queryKey: ["works"],
    queryFn: getWorks,
  });

  if (isLoading) return <div>Loading...</div>;
  else if (works.length === 0) return <div>No hay trabajos aun</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  console.log(works);

  return works.map((work) => (
    <div key={work.id}>
      <h2>{work.title}</h2>
      <p>{work.description}</p>
      <img src={work.image} alt={`${work.title} photo`} />
      <a href={work.link_1} target="_blank">Pagina</a>
      <p>{work.link_2}</p>
      <p>{work.tech_1}</p>
      <p>{work.tech_2}</p>
      <p>{work.tech_3}</p>
      <p>{work.type}</p>
    </div>
  ));
}

export default Works;
