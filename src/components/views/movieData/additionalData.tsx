import { FC } from "react";
import { SecondaryTitle } from "components/common/title/secondaryTitle";
import { BsStarFill } from "react-icons/bs";
import { AdditionalDataCont } from "./additionalDataCont";

type AdditionalDataPropsType = {
  plot: string | undefined;
  imdbRating: string | undefined;
  actors: string | undefined;
};

const AdditionalData: FC<AdditionalDataPropsType> = ({
  plot,
  imdbRating,
  actors,
}) => {
  return (
    <AdditionalDataCont>
      <div className="addDataItem">
        <SecondaryTitle>Storyline Unveiled (plot)</SecondaryTitle>
        <p>{plot}</p>
      </div>
      <div className="addDataItem">
        <SecondaryTitle>Internet Movie Database (IMDb) Rating</SecondaryTitle>
        <p>
          <BsStarFill />
          {"  "}
          {imdbRating}
        </p>
      </div>
      <div className="addDataItem">
        <SecondaryTitle>actors</SecondaryTitle>
        <p>{actors}</p>
      </div>
    </AdditionalDataCont>
  );
};

export default AdditionalData;
