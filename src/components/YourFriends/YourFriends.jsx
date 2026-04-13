import FriendCard from "../FriendCard/FriendCard";


const YourFriends = async() => {

    const res = await fetch('http://localhost:3000/friendsData.json',{cache:'no-store'});
    const friends = await res.json();
    console.log(friends);
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="font-bold text-2xl my-5">Your Friends</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-20 p-3">
                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default YourFriends;