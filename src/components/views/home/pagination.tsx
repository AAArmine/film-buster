import { Pagination } from "antd";
import { Dispatch, SetStateAction, FC } from "react";

type PaginationSecPropsType = {
  setPage: Dispatch<SetStateAction<number>>;
};
const PaginationSec: FC<PaginationSecPropsType> = ({ setPage }) => {
  return (
    <Pagination
      total={100}
      defaultCurrent={1}
      pageSize={10}
      className="custom-pagination"
      showSizeChanger={false}
      onChange={(page) => {
        setPage(page);
      }}
    />
  );
};

export default PaginationSec;
