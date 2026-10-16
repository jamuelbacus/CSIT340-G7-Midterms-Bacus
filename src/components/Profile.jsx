import { useState } from "react";
import Bio from "./Bio";
import StatCard from "./StatCard";
import Hire from "./Hire";

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
    <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
      <div>
        <Bio name="Jamuel Halili Bacus" username="jamuelbacus" />
        <div className="mt-6 flex gap-6">
          <StatCard value={followers} label="Followers" />
          <StatCard value={rate} label="PHP per hour" />
        </div>
      </div>
      <Hire rate={rate} />
      <div className="flex gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
          onClick={handleFollow}
        >
          Follow
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
          onClick={handleAddRate}
        >
          Add rate
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Profile;
