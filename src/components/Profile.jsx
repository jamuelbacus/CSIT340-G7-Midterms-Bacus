import { useState } from "react";
import Bio from "./Bio";
import StatCard from "./StatCard";
import Hire from "./Hire";
import Controls from "./Controls";

function Profile() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  return (
    <>
      <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
        <div>
          <Bio name="Jamuel Halili Bacus" username="jamuelbacus" />
          <div className="mt-6 flex gap-6">
            <StatCard value={followers} label="Followers" />
            <StatCard value={rate} label="PHP per hour" />
          </div>
        </div>
        <div className="flex gap-4">
          <Controls
            handleFollow={handleFollow}
            handleAddRate={handleAddRate}
            handleReset={handleReset}
          />
        </div>
      </div>
      <Hire props={{ rate }} />
    </>
  );
}

export default Profile;
