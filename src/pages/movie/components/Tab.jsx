import { format, parse, parseISO } from "date-fns";
import { isEmpty, map, uniqueId } from "lodash";
import React, { useCallback, useMemo } from "react";

// eslint-disable-next-line react/prop-types
export default function TabComponent({ cumRapChieu }) {
  //   const formatMovieDate = useCallback((movieDate) => {
  //     const date = new Date(movieDate);
  //     return format(date, "dd-MM-yyyy");
  //   }, []);

  const renderCumRapChieu = useMemo(() => {
    const formatMovieDate = (movieDate) => {
      const date = new Date(parseISO(movieDate));
      console.log(date);
      return format(date, "dd-MM-yyyy ~ HH:mm");
    };

    if (isEmpty(cumRapChieu)) {
      return;
    }
    return map(cumRapChieu, (rap) => {
      return (
        <div className="text-white" key={uniqueId("rap_")}>
          <p className="mb-5 m-[10px]">{rap.tenCumRap}</p>
          {map(rap.lichChieuPhim, (lich) => {
            return (
              <span
                className="rounded-md bg-[#162F5F] p-[8px] m-[10px] hover:bg-[#31D7A9] cursor-pointer inline-block"
                key={uniqueId("lichChieu_")}
              >
                {formatMovieDate(lich.ngayChieuGioChieu)}
              </span>
            );
          })}
          {/* <span className="rounded-md bg-[#162F5F] p-[8px] m-[10px] hover:bg-[#31D7A9] cursor-pointer">
            01 - 01 - 1970 ~ 08:00
          </span> */}
        </div>
      );
    });
  }, [cumRapChieu]);
  return (
    <div>
      {/* <div className="text-white">
        <p className="mb-5 m-[10px]">BHD Star</p>
        <span className="rounded-md bg-[#162F5F] p-[8px] m-[10px] hover:bg-[#31D7A9] cursor-pointer">
          01 - 01 - 1970 ~ 08:00
        </span>
        <span className="rounded-md bg-[#162F5F] p-[8px] m-[10px] hover:bg-[#31D7A9] cursor-pointer">
          01 - 01 - 1970 ~ 08:00
        </span>
      </div>
      <div className="text-white">
        <p className="mb-5 m-[10px]">BHD Star</p>
        <span className="rounded-md bg-[#162F5F] p-[8px] m-[10px] hover:bg-[#31D7A9] cursor-pointer">
          01 - 01 - 1970 ~ 08:00
        </span>
        <span className="rounded-md bg-[#162F5F] p-[8px] m-[10px] hover:bg-[#31D7A9] cursor-pointer">
          01 - 01 - 1970 ~ 08:00
        </span>
      </div> */}
      {renderCumRapChieu}
    </div>
  );
}
