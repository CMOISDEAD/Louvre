import styled from "@emotion/styled";
import { AiOutlineInfoCircle, AiFillPlayCircle } from "react-icons/ai";

const Button = styled.button`
  background: #1f80e1;
  color: #f2f7fc;
  border: #1f80e1 solid;
`;

const A = styled.a`
  color: #1f80e1;
`;

const Card = styled.div`
  .main {
    width: 55vw;
    height: 55vh;
  }
  .card-footer {
    height: 8vh;
    .avatar {
      border-radius: 100%;
      width: 5vh;
      height: 5vh;
    }
  }
`;

export const Header = () => {
  return (
    <div className="flex">
      <div className="l-side mt-16">
        <h1 className="text-5xl font-bold">
          Discover, collect and sell extraordinary NFTs
        </h1>
        <div className="mt-7 text-gray text-2xl">
          OpenSea is the world's first and <br />
          largest NFT marketplace
        </div>
        <div className="button-group mt-5 mb-20">
          <Button className="px-10 py-3 rounded-lg mr-5">Explore</Button>
          <Button className="px-10 py-3 rounded-lg">Create</Button>
        </div>
        <A href="#" className="font-bold text-lg">
          <AiFillPlayCircle /> Learn About OpenSea
        </A>
      </div>
      <div className="r-side">
        <Card className="card shadow shadow-black rounded-lg">
          <img
            src="https://lh3.googleusercontent.com/cZHLd-BI6teXHbyjmQmhX7zfjnCwFnvcpsvL4GOThTffvZcZbfUIIjgU6E-GnMkfPT56Gq3XBuDdH_9fgQyDet6FgLNesZYRVxzrXy4=s550"
            alt=""
            className="main rounded-t-lg"
          />
          <div className="card-footer flex justify-between justify-items-center flex-nowrap p-3">
            <div className="inline">
              <img
                src="https://lh3.googleusercontent.com/hP96CgF_s98bk2eWdaJCcQmSymvxtBzbVzvuCY1s1hGeuK4SVygOY4QDVIMRHZFMB9OnVD6qATZ1_319DOUJhIrfYcl_g_qt6757=s80"
                alt=""
                className="avatar"
              />
              gale <br />
              <span className="text-sky-500">EbukaMordi</span>
            </div>
            <p>
              <AiOutlineInfoCircle />
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
