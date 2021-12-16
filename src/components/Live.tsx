import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchLive } from "../routes/api";

const Length = styled.div`
  background-color: #222;
  padding: 8px;
  margin-bottom: 20px;
  span {
    color: red;
  }
`;
const Box = styled.div`
  height: 250px;
  width: 315px;
  float: left;
  display: flex;
  color: white;
  background-color: #000;
  margin-bottom: 20px;
  margin-left: 20px;
  border-radius: 5px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  img {
    max-height: 250px;
    max-width: 315px;
  }
  a {
    float: left;
    align-items: center;
  }
  &:hover {
    a {
      color: #a2d8e6;
    }
  }
`;
const Profile = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 15px;
  border-radius: 30px;
`;
const Details = styled.div`
  font-size: 15px;
  .title {
    font-size: 13px;
  }
  .channelName {
    color: #49c8f0;
    &:hover {
      color: #0585ac;
    }
  }
  span {
    color: red;
  }
`;

interface IHoloLive {
  id: number;
  yt_video_key: string;
  bb_video_id: string;
  title: string;
  thumbnail: string;
  live_schedule: string;
  live_start: string;
  live_end: string;
  live_viewers: string;
  status: string;
  channel: {
    id: number;
    yt_channel_id: string;
    bb_space_id: string;
    name: string;
    description: string;
    photo: string;
    published_at: string;
    twitter_link: string;
  };
}

export function Live() {
  const { data } = useQuery<IHoloLive[]>("allLive", fetchLive);

  // 검색
  // const [search, setSearch] = useState("");
  // const searchSpace = (event: ChangeEvent<HTMLInputElement>) => {
  //   let keyword = event.target.value;
  //   setSearch(keyword);
  // };
  // const names = live
  //   .filter((item) => {
  //     if (search === null) return item;
  //     else if (item.channel.name.toLowerCase().includes(search)) {
  //       return item;
  //     }
  //   })
  //   .map((item) => {
  //     return (
  //       <div>
  //         <span>{item.channel.name}</span>
  //       </div>
  //     );
  //   });

  return (
    <>
      <Length>
        <span>Live:</span> {data?.length}
      </Length>
      {/* <div>
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => searchSpace(e)}
        />
        {names}
      </div> */}

      {data?.map((item) => (
        <Box key={item.yt_video_key}>
          <Link to={`/video/${item.yt_video_key}`}>
            <div>
              <div className="thumbnail">
                <img
                  src={`http://img.youtube.com/vi/${item.yt_video_key}/maxresdefault.jpg`}
                  alt="thumbnail"
                />
              </div>
              <div>
                <Link to={`/channel/${item.channel.yt_channel_id}`}>
                  <Profile src={`${item.channel.photo}`} />
                </Link>
                <Details>
                  <div className="title">{item.title}</div>
                  <Link to={`/channel/${item.channel.yt_channel_id}`}>
                    <div className="channelName">{item.channel.name}</div>
                  </Link>
                  <div>
                    <span>
                      <br />
                      Live Now
                    </span>{" "}
                    {item.live_viewers} Watching
                  </div>
                </Details>
              </div>
            </div>
          </Link>
        </Box>
      ))}
    </>
  );
}
