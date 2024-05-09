import { IDataFormatted } from "./interfaces/IDataFormatted";

const DataFormatted = ({dataPubblicazione}:IDataFormatted ) => {
  const formattedDate = new Date(dataPubblicazione).toLocaleDateString();
  
  return <span className="my-5">Published at: {formattedDate}</span>;
};

export default DataFormatted;
